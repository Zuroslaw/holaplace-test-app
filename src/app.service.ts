import { Injectable } from '@nestjs/common';
import { AppRepository, Task } from './app.repository';

@Injectable()
export class AppService {
  constructor(private readonly appService: AppRepository) {}

  async listTasks(): Promise<Task[]> {
    return this.appService.listTasks();
  }

  async addTask(task: Task) {
    return this.appService.addTask(task);
  }
}
