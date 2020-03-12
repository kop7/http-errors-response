# HTTP errors response
[![npm (scoped)](https://img.shields.io/badge/npm-v1.0.0-blue)](https://www.npmjs.com/package/http-errors-response-ts)
![contributions welcome](https://img.shields.io/badge/contributions-welcome-green)
![tests](https://img.shields.io/badge/tests-40%20passed-green)

This library provide some Error classes to map the problems that you may want to report to your clients.

### Usage
```
npm install http-errors-response-ts --save
```

### Usage
##### import error from lib
```typescript
import { BadRequestResponse } from 'http-errors-response-ts';

throw new BadRequestResponse();
```
expexted object
```json
{
  "statusCode": 400,
  "message": "Bad Request"
}
```
##### with custom message
```typescript
import { BadRequestResponse } from 'http-errors-response-ts';

throw new BadRequestResponse('Custom message');
```

expexted object
```json
{
  "statusCode": 400,
  "message": "Custom message"
}
```

#### List of all Error

|Status Code|Error Name                   |
|-----------|-------------------------------------|
|400        |BadRequestResponse                   |
|401        |UnauthorizedResponse                 |
|402        |PaymentRequiredResponse              |
|403        |ForbiddenResponse                    |
|404        |NotFoundResponse                     |
|405        |MethodNotAllowedResponse             |
|406        |NotAcceptableResponse                |
|407        |ProxyAuthenticationRequiredResponse  |
|408        |RequestTimeoutResponse               |
|409        |ConflictResponse                     |
|410        |GoneResponse                         |
|411        |LengthRequiredResponse               |
|412        |PreconditionFailedResponse           |
|413        |PayloadTooLargeResponse              |
|414        |URITooLongResponse                   |
|415        |UnsupportedMediaTypeResponse         |
|416        |RangeNotSatisfiableResponse          |
|417        |ExpectationFailedResponse            |
|418        |ImATeapotResponse                    |
|421        |MisdirectedRequestResponse           |
|422        |UnprocessableEntityResponse          |
|423        |LockedResponse                       |
|424        |FailedDependencyResponse             |
|425        |UnorderedCollectionResponse          |
|426        |UpgradeRequiredResponse              |
|428        |PreconditionRequiredResponse         |
|429        |TooManyRequestsResponse              |
|431        |RequestHeaderFieldsTooLargeResponse  |
|451        |UnavailableForLegalReasonsResponse   |
|500        |InternalServerErrorResponse          |
|501        |NotImplementedResponse               |
|502        |BadGatewayResponse                   |
|503        |ServiceUnavailableResponse           |
|504        |GatewayTimeoutResponse               |
|505        |HTTPVersionNotSupportedResponse      |
|506        |VariantAlsoNegotiatesResponse        |
|507        |InsufficientStorageResponse          |
|508        |LoopDetectedResponse                 |
|509        |BandwidthLimitExceededResponse       |
|510        |NotExtendedResponse                  |
|511        |NetworkAuthenticationRequiredResponse|
