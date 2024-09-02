import {
  queryParser,
  jsonParser,
  ApiRouter,
  TNextContext,
  expressMiddlewareAdapter,
} from "nexpresst";
import { errorHandler } from "./middlewares/error-handler";
import { NextRequest } from "next/server";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import { protect } from "./middlewares/protect";

export const apiRouter = (req: NextRequest, ctx: TNextContext) =>
  new ApiRouter(req, ctx)
    .onError(errorHandler)
    .use(expressMiddlewareAdapter(compression()))
    .use(expressMiddlewareAdapter(cors()))
    .use(expressMiddlewareAdapter(helmet()))
    .use(queryParser)
    .use(jsonParser);
