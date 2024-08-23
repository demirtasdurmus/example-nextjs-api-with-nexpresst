import { apiRouter } from "@/lib/api-router";
import { exportAllHttpMethods, IRouteHandler } from "nexpresst";

const notFoundHandler: IRouteHandler = async (_req, res) => {
  return res.statusCode(404).end();
};

export const { GET, POST, PUT, DELETE, PATCH, HEAD } = exportAllHttpMethods(
  apiRouter,
  notFoundHandler
);
