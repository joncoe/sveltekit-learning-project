<script>
	import { onMount } from 'svelte';
  import {page} from '$app/stores'
  let todo = null;
  onMount(async () => {
    todo = "Is there something to do?"
  })
</script>

<h1 class="text-3xl font-bold underline">
  Hi Jonathan 😎
</h1>

<p>{JSON.stringify($page)}</p>
<h2>Todos</h2>
<p>{todo}</p>
