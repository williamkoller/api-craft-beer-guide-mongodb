import { LoadAllStyleRepository } from '@/style/repositories/load-all-style/load-all-style.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ReturnPaginationReturnType } from '@/style/types/return-pagination-result.type';
import { QueryOptions } from '@/common/query-options/query-options.config';

@Injectable()
export class LoadAllStyleService {
  constructor(
    private readonly loadAllStyleRepository: LoadAllStyleRepository,
  ) {}

  async loadAll(options: QueryOptions): Promise<ReturnPaginationReturnType> {
    const styles = await this.loadAllStyleRepository.loadAll(options);
    if (styles.results.length === 0) {
      throw new NotFoundException('No records found.');
    }
    return styles;
  }
}
