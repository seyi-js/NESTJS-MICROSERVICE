import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${process.env.RABBITMQ_HOST}:5672`],
        queue: 'cats_queue',
        queueOptions: {
          durable: false,
        },
        noAck: false,
      },
    },
  );
  await app.listen();
}
bootstrap();
