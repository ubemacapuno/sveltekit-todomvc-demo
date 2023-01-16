<script>
    import './styles.css';

    let toDoList = []; // array of ToDos
    let textInput = "";
    function addToDo() {
        toDoList = [...toDoList, { content: textInput, editing: false, checked: false }]
    }
    function setEditing(i, isEditing) {
        toDoList[i].editing = isEditing; // true / false
    }
    function deleteTodo(i) {
        toDoList.splice(i, 1);
        toDoList = toDoList; // https://svelte.dev/tutorial/updating-arrays-and-objects
    }
</script>
<main>
    <body>
        <section class="todoapp">
            <header class="header">
                <h1>todos</h1>
                <input class="new-todo" placeholder="What needs to be done?" type="text" bind:value={textInput}>
                {#if textInput.length > 0}
                    <button on:click={addToDo}>Add</button>
                {/if}
            </header>
            <section class="main">
                <!-- <input id="toggle-all" class="toggle-all" type="checkbox">
                <label for="toggle-all">Mark all as complete</label> -->
                {#each toDoList as toDo, index}
                    <div class="view">
                        {#if toDo.editing}
                            <input class="toggle" type="text" bind:value={toDo.content}>
                        {:else}
                            <input type="checkbox" bind:checked={toDo.checked}>
                            <h4>{toDo.content}</h4>
                        {/if}
                        <div>
                            {#if toDo.editing}
                                <button on:click={() => setEditing(index, false)}>Save</button>
                            {:else}
                                <button on:click={() => setEditing(index, true)}>Edit</button>
                            {/if}
                            <button on:click={() => deleteTodo(index)}>Delete</button>
                        </div>
                    </div>
                {/each}
            </section>
        </section>
        <footer class="footer">
            {#if toDoList.length === 1}
                <span class="todo-count"><strong>{toDoList.length}</strong> item left</span>
            {:else if toDoList.length > 1}
                <span class="todo-count"><strong>{toDoList.length}</strong> items left</span>
            {/if}
        </footer>
    </body>
</main>
