import { Style, StyleDocument } from '@/schemas/style.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class LoadByIdRepository {
  constructor(
    @InjectModel(Style.name) private readonly styleModel: Model<StyleDocument>,
  ) {}

  async loadById(_id: string): Promise<Style> {
    return await this.styleModel.findById(_id);
  }
}
