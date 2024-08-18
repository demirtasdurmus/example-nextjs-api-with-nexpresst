import { Router, queryParser, jsonParser } from "nexpresst";
import { errorHandler } from "./middlewares/error-handler";
import { cors } from "./middlewares/cors";

export const apiRouter = () =>
  new Router().onError(errorHandler).use(cors).use(queryParser).use(jsonParser);
