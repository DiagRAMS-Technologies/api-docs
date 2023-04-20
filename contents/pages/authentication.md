---
title: Authentification
description: Discover how to authenticate with our API
date: "2023-04-20T14:15:47.659Z"
draft: false
illustration:
  href: "/illustrations/banner.jpg"
  alt: "DiagRAMS banner"
---

# API Auth guide

A text of welcome !

## First task !

To start sending us data, you will need :
          
- `ML_PROJECT`
- `ORGANISATION_ID`
- `APPLICATION_ID`
- `APPLICATION_SECRET`

## Generate token

You can now generate token with request :
          
```bash 
curl -X POST 
'https://api.diagrams-technologies.com/v0/oauth2token' 
-u"APPLICATION_ID:APPLICATION_SECRET" 
-H'Content-Type: application/x-www-form-urlencoded' --data-binary 'grant_type=client_credentials'
```
          
And it's the result of the request.
          
```json 
{
    "access_token": "xxx.yyy.zzz",
    "token_type": "bearer",
    "expires_in": 172800,
    "expiration_date": "2021-10-27T12:06:28.828Z",
    "refresh_token": "xxxyyyzzzz==",
    "refresh_token_expires_in": 31557600,
    "refresh_token_expiration_date": "2022-10-25T18:06:28.849Z"
}
```

## Validity token

The token is only valid for a certain duration (which can change depending on the load), after which it will have to be renewed by creating a new token or by renewing the previous one thanks to the refresh_token associated with it:
          
```bash 
curl -X POST 'https://api.diagrams-technologies.com/v0/oauth2/token' 
-H'Content-Type: application/x-www-form-urlencoded' --data-binary 'grant_type=refresh_token&scope=data&refresh_token=refresh_token_encoded' 
-u"APPLICATION_ID:APPLICATION_SECRET"
```
          
For renewal, several possible strategies:
          
- Keep the value of the expires_in field of the token and check it before sending.
- Wait to encounter a 401 error to renew it and retry the call.
- Decode the JWT token to extract its expiration date before the call.
