import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskRepository],
})
export class TaskModule {}
