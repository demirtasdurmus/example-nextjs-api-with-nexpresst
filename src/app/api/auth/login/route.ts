import { NextRequest } from "next/server";
import { IRouteHandler, TNextContext } from "nexpresst";
import { apiRouter } from "@/lib/api-router";
import { db } from "@/db/client";
import * as schemas from "@/db/schemas";
import { authSchema, TAuthPayload } from "../schemas";
import { eq } from "drizzle-orm";
import { BadRequestError } from "@/lib/errors.ts";
import { validate } from "@/lib/middlewares/validate";
import { SESSION_TOKEN } from "@/lib/constants";
import { comparePassword, encodeCookieValue } from "@/lib/utils";

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

  return res
    .cookie(
      SESSION_TOKEN,
      "thisisthesessiontokenthatiscreatedwithjsonwebtoken",
      {
        httpOnly: true,
        sameSite: true,
        path: "/",
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        encode: encodeCookieValue,
      }
    )
    .statusCode(200)
    .send({
      message: "Logged in successfully",
    });
};

export function POST(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx)
    .use(validate("payload", authSchema))
    .handle(loginHandler);
}
