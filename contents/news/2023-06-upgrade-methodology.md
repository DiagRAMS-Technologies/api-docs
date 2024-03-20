---
title: API upgrade methodology
description: We took some time to write down our API upgrade methodology in order to let you know how to embrace our API upgrades.
leafname: upgrade-methodology
date: "2023-06-05T11:00:00Z"
draft: false
illustration:
  url: "illustrations/UpgradeMethodology.jpg"
  alt: "Picture of upgrade methodology"
---

# API upgrade methodology

For our API versioning, we are relying on [semantic versioning](https://semver.org/). As long as we do not upgrade the major version, any changes we make on the API have to be backward compatible.

If you hit any breaking change during a minor or patch update, feel free [to warn us](mailto:support@diagrams-technologies.com), we will take care to fix the issue.

Otherwise, for major changes, we will warn you 6 months before the change in order to let you prepare your codebase. We will try to make the changes the least annoying and always take backward compatibility for first approach.

We may also maintain old APIs, whenever possible, in order to let you the chance to change your API clients on the fly at your own rhythm.

## Easing changes

A good manner to make changes less difficult to handle is to use one of the SDK [generators available](https://openapi-generator.tech/docs/generators/) for OpenAPI declaration and to create your own SDK for the langage of your choice.

Feel free to try our [API generator using TypeScript](https://github.com/nfroidure/openapi-ts-sdk-builder) and though allowing to use typings as a guard to avoid compiling code that uses old API endpoints.
