import { Controller, Get } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user')
  getUser(@Payload() data, @Ctx() context: RmqContext) {
    const content = JSON.parse(context.getMessage().content);
    const channel = context.getChannelRef();
    console.log(data);

    //Manually delivering acknowledgement
    channel.ack(context.getMessage());
  }
}
