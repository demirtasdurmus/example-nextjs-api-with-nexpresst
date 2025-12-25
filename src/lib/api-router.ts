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
import { injectTranslationHelper } from "./middlewares/inject-translation-helper";

export const apiRouter = (req: NextRequest, ctx: TNextContext) =>
  new ApiRouter(req, ctx)
    .onError(errorHandler)
    .use(expressMiddlewareAdapter(compression()))
    .use(expressMiddlewareAdapter(cors()))
    .use(expressMiddlewareAdapter(helmet()))
    .use(injectTranslationHelper) // injects the translation helper into the response locals
    .use(queryParser)
    .use(jsonParser);
