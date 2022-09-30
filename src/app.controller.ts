import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './app.repository';
import { uuid } from 'uuidv4';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async listTasks(): Promise<Task[]> {
    return this.appService.listTasks();
  }

  @Get('/add') // GET for the sake of simplified testing
  async addTask(@Query('description') description): Promise<string> {
    const task: Task = {
      id: uuid(),
      description,
    };
    await this.appService.addTask(task);
    return 'OK';
  }
}
