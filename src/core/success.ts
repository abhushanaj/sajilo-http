/**
 * @constant
 * @name SUCCESS_CODES
 * @description HTTP status codes for successful responses (2xx), providing semantic names for each status code.
 * @type {Object}
 * @property {number} SUCCESS - The request has succeeded.
 * @property {number} CREATED - The request has been fulfilled and has resulted in one or more new resources being created.
 * @property {number} ACCEPTED - The request has been accepted for processing, but the processing has not been completed.
 * @property {number} NON_AUTHORITATIVE_INFORMATION - The request has succeeded, but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy.
 * @property {number} NO_CONTENT - The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.
 * @property {number} RESET_CONTENT - The server has fulfilled the request and desires that the user agent reset the document view which caused the request to be sent.
 * @property {number} PARTIAL_CONTENT - The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation.
 * @property {number} MULTI_STATUS - The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
 * @property {number} ALREADY_REPORTED - Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.
 * @property {number} IM_USED - The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
 */
export const SUCCESS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,
} as const;
