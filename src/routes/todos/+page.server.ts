//JS disabled? No prob. Load function is all rendered server-side.
//Data is fetched server-side ONLY in ".server.ts" files, so information is not revealed client-side
//@see https://kit.svelte.dev/docs/load#page-data
import type { PageServerLoad } from './$types'

import { todos } from '$db/models/todos/collection'
import { Todos } from '$db/models/todos/actions'

//Helper function to stringify/parse object
import { fix_pojo } from '$utilities/fix_pojo'

//If hitting an API, you can use SvelteKit "fetch" in the load function
//@see https://kit.svelte.dev/docs/web-standards#fetch-apis
export const load = async function () {
	console.log(`+page.server.ts Server Load Function Ran!`)

	//Query for all todos
	const all_todos = await todos.find({}, { sort: { order: 1 } }).toArray()

	//Query for todos with "completed: "False""
	//BAD PRACTICE DON'T ACTUALLY DO THIS.
	//A separate db query isn't needed for this, just figure it out client-side
	//TODO: refactor "completed" to boolean type ?
	const incomplete_todos = await todos.countDocuments({completed: "False"})
	const complete_todos = await todos.countDocuments({completed: "True"})

	return {
		todos: fix_pojo(all_todos),
		incompleteTodos: fix_pojo(incomplete_todos),
		completeTodos: fix_pojo(complete_todos)
	}
} satisfies PageServerLoad

//Create, Update, Delete actions:
export const actions = {
	create: Todos.create,
	update: Todos.update,
	delete: Todos.delete,
	deleteCompleted: Todos.deleteCompleted,
	updateAllToComplete: Todos.updateAllToComplete,
	updateAllToIncomplete: Todos.updateAllToIncomplete
}
