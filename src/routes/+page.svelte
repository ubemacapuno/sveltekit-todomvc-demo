<script lang="ts">
	import './styles.css';
</script>

<svelte:head>
	<title>todos</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<body>
	<section class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<input class="new-todo" placeholder="What needs to be done?" autofocus>
		</header>
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list"></ul>
		</section>
		<footer class="footer">
			<span class="todo-count"></span>
			<ul class="filters">
				<li>
					<a href="#/" class="selected">All</a>
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
	</section>
	<footer class="info">
		<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
	</footer>


	<!-- @see https://kit.svelte.dev/docs/link-options#data-sveltekit-preload-data -->
	<section class="todoapp">
		<a href="/todos">
			<h1>Svelte(Kit)</h1>
		</a>
	</section>
</body>
