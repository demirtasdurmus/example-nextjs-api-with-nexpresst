import {
  queryParser,
  jsonParser,
  ApiRouter,
  TNextContext,
  expressMiddlewareWrapper,
} from "nexpresst";
import { errorHandler } from "./middlewares/error-handler";
// import { cors } from "./middlewares/cors";
import { NextRequest } from "next/server";
import helmet from "helmet";
import cors from "cors";

export const apiRouter = (req: NextRequest, ctx: TNextContext) =>
  new ApiRouter(req, ctx)
    .onError(errorHandler)
    .use(expressMiddlewareWrapper(cors({ origin: "http://localhost:3000" })))
    .use(expressMiddlewareWrapper(helmet()))
    .use(queryParser)
    .use(jsonParser);
