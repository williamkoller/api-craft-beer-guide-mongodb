import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Style, StyleSchema } from '@/schemas/style.schema';
import { AddStyleRepository } from '@/style/repositories/add-style-repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Style.name,
        schema: StyleSchema,
      },
    ]),
  ],
  providers: [AddStyleRepository],
})
export class StyleModule {}
