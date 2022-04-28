import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microservice = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${process.env.RABBITMQ_HOST}:5672`],
      queue: 'cats_queue',
      queueOptions: {
        durable: false,
      },
      noAck: false,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
