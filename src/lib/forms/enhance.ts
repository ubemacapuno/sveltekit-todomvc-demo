// import { form_toast } from '$lib/stores/toast'
import type { SubmitFunction } from '@sveltejs/kit'

// ? function that sends a toast message on form submission

export const form_action: ({
	message
}: {
	message?: string
}) => SubmitFunction<Record<string, any>, Record<string, any>> = (
	{ message }: { message?: string },
	callback: (data: any) => any
) => {
	return ({ data }) => {
		return ({ result }): void => {
			// if (message) form_toast(result, message)

			if (callback && result?.data) callback(result.data)
		}
	}
}
