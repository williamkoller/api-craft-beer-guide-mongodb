import { Style } from '@/schemas/style.schema';
import { AddStyleDto } from '@/style/dtos/add-style.dto';
import { AddStyleService } from '@/style/services/add-style/add-style.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('style')
export class AddStyleController {
  constructor(private readonly addStyleService: AddStyleService) {}

  @Post()
  async add(@Body() addStyleDto: AddStyleDto): Promise<Style> {
    return await this.addStyleService.add(addStyleDto);
  }
}
