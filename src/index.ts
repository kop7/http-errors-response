/**
 * The Base class for all HTTP errors
 */
export abstract class HttpError extends Error {
  public statusCode?: number;

  constructor(name: string, public message: string) {
    super(message);
    this.name = name;
  }
}

export class BadRequestResponse extends HttpError {
  constructor(message?: string) {
    super('BadRequestResponse', message || 'Bad Request');
    Object.setPrototypeOf(this, BadRequestResponse.prototype);
    this.statusCode = 400;
  }
}

export class UnauthorizedResponse extends HttpError {
  constructor(message?: string) {
    super('UnauthorizedResponse', message || 'Unauthorized');
    Object.setPrototypeOf(this, UnauthorizedResponse.prototype);
    this.statusCode = 401;
  }
}

export class PaymentRequiredResponse extends HttpError {
  constructor(message?: string) {
    super('PaymentRequiredResponse', message || 'Payment Required');
    Object.setPrototypeOf(this, PaymentRequiredResponse.prototype);
    this.statusCode = 402;
  }
}

export class ForbiddenResponse extends HttpError {
  constructor(message?: string) {
    super('ForbiddenResponse', message || 'Forbidden');
    Object.setPrototypeOf(this, ForbiddenResponse.prototype);
    this.statusCode = 403;
  }
}

export class NotFoundResponse extends HttpError {
  constructor(message?: string) {
    super('NotFoundResponse', message || 'Not Found');
    Object.setPrototypeOf(this, NotFoundResponse.prototype);
    this.statusCode = 404;
  }
}

export class MethodNotAllowedResponse extends HttpError {
  constructor(message?: string) {
    super('MethodNotAllowedResponse', message || 'Method Not Allowed');
    Object.setPrototypeOf(this, MethodNotAllowedResponse.prototype);
    this.statusCode = 405;
  }
}

export class NotAcceptableResponse extends HttpError {
  constructor(message?: string) {
    super('NotAcceptableResponse', message || 'Not Acceptable');
    Object.setPrototypeOf(this, NotAcceptableResponse.prototype);
    this.statusCode = 406;
  }
}

export class ProxyAuthenticationRequiredResponse extends HttpError {
  constructor(message?: string) {
    super('ProxyAuthenticationRequiredResponse', message || 'Proxy Authentication');
    Object.setPrototypeOf(this, ProxyAuthenticationRequiredResponse.prototype);
    this.statusCode = 407;
  }
}

export class RequestTimeoutResponse extends HttpError {
  constructor(message?: string) {
    super('RequestTimeout', message || 'Request Timeout');
    Object.setPrototypeOf(this, RequestTimeoutResponse.prototype);
    this.statusCode = 408;
  }
}

export class ConflictResponse extends HttpError {
  constructor(message?: string) {
    super('ConflictResponse', message || 'Conflict');
    Object.setPrototypeOf(this, ConflictResponse.prototype);
    this.statusCode = 409;
  }
}

export class GoneResponse extends HttpError {
  constructor(message?: string) {
    super('GoneResponse', message || 'Gone');
    Object.setPrototypeOf(this, GoneResponse.prototype);
    this.statusCode = 410;
  }
}

export class LengthRequiredResponse extends HttpError {
  constructor(message?: string) {
    super('LengthRequiredResponse', message || 'Length');
    Object.setPrototypeOf(this, LengthRequiredResponse.prototype);
    this.statusCode = 411;
  }
}

export class PreconditionFailedResponse extends HttpError {
  constructor(message?: string) {
    super('PreconditionFailedResponse', message || 'Precondition Failed');
    Object.setPrototypeOf(this, PreconditionFailedResponse.prototype);
    this.statusCode = 412;
  }
}

export class PayloadTooLargeResponse extends HttpError {
  constructor(message?: string) {
    super('PayloadTooLargeResponse', message || 'Payload Too Large');
    Object.setPrototypeOf(this, PayloadTooLargeResponse.prototype);
    this.statusCode = 413;
  }
}

