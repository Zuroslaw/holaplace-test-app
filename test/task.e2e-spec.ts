import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TaskModule } from '../src/task.module';
import { Task } from '../src/task.repository';

describe('TaskController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TaskModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('empty list', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect([]);
  });

  it('nested list', () => {
    return 'todo';
  });
});
