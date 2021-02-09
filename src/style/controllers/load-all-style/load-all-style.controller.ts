import { Style } from '@/schemas/style.schema';
import { LoadAllStyleService } from '@/style/services/load-all-style/load-all-style.service';
import { Controller, Get } from '@nestjs/common';

@Controller('style')
export class LoadAllStyleController {
  constructor(private readonly loadAllStyleService: LoadAllStyleService) {}

  @Get()
  async loadAll(): Promise<Array<Style>> {
    return await this.loadAllStyleService.loadAll();
  }
}
