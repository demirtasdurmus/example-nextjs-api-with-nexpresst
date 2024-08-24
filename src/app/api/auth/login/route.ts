import { NextRequest } from "next/server";
import { IRouteHandler, TNextContext } from "nexpresst";
import { apiRouter } from "@/lib/api-router";
import { db } from "@/db/client";
import * as schemas from "@/db/schemas";
import { authSchema, TAuthPayload } from "../schemas";
import { eq } from "drizzle-orm";
import { BadRequestError } from "@/lib/errors.ts";
import { validate } from "@/lib/middlewares/validate";
import { comparePassword, hashPassword } from "@/utils";

export type TLoginResponseData = { message: string };

/**
 * Encodes a cookie value to base64
 */
function encodeCookieValue(value: string) {
  return Buffer.from(value).toString("base64");
}

/**
 * Decodes a cookie value from base64
 */
function decodeCookieValue(value: string) {
  return Buffer.from(value, "base64").toString("utf-8");
}

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
      "session_token",
      "thisisthesessiontokenthatiscreatedwithjsonwebtoken",
      {
        httpOnly: true,
        sameSite: true,
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
