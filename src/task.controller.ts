import { Controller, Get, Post, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.repository';
import { uuid } from 'uuidv4';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async listTasks(): Promise<Task[]> {
    return this.taskService.listTasks();
  }

  @Get('/add') // GET for the sake of simplified testing
  async addTask(@Query('description') description): Promise<string> {
    const task: Task = {
      id: uuid(),
      description,
    };
    await this.taskService.addTask(task);
    return 'OK';
  }
}
