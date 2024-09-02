import bcrypt from "bcrypt";
import { NextRequest } from "next/server";

/**
 * Hashes a password using bcrypt
 */
export function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

/**
 * Compares a password with a hash using bcrypt
 */
export function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

/**
 * Encodes a cookie value to base64
 */
export function encodeCookieValue(value: string) {
  return Buffer.from(value).toString("base64");
}

/**
 * Decodes a cookie value from base64
 */
export function decodeCookieValue(value: string) {
  return Buffer.from(value, "base64").toString("utf-8");
}

/**
 * Builds a base URL from a request
 */
export function buildBaseUrl(req: NextRequest) {
  return `${req.nextUrl.protocol}//${req.nextUrl.host}`;
}
