import type { PageServerLoad } from './$types'
import { todos } from '$db/models/todos/collection'
import { Todos } from '$db/models/todos/actions'
import { fix_pojo } from '$utilities/fix_pojo'

export const load = async function () {
	const all_todos = await todos.find({}, { sort: { order: 1 } }).toArray()

	return {
		todos: fix_pojo(all_todos) 
	}
} satisfies PageServerLoad

export const actions = {
	create: Todos.create,
	update: Todos.update,
	delete: Todos.delete,
	updateTrue: Todos.updateTrue,
}
