
<script lang="ts">
    import { enhance } from '$app/forms'
    import { invalidateAll } from '$app/navigation'
    import { form_action } from '$lib/forms/enhance'
    import type { PageData } from './$types'
        
    export let data: PageData;
    $: ({ todos } = data)

    let count: number
    
</script>

<form
method="POST"
action="?/create"
use:enhance={form_action({ message: 'Company creation' }, async (res) => await invalidateAll())}
>
    <input placeholder="What needs to be done?" type="text" name="content" />
    <input type="hidden" name="completed" value="False" />
    <button type="submit">Add Todo</button>
</form>

{#each todos as todo}
<div class="card">
    <!-- <p>{todo.content}</p> -->
    <!-- <p>{todo.completed}</p> -->
    {#if todo.completed === "False"}
        <form
        method="POST"
        action="?/update"
        use:enhance={form_action({ message: 'Company update' }, async (res) => await invalidateAll())}
    >
            <input type="hidden" name="_id" value={todo._id} />
            <input type="hidden" name="completed" value={"True"} />
            <button color="secondary" type="submit">⚪</button>
        </form>
    {:else}
        <form
        method="POST"
        action="?/update"
        use:enhance={form_action({ message: 'Company update' }, async (res) => await invalidateAll())}
    >
            <input type="hidden" name="_id" value={todo._id} />
            <input type="hidden" name="completed" value={"False"} />
            <button color="secondary" type="submit">🟢</button>
        </form>
    {/if}
    <form
    method="POST"
    action="?/update"
    use:enhance={form_action({ message: 'Company update' }, async (res) => await invalidateAll())}
>
        <input type="hidden" name="_id" value={todo._id} />
        <input type="text" name="content" value={todo.content} />
        <!-- <input type="text" name="completed" value={todo.completed} /> -->
        <button color="secondary" type="submit">Update</button>
    </form>

    <form
    method="POST"
    action="?/delete"
    use:enhance={form_action(
        { message: 'Company deletion' },
        async (res) => await invalidateAll()
    )}
>
        <input type="hidden" name="_id" value={todo._id} />
        <button color="error" type="submit">❌</button>
    </form>
</div>
{/each}

<style>
    .card{
        display: flex;
    }

    input {
        margin: 1rem;
        padding: 0.5rem;
    }
</style>