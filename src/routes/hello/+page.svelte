<script>
	import { onMount } from 'svelte';
  import {page} from '$app/stores'
  let todo = null;
  onMount(async () => {

  })
</script>

<h1>
  Hi Jonathan 😎
</h1>

<p>{JSON.stringify($page)}</p>
