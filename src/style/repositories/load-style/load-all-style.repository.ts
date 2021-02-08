import { Style, StyleDocument } from '@/schemas/style.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LoadAllStyleRepository {
  constructor(
    @InjectModel(Style.name) private readonly styleModel: Model<StyleDocument>,
  ) {}
  async loadAll(): Promise<Array<Style>> {
    return await this.styleModel.find();
  }
}
