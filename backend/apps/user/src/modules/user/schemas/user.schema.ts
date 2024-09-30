import {
  InjectModel,
  ModelDefinition,
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { HydratedDocument, Model, SchemaTypes } from 'mongoose';

@Schema()
export class User {
  @Prop({ type: SchemaTypes.String, unique: true, required: true })
  username!: string;

  @Prop({ type: SchemaTypes.String, required: true })
  password!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = HydratedDocument<User>;
export type UserModel = Model<User>;

export const UserModelDefinition: ModelDefinition = {
  name: User.name,
  schema: UserSchema,
};
