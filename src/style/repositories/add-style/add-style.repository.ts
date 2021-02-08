import { Style, StyleDocument } from '@/schemas/style.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddStyleDto } from '@/style/dtos/add-style.dto';

@Injectable()
export class AddStyleRepository {
  constructor(
    @InjectModel(Style.name) private readonly styleModel: Model<StyleDocument>,
  ) {}

  add(addStyleDto: AddStyleDto): Promise<Style> {
    const createdStyle = new this.styleModel(addStyleDto);
    return createdStyle.save();
  }
}
