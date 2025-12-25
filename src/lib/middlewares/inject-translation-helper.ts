import { IMiddlewareHandler } from "nexpresst";

export type TResponseLocals = {
  t: Awaited<ReturnType<typeof mockGetTranslationHelper>>["t"];
};

/**
 * Injects the translation helper into the response locals.
 * Then it can be used in the route handlers with strong typing.
 */
export const injectTranslationHelper: IMiddlewareHandler = async (
  _req,
  res,
  next
) => {
  const { t } = await mockGetTranslationHelper();

  res.locals.t = t;

  return next();
};

/**
 * This is a mock function that returns a translation helper object.
 * In a real application, get it from the translation service.
 * @see https://next-intl.dev/docs/getting-started/app-router#page
 */
function mockGetTranslationHelper() {
  return Promise.resolve({
    t: (key: string) => {
      return `translation.${key}`;
    },
  });
}
