import {
	get_form_data_object,
	prepare_data_for_insert,
	type Actions
} from '$db/actions'
import { fix_pojo } from '$utilities/fix_pojo'
import { log_error } from '$utilities/log_error'
import {
	// todos_raw_schema_json,
	type Todo
} from './schema'
import { todos } from './collection'

export const Todos: Actions = {
	create: async function ({ locals, request }) {

		const data = await get_form_data_object(request)
		const insert_data = prepare_data_for_insert<Todo>(data, data.name)
		const created_path = await todos.insertOne(insert_data).catch(log_error)

		return {
			id: fix_pojo(created_path.insertedId)
		}
	},

	update: async function ({ locals, request }) {

		// Get the data from the request
		const data = await get_form_data_object(request)
		const updated_path = await todos
			//to get the updated doc when performing an update operation on one doc, use findOneAndUpdate() and in the options object, set returnDocument property to 'after'
			//@#see https://stackoverflow.com/questions/24747189/update-and-return-document-in-mongodb
			.findOneAndUpdate({ _id: data._id }, { $set: data }, { returnDocument: 'after' })
			.catch(log_error)

		if (updated_path.ok) return updated_path.value
	},

	updateAllToComplete: async function ({ locals, request }) {

		// Get the data from the request
		const data = await get_form_data_object(request)
		const updated_path = await todos
			.updateMany({}, { $set: {completed: "True"}}, { returnDocument: 'after' })
			.catch(log_error)

		if (updated_path.ok) return updated_path.value
	},

	updateAllToIncomplete: async function ({ locals, request }) {

		// Get the data from the request
		const data = await get_form_data_object(request)
		const updated_path = await todos
		.updateMany({}, { $set: {completed: "False"}}, { returnDocument: 'after' })
			.catch(log_error)

		if (updated_path.ok) return updated_path.value
	},

	delete: async function ({ locals, request }) {
		// if (!has_role(locals, 'admin')) return fail(401)

		const data = await get_form_data_object(request)

		const updated_path = await todos.deleteOne({ _id: data._id }).catch(log_error)

		if (updated_path.ok) return updated_path.value
	},

	deleteCompleted: async function ({ locals, request }) {
		// if (!has_role(locals, 'admin')) return fail(401)

		const data = await get_form_data_object(request)

		const updated_path = await todos.deleteMany({completed: "True"}).catch(log_error)

		if (updated_path.ok) return updated_path.value
	},
}

