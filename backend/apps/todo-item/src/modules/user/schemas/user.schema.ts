import { ModelDefinition, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

@Schema()
export class User {}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = HydratedDocument<User>;
export type UserModel = Model<User>;

export const UserModelDefinition: ModelDefinition = {
  name: User.name,
  schema: UserSchema,
};
