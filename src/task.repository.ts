import { Injectable } from '@nestjs/common';

export interface Task {
  id: string;
  description: string;
  parent?: string;
}

@Injectable()
export class TaskRepository {
  private tasks: Task[] = [];

  async listTasks(): Promise<Task[]> {
    return this.tasks;
  }

  async addTask(task: Task) {
    this.tasks = [...this.tasks, task];
  }

  async listTasksNested(): Promise<any> {
    return null; // implement
  }
}
