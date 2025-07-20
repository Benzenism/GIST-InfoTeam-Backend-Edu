import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateBoardDto, UpdateBoardDto } from './dto/thread.dto';

@Controller('boards')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.appService.findById(id);
  }

  @Get()
  getByUserId(@Query('userId') userId: string) {
    return userId ? this.appService.findByUserId(userId) : this.appService.boards;
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.appService.create(createBoardDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto
  ) {
    return this.appService.update(id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appService.remove(id);
  }
}