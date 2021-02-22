<script lang="ts">
	import Landing from '../components/layouts/landing/Index.svelte';
	//export let segment: string;
</script>

<main>
	<Landing>
		<slot></slot>
	</Landing>
</main>