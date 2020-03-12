import {
    BadRequestResponse,
    ConflictResponse,
    ExpectationFailedResponse,
    FailedDependencyResponse,
    ForbiddenResponse,
    GoneResponse,
    ImATeapotResponse,
    LengthRequiredResponse,
    LockedResponse,
    MethodNotAllowedResponse,
    MisdirectedRequestResponse,
    NotAcceptableResponse,
    NotFoundResponse,
    PayloadTooLargeResponse,
    PaymentRequiredResponse,
    PreconditionFailedResponse,
    ProxyAuthenticationRequiredResponse,
    RangeNotSatisfiableResponse,
    RequestTimeoutResponse,
    UnauthorizedResponse,
    UnorderedCollectionResponse,
    UnprocessableEntityResponse,
    UnsupportedMediaTypeResponse,
    UpgradeRequiredResponse,
    URITooLongResponse,
    PreconditionRequiredResponse,
    TooManyRequestsResponse,
    RequestHeaderFieldsTooLargeResponse,
    UnavailableForLegalReasonsResponse,
    InternalServerResponse,
    NotImplementedResponse,
    BadGatewayResponse,
    ServiceUnavailableResponse,
    GatewayTimeoutResponse,
    HTTPVersionNotSupportedResponse,
    VariantAlsoNegotiatesResponse,
    InsufficientStorageResponse,
    LoopDetectedResponse,
    BandwidthLimitExceededResponse,
    NotExtendedResponse,
    NetworkAuthenticationRequiredResponse
} from '../src';
describe('Http Errors', () => {

    it('BadRequestResponse', () => {
    const t = () => { throw new BadRequestResponse(); };
    expect(t).toThrow(BadRequestResponse);
    });

    it('PaymentRequiredResponse', () => {
        const t = () => { throw new PaymentRequiredResponse(); };
        expect(t).toThrow(PaymentRequiredResponse);
    });

    it('ForbiddenResponse', () => {
        const t = () => { throw new ForbiddenResponse(); };
        expect(t).toThrow(ForbiddenResponse);
    });

    it('NotFoundResponse', () => {
        const t = () => { throw new NotFoundResponse(); };
        expect(t).toThrow(NotFoundResponse);
    });

    it('MethodNotAllowedResponse', () => {
        const t = () => { throw new MethodNotAllowedResponse(); };
        expect(t).toThrow(MethodNotAllowedResponse);
    });

    it('NotAcceptableResponse', () => {
        const t = () => { throw new NotAcceptableResponse(); };
        expect(t).toThrow(NotAcceptableResponse);
    });

    it('ProxyAuthenticationRequiredResponse', () => {
        const t = () => { throw new ProxyAuthenticationRequiredResponse(); };
        expect(t).toThrow(ProxyAuthenticationRequiredResponse);
    });

    it('RequestTimeoutResponse', () => {
        const t = () => { throw new RequestTimeoutResponse(); };
        expect(t).toThrow(RequestTimeoutResponse);
    });

    it('ConflictResponse', () => {
        const t = () => { throw new ConflictResponse(); };
        expect(t).toThrow(ConflictResponse);
    });

    it('GoneResponse', () => {
        const t = () => { throw new GoneResponse(); };
        expect(t).toThrow(GoneResponse);
    });

    it('LengthRequiredResponse', () => {
        const t = () => { throw new LengthRequiredResponse(); };
        expect(t).toThrow(LengthRequiredResponse);
    });

    it('PreconditionFailedResponse', () => {
        const t = () => { throw new PreconditionFailedResponse(); };
        expect(t).toThrow(PreconditionFailedResponse);
    });

    it('PayloadTooLargeResponse', () => {
        const t = () => { throw new PayloadTooLargeResponse(); };
        expect(t).toThrow(PayloadTooLargeResponse);
    });

    it('URITooLongResponse', () => {
        const t = () => { throw new URITooLongResponse(); };
        expect(t).toThrow(URITooLongResponse);
    });

    it('UnsupportedMediaTypeResponse', () => {
        const t = () => { throw new UnsupportedMediaTypeResponse(); };
        expect(t).toThrow(UnsupportedMediaTypeResponse);
    });

    it('RangeNotSatisfiableResponse', () => {
        const t = () => { throw new RangeNotSatisfiableResponse(); };
        expect(t).toThrow(RangeNotSatisfiableResponse);
    });

    it('ExpectationFailedResponse', () => {
        const t = () => { throw new ExpectationFailedResponse(); };
        expect(t).toThrow(ExpectationFailedResponse);
    });

    it('ImATeapotResponse', () => {
        const t = () => { throw new ImATeapotResponse(); };
        expect(t).toThrow(ImATeapotResponse);
    });

    it('MisdirectedRequestResponse', () => {
        const t = () => { throw new MisdirectedRequestResponse(); };
        expect(t).toThrow(MisdirectedRequestResponse);
    });

    it('UnprocessableEntityResponse', () => {
        const t = () => { throw new UnprocessableEntityResponse(); };
        expect(t).toThrow(UnprocessableEntityResponse);
    });

    it('LockedResponse', () => {
        const t = () => { throw new LockedResponse(); };
        expect(t).toThrow(LockedResponse);
    });

    it('FailedDependencyResponse', () => {
        const t = () => { throw new FailedDependencyResponse(); };
        expect(t).toThrow(FailedDependencyResponse);
    });

    it('UnorderedCollectionResponse', () => {
        const t = () => { throw new UnorderedCollectionResponse(); };
        expect(t).toThrow(UnorderedCollectionResponse);
    });

    it('UpgradeRequiredResponse', () => {
        const t = () => { throw new UpgradeRequiredResponse(); };
        expect(t).toThrow(UpgradeRequiredResponse);
    });

    it('PreconditionRequiredResponse', () => {
        const t = () => { throw new PreconditionRequiredResponse(); };
        expect(t).toThrow(PreconditionRequiredResponse);
    });

    it('TooManyRequestsResponse', () => {
        const t = () => { throw new TooManyRequestsResponse(); };
        expect(t).toThrow(TooManyRequestsResponse);
    });

    it('RequestHeaderFieldsTooLargeResponse', () => {
        const t = () => { throw new RequestHeaderFieldsTooLargeResponse(); };
        expect(t).toThrow(RequestHeaderFieldsTooLargeResponse);
    });

    it('UnavailableForLegalReasonsResponse', () => {
        const t = () => { throw new UnavailableForLegalReasonsResponse(); };
        expect(t).toThrow(UnavailableForLegalReasonsResponse);
    });

    it('InternalServerResponse', () => {
        const t = () => { throw new InternalServerResponse(); };
        expect(t).toThrow(InternalServerResponse);
    });

    it('NotImplementedResponse', () => {
        const t = () => { throw new NotImplementedResponse(); };
        expect(t).toThrow(NotImplementedResponse);
    });

    it('BadGatewayResponse', () => {
        const t = () => { throw new BadGatewayResponse(); };
        expect(t).toThrow(BadGatewayResponse);
    });

    it('ServiceUnavailableResponse', () => {
        const t = () => { throw new ServiceUnavailableResponse(); };
        expect(t).toThrow(ServiceUnavailableResponse);
    });

    it('GatewayTimeoutResponse', () => {
        const t = () => { throw new GatewayTimeoutResponse(); };
        expect(t).toThrow(GatewayTimeoutResponse);
    });

    it('HTTPVersionNotSupportedResponse', () => {
        const t = () => { throw new HTTPVersionNotSupportedResponse(); };
        expect(t).toThrow(HTTPVersionNotSupportedResponse);
    });

    it('VariantAlsoNegotiatesResponse', () => {
        const t = () => { throw new VariantAlsoNegotiatesResponse(); };
        expect(t).toThrow(VariantAlsoNegotiatesResponse);
    });

    it('InsufficientStorageResponse', () => {
        const t = () => { throw new InsufficientStorageResponse(); };
        expect(t).toThrow(InsufficientStorageResponse);
    });

    it('LoopDetectedResponse', () => {
        const t = () => { throw new LoopDetectedResponse(); };
        expect(t).toThrow(LoopDetectedResponse);
    });
    it('BandwidthLimitExceededResponse', () => {
        const t = () => { throw new BandwidthLimitExceededResponse(); };
        expect(t).toThrow(BandwidthLimitExceededResponse);
    });

    it('NotExtendedResponse', () => {
        const t = () => { throw new NotExtendedResponse(); };
        expect(t).toThrow(NotExtendedResponse);
    });
    it('NetworkAuthenticationRequiredResponse', () => {
        const t = () => { throw new NetworkAuthenticationRequiredResponse(); };
        expect(t).toThrow(NetworkAuthenticationRequiredResponse);
    });



});
