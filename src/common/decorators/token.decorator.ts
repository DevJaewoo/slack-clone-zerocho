import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Response } from 'express';

export const Token = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const response = context.switchToHttp().getResponse<Response>();
    return response.locals.jwt;
  },
);
