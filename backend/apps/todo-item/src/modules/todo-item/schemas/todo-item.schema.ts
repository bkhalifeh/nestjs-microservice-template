import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, SchemaTypes } from 'mongoose';
import { TodoList } from '../../todo-list/schemas/todo-list.schema';
import { User } from '../../user/schemas/user.schema';

@Schema()
export class TodoItem {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'TodoList', required: true })
  todoList!: TodoList;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
  user!: User;

  @Prop({ type: SchemaTypes.String, required: true })
  title!: string;

  @Prop({ type: SchemaTypes.String, required: true })
  description!: string;

  @Prop({ type: SchemaTypes.Number, required: true })
  priority!: number;
}

export const TodoItemSchema = SchemaFactory.createForClass(TodoItem);
export type TodoItemDocument = HydratedDocument<TodoItem>;
export type TodoItemModel = Model<TodoItem>;

export const TodoItemModelDefinition: ModelDefinition = {
  name: TodoItem.name,
  schema: TodoItemSchema,
};
