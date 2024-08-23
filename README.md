# Example Next.js API with Nexpresst 🚀

Welcome to the Example Next.js API with Nexpresst repository! This project demonstrates how to use the `nexpresst` library to build Express-like APIs in a Next.js application. The repository includes a full set of CRUD endpoints to showcase the capabilities of `nexpresst`.

## Overview

This project is designed to provide a comprehensive example of building and managing API routes in a Next.js application using the `nexpresst` library. It includes a complete set of CRUD operations, demonstrating how to set up and handle different types of HTTP requests with `nexpresst`.

## Deployment

<!-- TODO:Update this to main branch domain once nextpresst 1.3.0 is a stable release, https://example-nextjs-api-with-nexpresst.vercel.app/ -->

The example application is deployed and accessible at: [https://example-nextjs-api-with-nexpresst-release.vercel.app](https://example-nextjs-api-with-nexpresst-release.vercel.app).

Feel free to explore the deployed application to see `nexpresst` in action!

## API Endpoints

### Base URL

<!-- TODO: Update base url as well. -->

The base URL for the API is: `https://example-nextjs-api-with-nexpresst-release.vercel.app/api`.

### Endpoints

- **Auth**

  - POST `/auth/register`: Register
  - POST `/auth/login`: Login

- **Posts**

  - GET `/posts`: Retrieve a list of posts.
  - POST `/posts`: Create a new post.
  - GET `/posts/[id]`: Retrieve a specific post by ID.
  - PATCH `/posts/[id]`: Update a post by ID.
  - DELETE `/posts/[id]`: Delete a post by ID.

## Getting Started

To run this project locally:

1. Clone the repository:

```bash
git clone https://github.com/demirtasdurmus/example-nextjs-api-with-nexpresst.git
cd example-nextjs-api-with-nexpresst
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server::

```bash
npm run dev
```

4. Test it with an HTTP client such Postman etc.
