import { update_schema } from '$db/utilities'
import db from '$db/mongo'
import { todos_json_schema, type Todo } from './schema'

const todos = db.collection<Todo>('todos')

update_schema('todos', todos_json_schema)

export { todos }
