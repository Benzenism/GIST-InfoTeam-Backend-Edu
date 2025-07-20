import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto, UpdateBoardDto } from './dto/thread.dto';

@Injectable()
export class AppService {
  boards = [
    { id: 1, title: 'title1', content: 'content1', userId: 'user1' },
    { id: 2, title: 'title2', content: 'content2', userId: 'user2' },
  ];
  private lastId = 2; //boards 없을 경우 private lastId = 0;

  findById(id: number) {
    const board = this.boards.find(b => b.id === id);
    if (!board) throw new NotFoundException('게시글이 없습니다.');
    return board;
  }

  findByUserId(userId: string) {
    return this.boards.filter(b => b.userId === userId);
  }

  create(createBoardDto: CreateBoardDto) {
    this.lastId++;
    const newBoard = {
      id: this.lastId,
      ...createBoardDto,
    };
    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    const board = this.findById(id);
    Object.assign(board, updateBoardDto);
    return board;
  }

  remove(id: number) {
    const idx = this.boards.findIndex(b => b.id === id);
    if (idx < 0) throw new NotFoundException('게시글이 없습니다.');
    this.boards.splice(idx, 1);
    return { success: true };
  }
}