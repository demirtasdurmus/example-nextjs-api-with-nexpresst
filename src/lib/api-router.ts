import { queryParser, jsonParser, ApiRouter, TNextContext } from "nexpresst";
import { errorHandler } from "./middlewares/error-handler";
import { cors } from "./middlewares/cors";
import { NextRequest } from "next/server";

export const apiRouter = (req: NextRequest, ctx: TNextContext) =>
  new ApiRouter(req, ctx)
    .onError(errorHandler)
    .use(cors)
    .use(queryParser)
    .use(jsonParser);
