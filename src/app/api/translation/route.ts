import { apiRouter } from "@/lib/api-router";
import { NextRequest } from "next/server";
import { IRouteHandler, TNextContext } from "nexpresst";
import { TResponseLocals } from "@/lib/middlewares/inject-translation-helper";

const getTranslationHandler: IRouteHandler<
  unknown,
  unknown,
  unknown,
  { message: string },
  unknown,
  TResponseLocals
> = async (_req, res) => {
  const { t } = res.locals;

  return res.statusCode(200).send({
    message: t("message"), // will return "translation.message"
  });
};

export function GET(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx).handle(getTranslationHandler);
}
