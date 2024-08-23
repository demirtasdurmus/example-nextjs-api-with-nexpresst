import { apiRouter } from "@/lib/api-router";
import { IRouteHandler, TNextContext } from "nexpresst";
import { NextRequest } from "next/server";
import {
  postParamsSchema,
  postPayloadSchema,
  TPostParams,
  TPostPayload,
} from "../schemas";
import { validate } from "@/lib/middlewares/validate";

type TResponseData = { id: string; title: string; description: string };

const getPostByIdHandler: IRouteHandler<
  TPostParams,
  unknown,
  unknown,
  TResponseData
> = async (req, res) => {
  return res.statusCode(200).send({
    id: req.params.id,
    title: "some title",
    description: "some description",
  });
};

const updatePostByIdHandler: IRouteHandler<
  TPostParams,
  unknown,
  TPostPayload,
  TResponseData
> = async (req, res) => {
  // your logic here
  return res.statusCode(200).send({
    id: req.params.id,
    title: `Updated: ${req.payload.title}`,
    description: `Updated: ${req.payload.description}`,
  });
};

const deletPostByIdHandler: IRouteHandler<TPostParams, unknown> = async (
  _req,
  res
) => {
  // your logic here
  return res.statusCode(204).send();
};

export function GET(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx)
    .use(validate("params", postParamsSchema))
    .handle(getPostByIdHandler);
}

export function PATCH(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx)
    .use(
      validate("params", postParamsSchema),
      validate("payload", postPayloadSchema)
    )
    .handle(updatePostByIdHandler);
}

export function DELETE(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx)
    .use(validate("params", postParamsSchema))
    .handle(deletPostByIdHandler);
}
