/**
 * @constant
 * @name CLIENT_CODES
 * @description HTTP status codes for client errors (4xx), providing semantic names for each status code.
 * @type {Object}
 * @property {number} BAD_REQUEST - The server could not understand the request due to invalid syntax.
 * @property {number} UNAUTHENTICATED - The client must authenticate itself to get the requested response.
 * @property {number} PAYMENT_REQUIRED - Reserved for future use. Initial aim for digital payment systems.
 * @property {number} FORBIDDEN - The client does not have access rights to the content.
 * @property {number} NOT_FOUND - The server can not find requested resource.
 * @property {number} METHOD_NOT_ALLOWED - The request method is known by the server but has been disabled and cannot be used.
 * @property {number} NOT_ACCEPTABLE - The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.
 * @property {number} PROXY_AUTHENTICATION_REQUIRED - The client must first authenticate itself with the proxy.
 * @property {number} REQUEST_TIMEOUT - The server did not receive a complete request message within the time that it was prepared to wait.
 * @property {number} CONFLICT - The request conflicts with the current state of the server.
 * @property {number} GONE - The content requested has been permanently deleted from the server, with no forwarding address.
 * @property {number} LENGTH_REQUIRED - The server will not accept the request without a defined Content-Length header.
 * @property {number} PRECONDITION_FAILED - The server does not meet one of the preconditions that the requester put on the request.
 * @property {number} PAYLOAD_TOO_LARGE - The request entity is larger than limits defined by server.
 * @property {number} URI_TOO_LONG - The URI requested by the client is longer than the server is willing to interpret.
 * @property {number} UNSUPPORTED_MEDIA_TYPE - The media format of the requested data is not supported by the server.
 * @property {number} RANGE_NOT_SATISFIABLE - The range specified by the Range header field in the request cannot be fulfilled.
 * @property {number} EXPECTATION_FAILED - The server cannot meet the requirements of the Expect request-header field.
 * @property {number} MISDIRECTED_REQUEST - The request was directed at a server that is not able to produce a response.
 * @property {number} UNPROCESSABLE_ENTITY - The server understands the content type of the request entity, but was unable to process the contained instructions.
 * @property {number} LOCKED - The resource that is being accessed is locked.
 * @property {number} FAILED_DEPENDENCY - The request failed due to failure of a previous request.
 * @property {number} UPGRADE_REQUIRED - The client should switch to a different protocol.
 * @property {number} PRECONDITION_REQUIRED - The origin server requires the request to be conditional.
 * @property {number} TOO_MANY_REQUESTS - The user has sent too many requests in a given amount of time.
 * @property {number} REQUEST_HEADER_FIELDS_TOO_LARGE - The server is unwilling to process the request because its header fields are too large.
 * @property {number} UNAVAILABLE_FOR_LEGAL_REASONS - The server is denying access to the resource as a consequence of a legal demand.
 * @property {number} IM_A_TEAPOT - The server refuses the attempt to brew coffee with a teapot.
 */
export const CLIENT_CODES = {
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401, // Unauthorized by spec by semantically is unathenticated
  PAYMENT_REQUIRED: 402,
  UNAUTHORIZED: 403, // Forbidden (Duplicate)
  FORBIDDEN: 403,
  NOT_FOUND: 404,

  // Method and Media Type Errors
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411, // Content Length Required
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416, // Range Not Satisfied
  EXPECTATION_FAILED: 417,

  // WebDAV Errors
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_ENTITY: 422, // Unprocessable Content
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  UPGRADE_REQUIRED: 426,

  // Rate Limiting and Header Issues
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431, // Headers Too Large

  // Legal Reasons
  UNAVAILABLE_FOR_LEGAL_REASONS: 451, // Legally Unavailable

  // Fun Status Codes
  IM_A_TEAPOT: 418, // IM Teapot
} as const;
