import { Style } from '@/schemas/style.schema';
import { LoadAllStyleRepository } from '@/style/repositories/load-all-style/load-all-style.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LoadAllStyleService {
  constructor(
    private readonly loadAllStyleRepository: LoadAllStyleRepository,
  ) {}

  async loadAll(): Promise<Array<Style>> {
    const styles = await this.loadAllStyleRepository.loadAll();
    if (styles.length === 0) {
      throw new NotFoundException('No records found.');
    }
    return styles;
  }
}
