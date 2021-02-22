<script lang="ts">
	import Landing from '../components/layouts/landing/Index.svelte';
	import Admin from '../components/layouts/admin/Index.svelte';
	export let segment: string;
</script>

<main>
	{#if segment == 'admin'}
		<Admin>
			<slot></slot>
		</Admin>
	{:else}
		<Landing>
			<slot></slot>
		</Landing>
	{/if}
</main>
