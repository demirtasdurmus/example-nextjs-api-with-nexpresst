import { apiRouter } from "@/lib/router";
import { exportAllMethods, IRouteHandler } from "nexpresst";

const notFoundHandler: IRouteHandler = async (req, res) => {
  return res.statusCode(404).end();
};

const router = apiRouter.all(notFoundHandler);

export const { GET, POST, PUT, DELETE, PATCH, HEAD } = exportAllMethods(router);
