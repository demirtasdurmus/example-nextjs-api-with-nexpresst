export const API_ENDPOINTS = [
  {
    category: "Auth",
    endpoints: [
      {
        method: "POST",
        path: "/auth/register",
        description: "Register",
      },
      {
        method: "POST",
        path: "/auth/login",
        description: "Login",
      },
    ],
  },
  {
    category: "V1 - Posts",
    endpoints: [
      {
        method: "GET",
        path: "/v1/posts",
        description: "Retrieve a list of posts",
      },
    ],
  },
  {
    category: "Posts",
    endpoints: [
      {
        method: "GET",
        path: "/posts",
        description: "Retrieve a list of posts",
      },
      {
        method: "POST",
        path: "/posts",
        description: "Create a new post",
      },
      {
        method: "GET",
        path: "/posts/[id]",
        description: "Retrieve a specific post by ID",
      },
      {
        method: "PATCH",
        path: "/posts/[id]",
        description: "Update a post by ID",
      },
      {
        method: "DELETE",
        path: "/posts/[id]",
        description: "Delete a post by ID",
      },
    ],
  },
  {
    category: "Translation",
    endpoints: [
      {
        method: "GET",
        path: "/translation",
        description: "Get a translation",
      },
    ],
  },
];
