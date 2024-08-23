import { NextRequest } from "next/server";
import { IRouteHandler, TNextContext } from "nexpresst";
import { apiRouter } from "@/lib/router";
import { db } from "@/db/client";
import * as schemas from "@/db/schemas";
import { authSchema, TAuthPayload } from "../schemas";
import { eq } from "drizzle-orm";
import { ConflictError } from "@/lib/errors.ts";
import { validate } from "@/lib/middlewares/validate";
import { hashPassword } from "@/utils";

export type TRegisterResponseData = { message: string };

const registerHandler: IRouteHandler<
  unknown,
  unknown,
  TAuthPayload,
  TRegisterResponseData
> = async (req, res) => {
  const [user] = await db
    .select({ id: schemas.user.id })
    .from(schemas.user)
    .where(eq(schemas.user.email, req.payload.email));

  if (user) {
    throw new ConflictError("User already exists");
  }

  const hashedPassword = await hashPassword(req.payload.password);

  await db.insert(schemas.user).values({
    email: req.payload.email,
    password: hashedPassword,
  });

  return res.statusCode(201).send({
    message: "Registered successfully",
  });
};

export function POST(req: NextRequest, ctx: TNextContext) {
  return apiRouter(req, ctx)
    .use(validate("payload", authSchema))
    .handle(registerHandler);
}
