import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('TEST API')
    .setDescription('TEST 개발을 위한 API 문서입니다.')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  
  await app.listen(port);
  console.log(`listening on port ${port}`)
}
bootstrap();
