import { zod_to_jsonschema } from '$utilities/zod_to_jsonschema'
import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

// Validation schema for todos
export const todos_schema = z.object({
	_id: z.string(),
	content: z.string(),
	completed: z.string()
})

export const todos_raw_schema_json = zodToJsonSchema(todos_schema, {
	$refStrategy: 'none'
})

export type Todo = z.infer<typeof todos_schema>

export const todos_json_schema = zod_to_jsonschema(todos_raw_schema_json)