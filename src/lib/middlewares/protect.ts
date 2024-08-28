import httpStatus from "http-status";
import { IMiddlewareHandler } from "nexpresst";
import { UnauthorizedError } from "../errors.ts";
import { SESSION_TOKEN } from "../constants";
import { decodeCookieValue } from "../utils";

export const protect: IMiddlewareHandler = (req, res, next) => {
  const cookie = req.cookies.get(SESSION_TOKEN);

  if (!cookie) {
    throw new UnauthorizedError(httpStatus["401_MESSAGE"]);
  }

  // Verify the cookie value and extract the session data

  req.session = {
    user: {
      id: "1",
      email: "john@email.com",
      cookie: decodeCookieValue(cookie.value),
    },
  };

  return next();
};
