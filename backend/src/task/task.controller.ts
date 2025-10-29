import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Task created' })
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of all tasks' })
  findAll({
    search = '',
    completed,
  }: {
    search?: string;
    completed?: boolean;
  }) {
    return this.tasksService.findAll({ search, completed });
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Task details' })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Task updated' })
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.update(Number(id), dto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Task deleted' })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(Number(id));
  }
}
