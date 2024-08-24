import {
  queryParser,
  jsonParser,
  ApiRouter,
  TNextContext,
  expressMiddlewareAdaptor,
} from "nexpresst";
import { errorHandler } from "./middlewares/error-handler";
// import { cors } from "./middlewares/cors";
import { NextRequest } from "next/server";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

export const apiRouter = (req: NextRequest, ctx: TNextContext) =>
  new ApiRouter(req, ctx)
    .onError(errorHandler)
    .use(expressMiddlewareAdaptor(compression()))
    .use(expressMiddlewareAdaptor(cors({ origin: "http://localhost:3000" })))
    .use(expressMiddlewareAdaptor(helmet()))
    .use(queryParser)
    .use(jsonParser);
