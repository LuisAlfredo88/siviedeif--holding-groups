<template>
    <header-section />
    <router-view />
    <footerSection />
</template>

<script>
    import '../assets/css/style.scss';
    import Header from '@/components/layout/landing/Header.vue';
    import Footer from '@/components/layout/landing/Footer.vue';

    export default {
        components: {
            headerSection: Header,
            footerSection: Footer,
        }
    }
</script>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>