import { CLIENT_CODES } from "./core/client";
import { REDIRECT_CODES } from "./core/redirects";
import { SUCCESS_CODES } from "./core/success";

const ALL_CODES = {
  // 2xx codes
  ...SUCCESS_CODES,
  // 3xx codes
  ...REDIRECT_CODES,
  // 4xx codes
  ...CLIENT_CODES,
} as const;

export default ALL_CODES;
