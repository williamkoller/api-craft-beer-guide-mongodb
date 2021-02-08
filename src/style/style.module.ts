import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Style, StyleSchema } from '@/schemas/style.schema';
import { AddStyleRepository } from '@/style/repositories/add-style/add-style.repository';
import { LoadAllStyleRepository } from '@/style/repositories/load-style/load-all-style.repository';
import { LoadAllStyleService } from '@/style/services/load-all/load-all-style.service';
import { LoadAllStyleController } from '@/style/controllers/load-all/load-all-style.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Style.name,
        schema: StyleSchema,
      },
    ]),
  ],
  providers: [AddStyleRepository, LoadAllStyleRepository, LoadAllStyleService],
  controllers: [LoadAllStyleController],
})
export class StyleModule {}
