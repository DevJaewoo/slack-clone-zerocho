import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const error = exception.getResponse() as
      | string
      | { error: string; statusCode: number; message: string[] };

    const status = exception.getStatus();
    if (typeof error !== 'string' && error.error === 'Bad Request') {
      Logger.error(error.message, 'HTTP');
      response.status(status).json({
        success: false,
        code: status,
        data: error.message,
      });
    } else {
      Logger.error(error, 'HTTP');
      response.status(status).json({
        success: false,
        code: status,
        data: error,
      });
    }
  }
}
