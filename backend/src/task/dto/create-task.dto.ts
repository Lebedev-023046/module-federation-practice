import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ default: 1 })
  @IsInt()
  @Min(1)
  @Max(3)
  priority: number;

  @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
