import { NextRequest } from "next/server";
import { IRouteHandler, processRequest, TNextContext } from "nexpresst";
import { apiRouter } from "@/lib/router";
import { db } from "@/db/client";
import * as schemas from "@/db/schemas";
import { authSchema, TAuthPayload } from "../schemas";
import { eq } from "drizzle-orm";
import { BadRequestError, ConflictError } from "@/lib/errors.ts";
import { validate } from "@/lib/middlewares/validate";
import { comparePassword, hashPassword } from "@/utils";

export type TLoginResponseData = { message: string };

const loginHandler: IRouteHandler<
  unknown,
  unknown,
  TAuthPayload,
  TLoginResponseData
> = async (req, res) => {
  const [user] = await db
    .select({ password: schemas.user.password })
    .from(schemas.user)
    .where(eq(schemas.user.email, req.payload.email));

  if (!user) {
    throw new BadRequestError("Invalid email or password");
  }

  const isPasswordCorrect = await comparePassword(
    req.payload.password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new BadRequestError("Invalid email or password");
  }

  return res.statusCode(200).send({
    message: "Logged in successfully",
  });
};

export function POST(req: NextRequest, ctx: TNextContext) {
  const router = apiRouter
    .use(validate("payload", authSchema))
    .post(loginHandler);
  return processRequest(req, ctx, router);
}
