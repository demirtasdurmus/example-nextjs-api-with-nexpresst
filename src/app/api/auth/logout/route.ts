import { NextRequest } from "next/server";
import { IRouteHandler, TNextContext } from "nexpresst";
import { apiRouter } from "@/lib/api-router";
import { SESSION_TOKEN } from "@/lib/constants";

const logoutHandler: IRouteHandler<
  unknown,
  unknown,
  unknown,
  { message: string }
> = async (_req, res) => {
  return res.clearCookie(SESSION_TOKEN).send({ message: "Logged out" });
};

export function GET(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx).handle(logoutHandler);
}
