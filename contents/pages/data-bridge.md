---
title: Data bridge
description: Learn how to wire your data with us.
date: "2023-04-20T14:15:47.659Z"
draft: false
illustration:
  href: "/illustrations/banner.jpg"
  alt: "DiagRAMS banner"
---

# Data bridge

As per the ingestion schema, we have two ways to synchronize the data with our customers : **push** mode.

The push mode is preferably the one we want to promote since it allows to have realtime ingestion of the data and to have less stress on
our infrastructure.

## First task !

You can send us data using the token retrieved by the previous call and your ML_PROJECT code :

If you don't have this click [here](/authentication).

## Push mode through our HTTPS API

The postOrganisationData endpoint allows users to send us some data. To do so, they need a APPLICATION_ID/SECRET couple.

You can generate one by running :

```sh
curl -X "POST"
    -H "Authorization: bearer access_token"
    https://api.diagrams-technologies.com/v0/organisations/ORGANISATION_ID/data/ML_PROJECT
    -H -H "Content-Type: application/json"
    -d "[{\"sensorId\":\"1\",\"date\":\"2020-01-01T08:03:51.000Z\",\"value\":19.9},{\"sensorId\":\"2\",\"date\":\"2020-01-01T08:03:51.000Z\",\"value\":0},{\"sensorId\":\"3\",\"date\":\"2020-01-01T08:03:51.000Z\",\"value\":\"1\"}]"
```

In this call, it suffices to provide us with a list of triples containing :
- a **sensorId** : allowing to uniquely identify a sensor thanks to a character string,
- an optional **valueName** field : corresponding to a value associated with the sensor for a specific variable (by default &quot;none&quot;), it is useful for example to indicate the x/y/z axes of an accelerometer. This field can only contain lowercase letters, numbers or an underscore (_).,
- A **date** : indicating the UTC date of the reading in ISO format (UTC => universal time, very important for what follows).
- a **value** : corresponding to its value at this time, this value must imperatively be a number (a value like **value: '3.14'** will be refused, use **value: 3.14** instead).

**Warning** : the pair sensorId/valueName must be unique for each sensor.
 Once put into production, these names must not change without prior consultation with our teams to update our correspondence tables.
