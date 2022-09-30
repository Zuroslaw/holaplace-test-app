import { Controller, Get, Query } from '@nestjs/common';
import { Task, TaskRepository } from './task.repository';

@Controller()
export class TaskController {
  constructor(private readonly taskRepository: TaskRepository) {}
  private count = 1;

  private nextId(): string {
    return '' + this.count++;
  }

  @Get()
  async listTasks(): Promise<Task[]> {
    return this.taskRepository.listTasks();
  }

  @Get('/add') // GET for the sake of simplified testing
  async addTask(@Query('description') description): Promise<string> {
    const task: Task = {
      id: this.nextId(),
      description,
    };
    await this.taskRepository.addTask(task);
    return 'OK';
  }
}
