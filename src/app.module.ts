import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StyleModule } from '@/style/style.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), StyleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
