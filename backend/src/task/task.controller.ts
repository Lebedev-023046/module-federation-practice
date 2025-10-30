import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParseBooleanPipe } from 'src/common/pipes/parse-boolean.pipe';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Task created' })
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of all tasks' })
  findAll(
    @Query('search') search?: string | undefined,
    @Query('completed', new ParseBooleanPipe()) completed?: boolean | undefined,
  ) {
    console.log({ search });

    return this.tasksService.findAll({ search: search ?? '', completed });
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
