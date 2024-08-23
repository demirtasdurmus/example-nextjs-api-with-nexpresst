import { apiRouter } from "@/lib/router";
import { NextRequest } from "next/server";
import { IRouteHandler, TNextContext } from "nexpresst";
import {
  postPayloadSchema,
  postsQuerySchema,
  TPostPayload,
  TPostQuery,
} from "./schemas";
import { validate } from "@/lib/middlewares/validate";

type TResponseData = { id: string; title: string; description: string };

const getPostsHandler: IRouteHandler<
  unknown,
  TPostQuery,
  unknown,
  TResponseData[]
> = async (req, res) => {
  // your logic goes here
  return res.statusCode(200).send([
    {
      id: "some-unique-id",
      title: "some title " + req.query.page + " " + req.query.limit,
      description: "some description",
    },
  ]);
};

const createPostHandler: IRouteHandler<
  unknown,
  unknown,
  TPostPayload,
  TResponseData
> = async (req, res) => {
  // your logic goes here
  return res.statusCode(201).send({
    id: "some-generated-unique-id",
    title: req.payload.title,
    description: req.payload.description,
  });
};

export function GET(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx)
    .use(validate("query", postsQuerySchema))
    .handle(getPostsHandler);
}

export function POST(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx)
    .use(validate("payload", postPayloadSchema))
    .handle(createPostHandler);
}
