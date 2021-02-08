import { Injectable } from '@nestjs/common';
import { AddStyleRepository } from '@/style/repositories/add-style/add-style.repository';
import { AddStyleDto } from '@/style/dtos/add-style.dto';
import { Style } from '@/schemas/style.schema';

@Injectable()
export class AddStyleService {
  constructor(private readonly addStyleRepository: AddStyleRepository) {}

  async add(addStyleDto: AddStyleDto): Promise<Style> {
    return await this.addStyleRepository.add(addStyleDto);
  }
}
