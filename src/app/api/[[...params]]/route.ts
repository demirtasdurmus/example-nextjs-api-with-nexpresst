import { apiRouter } from "@/lib/router";
import { exportAllMethodsV2, IRouteHandler } from "nexpresst";

const notFoundHandler: IRouteHandler = async (_req, res) => {
  return res.statusCode(404).end();
};

export const { GET, POST, PUT, DELETE, PATCH, HEAD } = exportAllMethodsV2(
  apiRouter,
  notFoundHandler
);
