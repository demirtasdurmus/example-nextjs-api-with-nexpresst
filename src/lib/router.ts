import { Router, queryParser, jsonParser } from "nexpresst";
import { errorHandler } from "./middlewares/error-handler";
import { cors } from "./middlewares/cors";

export function apiRouter() {
  return new Router()
    .onError(errorHandler)
    .use(cors)
    .use(queryParser)
    .use(jsonParser);
}
