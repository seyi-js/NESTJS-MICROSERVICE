import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('user_service') private client: ClientProxy) {}
  getHello(): string {
    this.client.emit('get_user', { username: 'samuel' });
    return 'Hello World!';
  }
}
