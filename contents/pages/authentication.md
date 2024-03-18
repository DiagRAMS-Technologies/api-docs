---
title: Authentication
description: Discover how to authenticate with our API
date: "2023-04-20T14:15:47.659Z"
draft: false
---

# API Auth guide

Welcome to the API Authentication Guide!

We're excited to have you on board and help you get started with sending data to our API.

## First task!

To start sending us data, you will need the following information, [please contact us](mailto:support@diagrams-technologies.com?subject=Application%20credentials%20request) if you didn't get them:

- `ML_PROJECT`: the code of the anomaly detection project we created for you,
- `ORGANISATION_ID`: the organisation id of your company in our systems,
- `APPLICATION_ID`: the id of the application we created for you,
- `APPLICATION_SECRET`: a unique string to keep secret that authenticates you.

## Generate token

You can now generate a token with this request:

```sh
curl -X POST 'https://api.diagrams-technologies.com/v0/oauth2/token' \
-u"APPLICATION_ID:APPLICATION_SECRET" \
-H'Content-Type: application/x-www-form-urlencoded' \
--data-binary 'grant_type=client_credentials'
```

And here's the result of the request.

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

The token is only valid for a certain duration (which can change depending on the load), after which it will have to be renewed by creating a new token or by renewing the previous one thanks to the `refresh_token` associated with it:

```sh
curl -X POST 'https://api.diagrams-technologies.com/v0/oauth2/token' \
-H'Content-Type: application/x-www-form-urlencoded' \
--data-binary 'grant_type=refresh_token&scope=data&refresh_token=refresh_token_encoded' \
```

For renewal, several possible strategies:

- Keep the value of the `expires_in` field of the token and check it before sending,
- Wait until you encounter a 401 error to renew it and retry the call,
- Decode the JWT token to extract its expiration date before the call.
