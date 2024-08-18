import { apiRouter } from "@/lib/router";
import { NextRequest } from "next/server";
import { IRouteHandler, processRequest, TNextContext } from "nexpresst";

type TQuery = { page: number; limit: number };
type TPayload = { title: string; description: string };
type TResponseData = { id: string; title: string; description: string };

const getPostsHandler: IRouteHandler<
  unknown,
  TQuery,
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
  TPayload,
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
  const router = apiRouter.get(getPostsHandler);
  return processRequest(req, ctx, router);
}

export function POST(req: NextRequest, ctx: TNextContext) {
  const router = apiRouter.post(createPostHandler);
  return processRequest(req, ctx, router);
}
