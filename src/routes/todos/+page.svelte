<script lang="ts">
	import '../styles.css';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ todos, incompleteTodos, completeTodos } = data);

	let filter: 'all' | 'complete' | 'incomplete' = 'all';
	let allSelected = "selected-filter"
	let activeSelected = ""
	let completedSelected = ""

	let tabSelected = (filter: string) =>{
		if(filter === "all"){
			activeSelected = ""
			completedSelected = ""
			allSelected = "selected-filter"
		}else if(filter === "complete"){ 
			allSelected = ""
			activeSelected = ""
			completedSelected = "selected-filter"
		}else if(filter === "incomplete"){
			allSelected = ""
			completedSelected = ""
			activeSelected = "selected-filter"
		}
	}
	
	$: filteredTodos = todos.filter((todo) => {
		if (filter === 'complete') {
			return todo.completed === 'True';
		}
		if (filter === 'incomplete') {
			return todo.completed === 'False';
		}
		return true;
	});
	
	const clearFormInput = async (event) => {
		event.target.reset();
	};

</script>

<main>
	<body>
		<section class="todoapp">
			<h1>SvelteKit</h1>
			<form
				method="POST"
				action="?/create"
				use:enhance
				on:submit|preventDefault={clearFormInput}
			>
				<!--TODO: Use input type checkbox for true/false-->
				<input class="new-todo" placeholder="What needs to be done?" type="text" name="content" />
				<input type="hidden" name="completed" value="False" />
			</form>

			<section class="main">
				<ul class="todo-list">
					<li>
						{#each filteredTodos as todo}
							<label class="should-be-a-div">
								{#if todo.completed === 'False'}
									<form
										method="POST"
										action="?/update"
										use:enhance
									>
										<input type="hidden" name="_id" value={todo._id} />
										<input type="hidden" name="completed" value="True" />
										<button color="secondary" type="submit">⚪</button>
									</form>
								{:else}
									<form
										method="POST"
										action="?/update"
										use:enhance
									>
										<input type="hidden" name="_id" value={todo._id} />
										<input type="hidden" name="completed" value="False" />
										<button color="secondary" type="submit">✅</button>
									</form>
								{/if}
								<form
									method="POST"
									action="?/update"
									use:enhance
								>
									<input type="hidden" name="_id" value={todo._id} />
									<input class="current-todo" type="text" name="content" value={todo.content} />
								</form>

								<!-- TODO: come up with way to use use:enhance here! -->
								<form method="POST" action="?/delete" use:enhance>
									<input type="hidden" name="_id" value={todo._id} />
									<button color="error" type="submit">🗑️</button>
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
							<button id={allSelected} on:click={() => (filter = 'all', tabSelected(filter))}>All</button>
						</li>
						<li>
							<button id={activeSelected} on:click={() => (filter = 'incomplete', tabSelected(filter))}>Active</button>
						</li>
						<li>
							<button id={completedSelected} on:click={() => (filter = 'complete', tabSelected(filter))}>Completed</button>
						</li>
					</ul>
					{#if completeTodos > 0}
						<form method="POST" action="?/deleteCompleted" use:enhance>
							<button class="clear-completed" color="error" type="submit">Clear completed</button>
						</form>
					{/if}
				</footer>
				<section class="update-all-toggle">
					{#if completeTodos !== todos.length}
						<form method="POST" action="?/updateAllToComplete" use:enhance>
							<button
							class="clear-completed"
							type="submit"
							>Mark all complete ✅✅✅</button
							>
						</form>
					{:else}
						<form method="POST" action="?/updateAllToIncomplete" use:enhance>
							<button
								class="clear-completed"
								type="submit"
								>Mark all incomplete ⚪⚪⚪</button
							>
						</form>
					{/if}
				</section>
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

	#selected-filter {
		font-weight: bold;
		color: orangered;
	}

	.update-all-toggle {
		margin-top: 1rem;
	}

</style>
