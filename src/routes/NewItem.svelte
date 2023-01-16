<script>
	import './styles.css';
    import { todo } from '$lib/stores/stores'

    let countValue;

    todo.subscribe(value => {
        countValue = value
    })
    


</script>
<section class="todoapp">
    <header class="header">
        <h1>{countValue}</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
</section>

<style></style>