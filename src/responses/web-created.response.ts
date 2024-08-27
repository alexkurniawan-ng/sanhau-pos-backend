import { HttpStatus } from '@nestjs/common';

import { WebResponseSync } from './web.response';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function created(response: any): WebResponseSync<any> {
  return {
    code: HttpStatus.CREATED,
    status: 'Created',
    data: response,
  };
}