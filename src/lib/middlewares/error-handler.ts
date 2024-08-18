import { IMiddlewareHandler } from "nexpresst";

// Example error handler middleware
export const errorHandler: IMiddlewareHandler = (_req, res, next) => {
  return next().catch((err: unknown) => {
    /**
     * This is just a simple demonstration of how to handle errors.
     * Add your custom error logging and response handling here.
     */
    if (err instanceof Error) {
      return res.statusCode(500).send({ name: err.name, message: err.message });
    }
    return res
      .statusCode(500)
      .send({ name: "INTERNAL_SERVER_ERROR", message: "Something went wrong" });
  });
};