export class URITooLongResponse extends HttpError {
  constructor(message?: string) {
    super('URITooLongResponse', message || 'URITooLong');
    Object.setPrototypeOf(this, URITooLongResponse.prototype);
    this.statusCode = 414;
  }
}

export class UnsupportedMediaTypeResponse extends HttpError {
  constructor(message?: string) {
    super('UnsupportedMediaTypeResponse', message || 'Unsupported Media Type');
    Object.setPrototypeOf(this, UnsupportedMediaTypeResponse.prototype);
    this.statusCode = 415;
  }
}

export class RangeNotSatisfiableResponse extends HttpError {
  constructor(message?: string) {
    super('RangeNotSatisfiableResponse', message || 'Range Not Satisfiable');
    Object.setPrototypeOf(this, RangeNotSatisfiableResponse.prototype);
    this.statusCode = 416;
  }
}

export class ExpectationFailedResponse extends HttpError {
  constructor(message?: string) {
    super('ExpectationFailedResponse', message || 'Expectation Failed');
    Object.setPrototypeOf(this, ExpectationFailedResponse.prototype);
    this.statusCode = 417;
  }
}

export class ImATeapotResponse extends HttpError {
  constructor(message?: string) {
    super('ImATeapotResponse', message || 'Im A Teapot');
    Object.setPrototypeOf(this, ImATeapotResponse.prototype);
    this.statusCode = 418;
  }
}

export class MisdirectedRequestResponse extends HttpError {
  constructor(message?: string) {
    super('MisdirectedRequestResponse', message || 'Misdirected Request');
    Object.setPrototypeOf(this, MisdirectedRequestResponse.prototype);
    this.statusCode = 421;
  }
}

export class UnprocessableEntityResponse extends HttpError {
  constructor(message?: string) {
    super('UnprocessableEntityResponse', message || 'Unprocessable Entity');
    Object.setPrototypeOf(this, UnprocessableEntityResponse.prototype);
    this.statusCode = 422;
  }
}

export class LockedResponse extends HttpError {
  constructor(message?: string) {
    super('LockedResponse', message || 'Locked');
    Object.setPrototypeOf(this, LockedResponse.prototype);
    this.statusCode = 423;
  }
}

export class FailedDependencyResponse extends HttpError {
  constructor(message?: string) {
    super('FailedDependencyResponse', message || 'Failed Dependency');
    Object.setPrototypeOf(this, FailedDependencyResponse.prototype);
    this.statusCode = 424;
  }
}

export class UnorderedCollectionResponse extends HttpError {
  constructor(message?: string) {
    super('UnorderedCollectionResponse', message || 'UnorderedCollection');
    Object.setPrototypeOf(this, UnorderedCollectionResponse.prototype);
    this.statusCode = 425;
  }
}

export class UpgradeRequiredResponse extends HttpError {
  constructor(message?: string) {
    super('UpgradeRequiredResponse', message || 'Upgrade Required');
    Object.setPrototypeOf(this, UpgradeRequiredResponse.prototype);
    this.statusCode = 426;
  }
}

export class PreconditionRequiredResponse extends HttpError {
  constructor(message?: string) {
    super('PreconditionRequiredResponse', message || 'Precondition Required');
    Object.setPrototypeOf(this, PreconditionRequiredResponse.prototype);
    this.statusCode = 428;
  }
}

export class TooManyRequestsResponse extends HttpError {
  constructor(message?: string) {
    super('TooManyRequestsResponse', message || 'Too Many Requests');
    Object.setPrototypeOf(this, TooManyRequestsResponse.prototype);
    this.statusCode = 429;
  }
}

export class RequestHeaderFieldsTooLargeResponse extends HttpError {
  constructor(message?: string) {
    super('RequestHeaderFieldsTooLargeResponse', message || 'Request Header Fields Too Large');
    Object.setPrototypeOf(this, RequestHeaderFieldsTooLargeResponse.prototype);
    this.statusCode = 431;
  }
}

