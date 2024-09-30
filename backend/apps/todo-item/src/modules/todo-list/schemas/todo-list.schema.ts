import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, SchemaTypes } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

@Schema()
export class TodoList {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  user!: User;
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList);
export type TodoListDocument = HydratedDocument<TodoList>;
export type TodoListModel = Model<TodoList>;

export const TodoListModelDefinition: ModelDefinition = {
  name: TodoList.name,
  schema: TodoListSchema,
};
