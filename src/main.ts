import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function start() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix("api");
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle("Merch API")
    .setDescription("API for managing merch and file upload")
    .setVersion("1.0")
    .addBearerAuth() 
    .addServer("http://localhost:3030")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);

  const PORT = process.env.PORT ?? 3030;
  await app.listen(PORT, () => {
    console.log(`Server Started: http://localhost:${PORT}/api`);
    console.log(`Swagger Docs: http://localhost:${PORT}/api/docs`);
  });
}

start();
