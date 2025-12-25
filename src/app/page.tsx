import { API_ENDPOINTS } from "@/config";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-20">
      <div className="z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Example Next.js API with{" "}
            <span className="text-blue-600 dark:text-blue-400">Nexpresst</span>{" "}
            🚀
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A comprehensive example demonstrating how to use the{" "}
            <a
              href="https://github.com/demirtasdurmus/nexpresst"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-gray-100 px-2 py-1 text-sm dark:bg-gray-800 hover:underline"
            >
              nexpresst
            </a>{" "}
            library to build Express-like APIs in a Next.js application.
          </p>
        </div>

        {/* Repository Section */}
        <div className="mb-12 rounded-lg border border-gray-200 bg-linear-to-br from-blue-50 to-indigo-50 p-6 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
          <h2 className="mb-3 text-2xl font-semibold">Repository</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Explore the source code and contribute to this project on GitHub:
          </p>
          <a
            href="https://github.com/demirtasdurmus/example-nextjs-api-with-nexpresst"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View on GitHub →
          </a>
        </div>

        {/* API Endpoints Section */}
        <div className="mb-12">
          <h2 className="mb-6 text-3xl font-semibold">API Endpoints</h2>
          <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
              Base URL:
            </p>
            <code className="text-sm">
              https://example-nextjs-api-with-nexpresst.vercel.app/api
            </code>
          </div>

          <div className="space-y-6">
            {API_ENDPOINTS.map((category) => (
              <div
                key={category.category}
                className="rounded-lg border border-gray-200 p-6 dark:border-gray-800"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.endpoints.map((endpoint, index) => {
                    const colors = getMethodColorClasses(endpoint.method);
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <span
                          className={`rounded px-2 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}
                        >
                          {endpoint.method}
                        </span>
                        <code className="text-sm">{endpoint.path}</code>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {endpoint.description}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-6 text-3xl font-semibold">Getting Started</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                1. Clone the repository
              </h3>
              <code className="block rounded bg-gray-800 p-3 text-sm text-gray-100">
                git clone
                https://github.com/demirtasdurmus/example-nextjs-api-with-nexpresst.git
                <br />
                cd example-nextjs-api-with-nexpresst
              </code>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                2. Install dependencies
              </h3>
              <code className="block rounded bg-gray-800 p-3 text-sm text-gray-100">
                npm install
              </code>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                3. Start the development server
              </h3>
              <code className="block rounded bg-gray-800 p-3 text-sm text-gray-100">
                npm run dev
              </code>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">4. Test the API</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Use an HTTP client such as Postman, curl, or any REST client to
                test the endpoints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const getMethodColorClasses = (method: string) => {
  const colors: Record<string, { bg: string; text: string }> = {
    GET: {
      bg: "bg-blue-100 dark:bg-blue-900",
      text: "text-blue-800 dark:text-blue-200",
    },
    POST: {
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-800 dark:text-green-200",
    },
    PATCH: {
      bg: "bg-yellow-100 dark:bg-yellow-900",
      text: "text-yellow-800 dark:text-yellow-200",
    },
    DELETE: {
      bg: "bg-red-100 dark:bg-red-900",
      text: "text-red-800 dark:text-red-200",
    },
    PUT: {
      bg: "bg-purple-100 dark:bg-purple-900",
      text: "text-purple-800 dark:text-purple-200",
    },
  };

  return (
    colors[method] || {
      bg: "bg-gray-100 dark:bg-gray-900",
      text: "text-gray-800 dark:text-gray-200",
    }
  );
};
