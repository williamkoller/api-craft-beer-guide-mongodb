import { LoadAllStyleService } from '@/style/services/load-all-style/load-all-style.service';
import { ReturnPaginationReturnType } from '@/style/types/return-pagination-result.type';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('style')
export class LoadAllStyleController {
  constructor(private readonly loadAllStyleService: LoadAllStyleService) {}

  @Get()
  async loadAll(@Req() req: Request): Promise<ReturnPaginationReturnType> {
    return await this.loadAllStyleService.loadAll(req.query);
  }
}
