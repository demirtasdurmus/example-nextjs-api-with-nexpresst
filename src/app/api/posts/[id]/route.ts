import { apiRouter } from "@/lib/router";
import { IRouteHandler, processRequest, TNextContext } from "nexpresst";
import { NextRequest } from "next/server";

type TParams = { id: string };
type TPayload = { title: string; description: string };
type TResponseData = { id: string; title: string; description: string };

const getPostByIdHandler: IRouteHandler<
  TParams,
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
  TParams,
  unknown,
  TPayload,
  TResponseData
> = async (req, res) => {
  // your logic here
  return res.statusCode(200).send({
    id: req.params.id,
    title: `Updated: ${req.payload.title}`,
    description: `Updated: ${req.payload.description}`,
  });
};

const deletPostByIdHandler: IRouteHandler<TParams, unknown> = async (
  req,
  res
) => {
  // your logic here
  return res.statusCode(204).send();
};

export function GET(req: NextRequest, context: TNextContext) {
  const router = apiRouter.get(getPostByIdHandler);
  return processRequest(req, context, router);
}

export function PATCH(req: NextRequest, context: TNextContext) {
  const router = apiRouter.patch(updatePostByIdHandler);
  return processRequest(req, context, router);
}

export function DELETE(req: NextRequest, context: TNextContext) {
  const router = apiRouter.delete(deletPostByIdHandler);
  return processRequest(req, context, router);
}
