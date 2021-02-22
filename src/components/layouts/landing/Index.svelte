<script>
    import Header from './Header.svelte';
    import Footer from './Footer.svelte';
</script>

<Header />
<slot></slot>
<Footer />

<style lang="scss" global>
	@import '../../../assets/css/landing/style.scss'; 
</style>
