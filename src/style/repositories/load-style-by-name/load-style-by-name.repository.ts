import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Style, StyleDocument } from '@/schemas/style.schema';
import { LoadStyleByNameType } from '@/style/types/load-style-by-name.type';

@Injectable()
export class LoadStyleByNameRepository {
  constructor(
    @InjectModel(Style.name) private readonly styleModel: Model<StyleDocument>,
  ) {}

  async loadByName(
    loadStyleByNameType: LoadStyleByNameType,
  ): Promise<Array<Style>> {
    const { name } = loadStyleByNameType;
    return await this.styleModel.find(
      {
        name: { $regex: name, $options: 'i' },
      },
      {
        __v: false,
      },
    );
  }
}
