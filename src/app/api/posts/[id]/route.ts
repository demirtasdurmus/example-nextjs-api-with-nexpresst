import { apiRouter } from "@/lib/router";
import { IRouteHandler, processRequest, TNextContext } from "nexpresst";
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

export function GET(req: NextRequest, context: TNextContext) {
  const router = apiRouter()
    .use(validate("params", postParamsSchema))
    .get(getPostByIdHandler);
  return processRequest(req, context, router);
}

export function PATCH(req: NextRequest, context: TNextContext) {
  const router = apiRouter()
    .use(
      validate("params", postParamsSchema),
      validate("payload", postPayloadSchema)
    )
    .patch(updatePostByIdHandler);
  return processRequest(req, context, router);
}

export function DELETE(req: NextRequest, context: TNextContext) {
  const router = apiRouter()
    .use(validate("params", postParamsSchema))
    .delete(deletPostByIdHandler);
  return processRequest(req, context, router);
}
