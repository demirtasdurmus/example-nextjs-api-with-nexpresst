import { Router, queryParser, jsonParser } from "nexpresst";
import { errorHandler } from "./middlewares/error-handler";

export const apiRouter = new Router()
  .onError(errorHandler)
  .use(queryParser)
  .use(jsonParser);
