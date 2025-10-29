import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTaskDto) {
    try {
      const newTask = await this.prisma.task.create({ data });
      console.log(`New Task with id: ${newTask.id} Created`);
      return newTask;
    } catch (error) {
      throw error;
    }
  }

  async findAll({
    search = '',
    completed,
  }: {
    search?: string;
    completed?: boolean;
  }) {
    try {
      return await this.prisma.task.findMany({
        where: {
          ...(search
            ? {
                OR: [
                  { title: { contains: search, mode: 'insensitive' } },
                  { description: { contains: search, mode: 'insensitive' } },
                ],
              }
            : {}),
          ...(completed !== undefined ? { completed } : {}),
        },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.task.findUnique({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, data: UpdateTaskDto) {
    try {
      const updatedTask = await this.prisma.task.update({
        where: { id },
        data,
      });
      console.log(`Task with id: ${updatedTask.id} Updated`);
      return updatedTask;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const removedTask = await this.prisma.task.delete({ where: { id } });
      console.log(`Task with id: ${removedTask.id} Deleted`);
      return removedTask.id;
    } catch (error) {
      throw error;
    }
  }
}
