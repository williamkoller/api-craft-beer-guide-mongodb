import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StyleDocument = Style & Document;

@Schema({ timestamps: true })
export class Style {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  ref: string;
}

export const StyleSchema = SchemaFactory.createForClass(Style);
