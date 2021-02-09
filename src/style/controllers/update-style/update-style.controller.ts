import { UpdateStyleDto } from '@/style/dtos/update-style.dto';
import { UpdateStyleService } from '@/style/services/update-style/update-stype.service';
import { ReturnMessageType } from '@/style/types/return-message.type';
import {
  Body,
  Controller,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('style')
export class UpdateStyleController {
  constructor(private readonly updateStyleService: UpdateStyleService) {}

  @Put('/:_id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateStyleDto: UpdateStyleDto,
    @Param('_id', ValidationPipe) _id: string,
  ): Promise<ReturnMessageType> {
    return await this.updateStyleService.update(_id, updateStyleDto);
  }
}
