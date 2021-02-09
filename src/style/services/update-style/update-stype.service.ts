import { UpdateStyleDto } from '@/style/dtos/update-style.dto';
import { LoadByIdRepository } from '@/style/repositories/load-by-id/load-by-id.repository';
import { UpdateStyleRepository } from '@/style/repositories/update-style/update-style.repository';
import { ReturnMessageType } from '@/style/types/return-message.type';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UpdateStyleService {
  constructor(
    private readonly updateStyleRepository: UpdateStyleRepository,
    private readonly loadByIdRepository: LoadByIdRepository,
  ) {}

  async update(
    _id: string,
    updateStyleDto: UpdateStyleDto,
  ): Promise<ReturnMessageType> {
    const styleFound = await this.loadByIdRepository.loadById(_id);
    if (!styleFound) {
      throw new NotFoundException();
    }
    return await this.updateStyleRepository.update(_id, updateStyleDto);
  }
}
