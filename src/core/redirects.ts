/**
 * @constant
 * @name REDIRECT_CODES
 * @description HTTP status codes for redirection responses (3xx), providing semantic names for each status code.
 * @type {Object}
 * @property {number} MULTIPLE_CHOICES - Indicates multiple options for the resource that the client may follow.
 * @property {number} GET_FROM_ANOTHER - The requested resource resides temporarily under a different URI.
 * @property {number} NOT_MODIFIED - Indicates that the resource has not been modified since the version specified by the request headers.
 * @property {number} TEMPORARY_REDIRECT - Indicates that the requested resource is temporarily located at a different URI.
 * @property {number} PERMANENT_REDIRECT - Indicates that the requested resource has been permanently moved to a different URI.
 */
export const REDIRECT_CODES = {
  MULTIPLE_CHOICES: 300,
  GET_FROM_ANOTHER: 303,
  NOT_MODIFIED: 304,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
} as const;
