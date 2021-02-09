import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StyleDocument = Style & Document;

@Schema({ timestamps: true })
export class Style {
  @Prop({ type: String, required: true })
  name: string;
}

export const StyleSchema = SchemaFactory.createForClass(Style);
