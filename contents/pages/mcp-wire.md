---
title: Bring DiagRAMS to you AI companion
description: Leverage the power of DiagRAMS in you own AI systems.
date: "2026-08-13T12:00:00.000Z"
draft: false
---

# Bring DiagRAMS to you AI companion

DiagRAMS provide a MCP (Model Context Protocol) server allowing you to bring the DiagRAMS tools and data to any LLM (Large Language Model) provider.

To do so, you just have to create a new application (Factory Icon > Application), add the "user", "oauth" scopes, the "Authorization Code" and "Refresh Token" grants and set up the callback URL of your LLM provider (by example [for Claude](https://claude.com/docs/connectors/building/authentication#callback-urls): `https://claude.ai/api/mcp/auth_callback`).

In your LLM provider interface, provide the DiagRAMS MCP configuration:

- the MCP server endpoint: `https://api.diagrams-technologies.com/mcp`,
- the Client ID/Secret couple you got when creating the application,
- the OAuth2 details could be discovered automatically but you can provide those details by picking it inside the [authorization server metadata](https://api.diagrams-technologies.com/.well-known/oauth-authorization-server).

The MCP server basically exposes the API capabilities that make sense for this kind of usage (almost all its user facing features).

To get more guidance for your specific usage or for any support request, feel free to [contact us](mailto:support-diagrams@dv-group.com?subject=MCP%20server%20support%20request).
