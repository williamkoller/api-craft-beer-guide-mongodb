import { Controller, Get, Param } from '@nestjs/common';
import { Style } from '@/schemas/style.schema';
import { LoadStyleByNameService } from '@/style/services/load-style-by-name/load-style-by-name.service';
import { LoadStyleByNameType } from '@/style/types/load-style-by-name.type';

@Controller('style')
export class LoadStyleByNameController {
  constructor(
    private readonly loadStyleByNameService: LoadStyleByNameService,
  ) {}

  @Get(':name')
  async loadByName(
    @Param() loadStyleByNameType: LoadStyleByNameType,
  ): Promise<Array<Style>> {
    return await this.loadStyleByNameService.loadByName(loadStyleByNameType);
  }
}
