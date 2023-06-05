import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class SwaggerModuleSetup {
  static setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('Crypto Tracker')
      .setDescription('A crypto tracker with alert functions')
      .setVersion('1.0')
      .addTag('crypto')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
