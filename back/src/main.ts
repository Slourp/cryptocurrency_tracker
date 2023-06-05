import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { SwaggerModuleSetup } from '@app/swagger/swagger.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModuleSetup.setup(app);
  await app.listen(3000);
}
bootstrap();
