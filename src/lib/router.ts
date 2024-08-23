import { queryParser, jsonParser, RouterV2, TNextContext } from "nexpresst";
import { errorHandler } from "./middlewares/error-handler";
import { cors } from "./middlewares/cors";
import { NextRequest } from "next/server";

export const apiRouter = (req: NextRequest, ctx: TNextContext) =>
  new RouterV2(req, ctx)
    .onError(errorHandler)
    .use(cors)
    .use(queryParser)
    .use(jsonParser);
