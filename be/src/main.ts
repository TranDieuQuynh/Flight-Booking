import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove extra fields from the request body
      forbidNonWhitelisted: true, // Reject requests with unknown fields
      transform: true, // Transform payloads to DTO instances
    }),
  );

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('QRAirline database')
    .setDescription('The QRAirline database API description')
    .setVersion('1.0')
    .addTag('airline')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
