import { ObjectId } from 'mongodb'
import type { Action } from '@sveltejs/kit'

// ?  this takes the request and grabs the values of the fields inside as an object. this object can then be used to update the database
export async function get_form_data_object(request: Request): Promise<{ [key: string]: string }> {
	const form_data = await request.formData()
	const data = form_data.entries()

	let obj = data.next()
	const retrieved: any = {}
	while (undefined !== obj.value) {
		retrieved[obj.value[0]] = obj.value[1]
		obj = data.next()
	}

	// TODO: transform form data types to match new data shape when getting the form data

	return retrieved
}

export function prepare_data_for_insert<T>(data: T): T {
	const new_data = data
	// Generate ID
	new_data._id = new ObjectId().toString()
	return new_data
}

export interface Actions {
	[key: string]: Action
}

export interface Actions {
	[key: string]: Action
}
