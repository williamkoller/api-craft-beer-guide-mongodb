import { Style } from '@/schemas/style.schema';
import { LoadStyleByNameRepository } from '@/style/repositories/load-style-by-name/load-style-by-name.repository';
import { LoadStyleByNameType } from '@/style/types/load-style-by-name.type';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadStyleByNameService {
  constructor(
    private readonly loadStyleByNameRepository: LoadStyleByNameRepository,
  ) {}
  async loadByName(
    loadStylebyNameType: LoadStyleByNameType,
  ): Promise<Array<Style>> {
    const styleName = await this.loadStyleByNameRepository.loadByName(
      loadStylebyNameType,
    );
    if (!styleName) {
      throw new NotFoundException();
    }
    return styleName;
  }
}
