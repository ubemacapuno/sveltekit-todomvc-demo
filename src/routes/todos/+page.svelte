<script lang="ts">
    import '../styles.css';
    import { enhance } from '$app/forms'
    import { invalidateAll } from '$app/navigation'
    import { form_action } from '$lib/forms/enhance'
    import type { PageData } from './$types'
        
    export let data: PageData;
    $: ({ todos } = data)
    $: ({incompleteTodos} = data)

    let textInput = ""

    const clearFormInput = async (event) => {
        event.target.reset();
    }
    
</script>

<main>
    <body>
        <section class="todoapp">
            <h1>SvelteKit</h1>
            <form
            method="POST"
            action="?/create"
            use:enhance={form_action({ message: 'Todo creation' }, async (res) => await invalidateAll())}
            on:submit|preventDefault={clearFormInput}
            >
                <input class="new-todo" placeholder="What needs to be done?" type="text" name="content" bind:value={textInput} />
                <input type="hidden" name="completed" value="False" />
            </form>

            <section class="main">
                <input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
                <ul class="todo-list">
                    <li>
                        {#each todos as todo}
                            <!-- <p>{todo.content}</p> -->
                            <!-- <p>{todo.completed}</p> -->
                            <label class="should-be-a-div">
                                {#if todo.completed === "False"}
                                    <form
                                    method="POST"
                                    action="?/update"
                                    use:enhance={form_action({ message: 'Todo update' }, async (res) => await invalidateAll())}
                                >
                                        <input type="hidden" name="_id" value={todo._id} />
                                        <input type="hidden" name="completed" value={"True"} />
                                        <button color="secondary" type="submit">⚪</button>
                                    </form>
            
                                {:else}
                                    <form
                                    method="POST"
                                    action="?/update"
                                    use:enhance={form_action({ message: 'Todo update' }, async (res) => await invalidateAll())}
                                >
                                        <input type="hidden" name="_id" value={todo._id} />
                                        <input type="hidden" name="completed" value={"False"} />
                                        <button color="secondary" type="submit">✔️</button>
                                    </form>
                                {/if}
                                <form
                                method="POST"
                                action="?/update"
                                use:enhance={form_action({ message: 'Todo update' }, async (res) => await invalidateAll())}
                            >
                                    <input type="hidden" name="_id" value={todo._id} />
                                    <input class="current-todo" type="text" name="content" value={todo.content} />
                                    <!-- <input type="text" name="completed" value={todo.completed} /> -->
                                    <!-- <button class="update" color="secondary" type="submit">Update</button> -->
                                </form>
                            
                                <form
                                    method="POST"
                                    action="?/delete"
                                    data-sveltekit-reload
                                    use:enhance={form_action(
                                        { message: 'Todo deletion' },
                                        async (res) => await invalidateAll()
                                    )}
                                >
                                    <input type="hidden" name="_id" value={todo._id} />
                                    <button color="error" type="submit">❌</button>
                                </form>
                            </label>
                        {/each}
                    </li>
                </ul>
            </section>
            {#if todos.length > 0}
                <footer class="footer">
                    {#if incompleteTodos === 1}
                        <span class="todo-count">{incompleteTodos} item left</span>
                    {:else if incompleteTodos === 0 || incompleteTodos > 1}
                        <span class="todo-count">{incompleteTodos} items left</span>
                    {/if}
                    <ul class="filters">
                        <li>
                            <a href="#/">All</a>
                        </li>
                        <li>
                            <a href="#/active">Active</a>
                        </li>
                        <li>
                            <a href="#/completed">Completed</a>
                        </li>
                    </ul>
                    <button class="clear-completed">Clear completed</button>
                </footer>
            {/if}
        </section>
    </body>
</main>

<footer class="info">
    <p>By Corey Damocles</p>
</footer>
<style>
    .should-be-a-div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #ededed;
    }

    .current-todo {
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        color: inherit;
    }

    .update {
        background-color: orangered;
        border: none;
        color: white;
        padding: 0.5rem 1rem;
        margin: 0.25rem 0;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 12px;
        cursor: pointer;
        transition-duration: 0.2s;
    }

    .update:hover {
        background-color: rgb(196, 52, 0); 
    }
</style>