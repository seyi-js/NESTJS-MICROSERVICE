import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUser(username: string): User {
    return { name: username, email: username + '@nestjs.com' };
  }
}
