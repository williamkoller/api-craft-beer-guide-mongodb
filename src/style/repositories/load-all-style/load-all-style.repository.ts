import { QueryOptions } from '@/common/query-options/query-options.config';
import { Style, StyleDocument } from '@/schemas/style.schema';
import { ReturnPaginationReturnType } from '@/style/types/return-pagination-result.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LoadAllStyleRepository {
  constructor(
    @InjectModel(Style.name) private readonly styleModel: Model<StyleDocument>,
  ) {}
  async loadAll(options: QueryOptions): Promise<ReturnPaginationReturnType> {
    const { offset, limit } = options;

    if (options.fields) {
      const results = await this.styleModel
        .find(
          {
            [options.fields]: { $regex: `.*${options.text}*.`, $options: 'i' },
          },
          { __v: false },
        )
        .skip(Number(offset))
        .limit(Number(limit));
      return {
        results,
        total: results.length,
      };
    }
    const results = await this.styleModel
      .find({}, { __v: false })
      .skip(Number(offset))
      .limit(Number(limit));
    return {
      results,
      total: results.length,
    };
  }
}
