import type { PageServerLoad } from './$types'
//@see https://kit.svelte.dev/docs/load#page-data

import { todos } from '$db/models/todos/collection'
import { Todos } from '$db/models/todos/actions'
import { fix_pojo } from '$utilities/fix_pojo'

export const load = async function () {
	//Query for all todos
	const all_todos = await todos.find({}, { sort: { order: 1 } }).toArray()

	//Query for todos with "completed: "False""
	//BAD PRACTICE DON'T ACTUALLY DO THIS.
	//TODO: refactor completed to boolean type
	const incomplete_todos = await todos.countDocuments({completed: "False"})

	return {
		todos: fix_pojo(all_todos),
		incompleteTodos: fix_pojo(incomplete_todos)
	}
} satisfies PageServerLoad

export const actions = {
	create: Todos.create,
	update: Todos.update,
	delete: Todos.delete,
	updateTrue: Todos.updateTrue,
}
