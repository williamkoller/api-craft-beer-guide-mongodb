import { Model } from 'mongoose';
import { Style, StyleDocument } from '@/schemas/style.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateStyleDto } from '@/style/dtos/update-style.dto';
import { ReturnMessageType } from '@/style/types/return-message.type';

export class UpdateStyleRepository {
  constructor(
    @InjectModel(Style.name) private readonly styleModel: Model<StyleDocument>,
  ) {}

  async update(
    _id: string,
    updateStyleDto: UpdateStyleDto,
  ): Promise<ReturnMessageType> {
    await this.styleModel.findOneAndUpdate({ _id }, { $set: updateStyleDto });
    return {
      message: 'Style updated successfully.',
    };
  }
}
