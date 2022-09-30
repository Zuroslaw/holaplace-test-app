import { Injectable } from '@nestjs/common';
import { TaskRepository, Task } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async listTasks(): Promise<Task[]> {
    return this.taskRepository.listTasks();
  }

  async addTask(task: Task) {
    return this.taskRepository.addTask(task);
  }
}
