import { REDIRECT_CODES } from "./core/redirects";
import { SUCCESS_CODES } from "./core/success";

const ALL_CODES = {
  // 2xx codes
  ...SUCCESS_CODES,
  // 3xx codes
  ...REDIRECT_CODES,
};

export default ALL_CODES;
