import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Style, StyleSchema } from '@/schemas/style.schema';
import { AddStyleRepository } from '@/style/repositories/add-style/add-style.repository';
import { LoadAllStyleRepository } from '@/style/repositories/load-all-style/load-all-style.repository';
import { LoadAllStyleService } from '@/style/services/load-all-style/load-all-style.service';
import { LoadAllStyleController } from '@/style/controllers/load-all-style/load-all-style.controller';
import { AddStyleService } from '@/style/services/add-style/add-style.service';
import { AddStyleController } from '@/style/controllers/add-style/add-style.controller';
import { LoadStyleByNameRepository } from '@/style/repositories/load-style-by-name/load-style-by-name.repository';
import { LoadStyleByNameService } from '@/style/services/load-style-by-name/load-style-by-name.service';
import { LoadStyleByNameController } from '@/style/controllers/load-style-by-name/load-style-by-name.controller';
import { UpdateStyleRepository } from '@/style/repositories/update-style/update-style.repository';
import { UpdateStyleService } from '@/style/services/update-style/update-stype.service';
import { LoadByIdRepository } from '@/style/repositories/load-by-id/load-by-id.repository';
import { UpdateStyleController } from '@/style/controllers/update-style/update-style.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Style.name,
        schema: StyleSchema,
      },
    ]),
  ],
  providers: [
    AddStyleRepository,
    AddStyleService,
    LoadAllStyleRepository,
    LoadAllStyleService,
    LoadStyleByNameRepository,
    LoadStyleByNameService,
    UpdateStyleRepository,
    UpdateStyleService,
    LoadByIdRepository,
  ],
  controllers: [
    LoadAllStyleController,
    AddStyleController,
    LoadStyleByNameController,
    UpdateStyleController,
  ],
})
export class StyleModule {}
