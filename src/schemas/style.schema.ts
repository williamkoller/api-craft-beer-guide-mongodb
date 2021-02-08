import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StyleDocument = Style & Document;

@Schema({ _id: true })
export class Style {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const StyleSchema = SchemaFactory.createForClass(Style);
