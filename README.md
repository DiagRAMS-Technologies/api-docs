# DiagRAMS api docs

The DiagRAMS API docs is a web-site for explain how use the API with DiagRAMS.

The DiagRAMS api docs is backed with the [Next.js](https://nextjs.org/)
framework. We chosen it for:

- its good defaults (lots of optimization out of the box),
- its React oriented approach,
- its TypeScript compatibility.

We also use [`styled-jsx`](https://github.com/vercel/styled-jsx) that allows us
to simply use CSS but in a scoped way. We chosen it for:

- its very low learning curve (compared to TypeScript/React/NextJS 😅),
- its fit with our very custom design that enforce us to have a lot of custom
  components

We use Jest for testing and components librairies in order to
build interfaces starting by components.

## Setup your local environment

You must clone this repository before doing any of the next steps :

```sh
git clone git@github.com:DiagRAMS-Technologies/api-docs.git
```

## Getting Started

Once ready, just install the dependencies, husky and compile the project:

```sh
npm i
npm run prepare
npm run build
```

Then, run the development server:

```bash
npm run dev
```

You can then test your whole build:

```sh
npm t
```

Or you can just run the unit tests:

```sh
npm run jest
npm run jest -- --watch
```

Open [http://docs.diagrams.localhost:3000](http://docs.diagrams.localhost:3000)
with your browser to see the result.
