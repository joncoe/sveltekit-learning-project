<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
</script>

{#key $page.url}
	<div in:fly={{ x: '-120%', duration: 500 }}>
		<slot />
	</div>
{/key}