export class UnavailableForLegalReasonsResponse extends HttpError {
  constructor(message?: string) {
    super('UnavailableForLegalReasonsResponse', message || 'Unavailable For Legal Reasons');
    Object.setPrototypeOf(this, UnavailableForLegalReasonsResponse.prototype);
    this.statusCode = 451;
  }
}

export class InternalServerResponse extends HttpError {
  constructor(message?: string) {
    super('InternalServerResponse', message || 'Internal Server Response');
    Object.setPrototypeOf(this, InternalServerResponse.prototype);
    this.statusCode = 500;
  }
}

export class NotImplementedResponse extends HttpError {
  constructor(message?: string) {
    super('NotImplementedResponse', message || 'Not Implemented');
    Object.setPrototypeOf(this, NotImplementedResponse.prototype);
    this.statusCode = 501;
  }
}

export class BadGatewayResponse extends HttpError {
  constructor(message?: string) {
    super('BadGatewayResponse', message || 'Bad Gateway');
    Object.setPrototypeOf(this, BadGatewayResponse.prototype);
    this.statusCode = 502;
  }
}

export class ServiceUnavailableResponse extends HttpError {
  constructor(message?: string) {
    super('ServiceUnavailableResponse', message || 'Service Unavailable');
    Object.setPrototypeOf(this, ServiceUnavailableResponse.prototype);
    this.statusCode = 503;
  }
}

export class GatewayTimeoutResponse extends HttpError {
  constructor(message?: string) {
    super('GatewayTimeoutResponse', message || 'Gateway Timeout');
    Object.setPrototypeOf(this, GatewayTimeoutResponse.prototype);
    this.statusCode = 504;
  }
}

export class HTTPVersionNotSupportedResponse extends HttpError {
  constructor(message?: string) {
    super('HTTPVersionNotSupportedResponse', message || 'HTTP Version Not Supported');
    Object.setPrototypeOf(this, HTTPVersionNotSupportedResponse.prototype);
    this.statusCode = 505;
  }
}

export class VariantAlsoNegotiatesResponse extends HttpError {
  constructor(message?: string) {
    super('VariantAlsoNegotiatesResponse', message || 'VariantAlsoNegotiates');
    Object.setPrototypeOf(this, VariantAlsoNegotiatesResponse.prototype);
    this.statusCode = 506;
  }
}

export class InsufficientStorageResponse extends HttpError {
  constructor(message?: string) {
    super('InsufficientStorageResponse', message || 'Insufficient Storage');
    Object.setPrototypeOf(this, InsufficientStorageResponse.prototype);
    this.statusCode = 507;
  }
}

export class LoopDetectedResponse extends HttpError {
  constructor(message?: string) {
    super('LoopDetectedResponse', message || 'LoopDetected');
    Object.setPrototypeOf(this, LoopDetectedResponse.prototype);
    this.statusCode = 508;
  }
}

export class BandwidthLimitExceededResponse extends HttpError {
  constructor(message?: string) {
    super('BandwidthLimitExceededResponse', message || 'BandwidthLimitExceeded');
    Object.setPrototypeOf(this, BandwidthLimitExceededResponse.prototype);
    this.statusCode = 509;
  }
}

export class NotExtendedResponse extends HttpError {
  constructor(message?: string) {
    super('NotExtendedResponse', message || 'Not Extended');
    Object.setPrototypeOf(this, NotExtendedResponse.prototype);
    this.statusCode = 510;
  }
}

export class NetworkAuthenticationRequiredResponse extends HttpError {
  constructor(message?: string) {
    super('NetworkAuthenticationRequiredResponse', message || 'Network Authentication Required');
    Object.setPrototypeOf(this, NetworkAuthenticationRequiredResponse.prototype);
    this.statusCode = 511;
  }
}
