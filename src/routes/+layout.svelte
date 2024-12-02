<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	let y = $state(0);
	let outerHeight = $state(0);
	if (typeof window !== 'undefined') {
		$effect(() => {
			outerHeight = window.outerHeight;
		});
		window.addEventListener('resize', () => {
			outerHeight = window.outerHeight;
		});
	}
</script>

<svelte:window bind:scrollY={y} bind:outerHeight />

<Header />
{@render children()}
<Footer />
