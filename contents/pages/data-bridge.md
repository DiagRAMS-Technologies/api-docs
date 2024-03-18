---
title: Data bridge
description: Learn how to wire your data with us.
date: "2023-04-20T14:15:47.659Z"
draft: false
---

# Data bridge

At DiagRAMS, we are detecting anomalies into your factories sensor data. We need to retrieve that data though a bridge.

The best way to do it is to **use our push API**. It allows you to send us your sensors data on the fly, eventually retry sending that data. It is efficient, sure and doesn't introduce any delay in the data processing.

On the other hand, we can enable **the pull mode**. With this mode, we regularly try to retrieve the data from your own API or data provider, supporting a wide variety of platforms listed above.

## ML Project setup

In either push and pull mode, we will first need to create an `ML_PROJECT` code. If you don't have it already, [contact us](mailto:support@diagrams-technologies.com?subject=Ml%20project%20code%20request).

## Push mode through our HTTPS API

The data push endpoint allows you to send us your data. You can do so by calling our API this way (replace the uppercase string with their values):

```sh
curl -X "POST" -H 'Authorization: Bearer $ACCESS_TOKEN' \
'https://api.diagrams-technologies.com/v0/organisations/ORGANISATION_ID/data/ML_PROJECT' \
-H  "Content-Type: application/json" \
-d '[{"sensorId":"GDPD-DEB_MASS1.PV","valueName":"x","date":"2020-01-01T08:03:51.000Z","value":19.9,"precision":100}]'
```

In this call, it suffices to provide us with a list of triples containing:

- A **sensorId**: allowing to uniquely identify a sensor thanks to a character string,
- An optional **valueName** field: corresponding to a value associated with the sensor for a specific variable (by default &quot;none&quot;), it is useful for example to indicate the x/y/z axes of an accelerometer. This field can only contain letters (lowercase and uppercase), numbers or underscores (\_),
- A **date**: indicating the UTC date of the reading in ISO format (UTC => universal time),
- A **value**: corresponding to its value at this time, this value must imperatively be a number (a value like **value: '3.14'** will be refused, use **value: 3.14** instead),
- An optional **labels** field: for data tagging purposes, enabling specific tags or categories to be assigned to associated data, making it easier to organize, classify and further process.

**Warning**: the pair sensorId/valueName must be unique for each sensor.

Once in production, these names must not change without prior consultation with our teams to update our matching tables.

## Pull mode

We can also retrieve data from your API. In this case, we will regularly call your API for new data for a given time frame.

**Warning**: if you take this solution, a huge overload can be observed, depending on how frequently we reach your API.

We already support a few APIs available in the market:

### Aveva

To use our [Aveva](https://docs.aveva.com/) data bridge, we will need the following information:

- The API base URL,
- An API username,
- An API password.

### IFM Moneo

To use our [IFM Moneo](https://www.ifm.com/gb/en) data bridge, we will need the following information:

- The API base URL,
- An API client id,
- An API secret.

### MindSphere

To use our [MindSphere](https://documentation.mindsphere.io/MindSphere/index.html) data bridge, we will need the following information:

- The API base URL,
- The auth server base URL,
- An API client id,
- An API secret.

### Osisoft PI

To use our [OsisoftPI](https://www.aveva.com/en/products/aveva-pi-system/) data bridge, we will need the following information:

- The API base URL,
- An API client id,
- An API secret.

### Custom API bridge

We can study any API data bridge development if you provide us with the documentation. Feel free to [contact us](mailto:support@diagrams-technologies.com?subject=custom+data+bridge+request).
