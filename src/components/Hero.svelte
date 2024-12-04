<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import CTAs from './CallToActions.svelte';
	let modal = false;
</script>

<div
	class="z-20 md:mx-12 mt-[10rem] grid min-h-[80dvh] min-w-[90dvw] grid-cols-1 grid-rows-3 gap-2 bg-prim1 md:grid-cols-[1fr_2fr] md:grid-rows-[2fr_1fr] mb-12"
>
	<!-- Area 1 -->
	<div class="flex justify-center items-center row-start-1 rounded-lg bg-prim1 p-4 md:row-span-1">
		<!-- <h2 class="text-xl font-bold">Area 1</h2> -->
		<h2
			class="space mx-auto text-center text-5xl font-semibold md:text-left md:text-7xl lg:text-8xl"
		>
			Your next <span>Support Solutions</span> Provider
		</h2>
	</div>

	<!-- Area 2 -->
	<div class="flex flex-col justify-center items-center row-start-3 rounded-lg bg-prim1 p-4 md:col-start-1 md:row-span-1 gap-4">
		<!-- <h2 class="text-xl font-bold">Area 2</h2> -->
		 <p class="text-justify">
			Our call support agency provides exceptional customer service solutions to businesses of all sizes. Through our expert team and state-of-the-art technology, we offer a range of services including inbound and outbound call handling, email and chat support, and helpdesk services.
		</p>
		<CTAs bind:modal />
	</div>

	<!-- Area 3 -->
	<div
		class="flex justify-center items-center row-start-2 rounded-lg bg-prim1 p-4 md:col-start-2 md:row-span-2 md:row-start-1"
	>
		<!-- <h2 class="text-xl font-bold">Area 3</h2> -->
		<img
			src="/assets/hp.png"
			alt="Error"
			class="headphone w-[12rem] max-w-full md:min-w-[40dvw] md:max-w-full"
		/>
	</div>
</div>
