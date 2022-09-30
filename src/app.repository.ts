import { Injectable } from '@nestjs/common';

export interface Task {
  id: string;
  description: string;
}

@Injectable()
export class AppRepository {
  private tasks: Task[] = [];

  async listTasks(): Promise<Task[]> {
    return this.tasks;
  }

  async addTask(task: Task) {
    this.tasks = [...this.tasks, task];
  }
}
