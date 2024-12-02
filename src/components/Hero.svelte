<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import CTAs from './CallToActions.svelte';
	let modal = false;
</script>

<SectionWrapper id={'hero'}>
	<div
		class="flex min-h-screen flex-1 flex-col items-center justify-center gap-10 pb-10 md:pb-14"
	>
		<h2
			class="mx-auto w-full max-w-[70rem] text-center text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl"
		>
			Your next <span>Support Solutions</span> Provider
		</h2>
		<CTAs bind:modal={modal}/>
	</div>
</SectionWrapper>
