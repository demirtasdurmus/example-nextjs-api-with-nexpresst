import {
  queryParser,
  jsonParser,
  ApiRouter,
  TNextContext,
  expressMiddlewareWrapper,
} from "nexpresst";
import { errorHandler } from "./middlewares/error-handler";
import { cors } from "./middlewares/cors";
import { NextRequest } from "next/server";
import helmet from "helmet";

export const apiRouter = (req: NextRequest, ctx: TNextContext) =>
  new ApiRouter(req, ctx)
    .onError(errorHandler)
    .use(cors)
    .use(expressMiddlewareWrapper(helmet()))
    .use(queryParser)
    .use(jsonParser);
