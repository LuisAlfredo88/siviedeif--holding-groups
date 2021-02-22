<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
</script>

<Header />
<slot></slot>
<Footer />

<svelte:head>
	<style lang="scss"> 	
		@import '../../../assets/css/landing/style.scss'; 
	</style>
</svelte:head>
