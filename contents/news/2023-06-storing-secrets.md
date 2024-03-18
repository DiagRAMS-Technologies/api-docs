---
title: Considerations for storing secrets
description: When using the DiagRAMS API you will need to store our application id/secret pair, here are some key principles to keep in mind.
leafname: storing-secrets
date: "2023-06-05T11:00:00Z"
draft: false
illustration:
  url: "illustrations/StoringSecrets.jpg"
  alt: "Picture of storing secrets"
---

# Storing secrets

When integrating a client with your application, it is often necessary to share and store application credentials (APPLICATION_ID/APPLICATION_SECRET) to enable secure communication with external APIs. It is essential to follow best practices to protect this sensitive information and avoid security breaches. This page outlines key recommendations for storing and exchanging application credentials securely.

Protecting application credentials is critical to keep your application and customer data secure. By following the best practices outlined on this page, you can reduce the risk of compromised credentials and increase the overall security of your systems.

## Use environment variables

Environment variables are a common way to store application credentials outside of source code. They make them accessible only within the runtime environment and are particularly useful when deploying to servers or cloud services. Take care to never include application identifiers directly in the source code or configuration files.

## Limit access to credentials

Grant access to application credentials only to the right people (least privilege principle).

## Use secrets management solutions

Secrets management solutions, such as AWS Secrets Manager, Terraform Vault, provide advanced functionalities to securely store and manage application credentials. They provide mechanisms for encryption, auditing, and automatic secrets rotation. By using these solutions, you can centralize the credentials management and reduce risks related to their storage.

## Encrypt Application Secrets

If you need to store application credentials in a database or file, be sure to encrypt them before. Use strong and secure encryption algorithms, and be sure to protect the encryption keys themselves. Ideally, use an asymmetric encryption mechanism with a secure private key.

## Exchanging secrets

Exchanging secrets requires clear instructions to ensure the security of sensitive information. One of the recommended methods is to use PGP (Pretty Good Privacy) to encrypt and decrypt secrets. PGP is a widely used asymmetric cryptography system that ensures the confidentiality and authenticity of data exchanged.


```sh
# You can encrypt your PGP key with:
gpg --default-new-key-algo rsa4096 --gen-key

# You can see all your access_key_secret with:
gpg --list-secret-keys --keyid-format=long
 
# You can decrypt with:
gpg --export your_acces_key | base64 
```

There are also free online platforms that specialize in trading secrets, but we do not recommend it. If you really need to use it, do not share the APPLICATION_SECRET and APPLICATION_ID in the same message and avoid any reference to the DiagRAMS API.

## Secret stolen?

If you think your secret is compromised for any reason, please [inform us](support@diagrams-technologies.com) as soon as possible. We will instantly disable it and provide you with new credentials.
