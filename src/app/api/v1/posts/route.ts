import { apiRouter } from "@/lib/api-router";
import { NextRequest, NextResponse } from "next/server";
import { IRouteHandler, TNextContext } from "nexpresst";
import { validate } from "@/lib/middlewares/validate";
import { postsQuerySchema, TPostQuery } from "../../posts/schemas";
import { buildBaseUrl } from "@/lib/utils";

const getPostsHandler: IRouteHandler<unknown, TPostQuery, unknown> = async (
  req,
  res
) => {
  const url = buildBaseUrl(req) + "/api/posts" + req.nextUrl.search;

  return res.redirect(308, url);
};

export function GET(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx)
    .use(validate("query", postsQuerySchema))
    .handle(getPostsHandler);
}
