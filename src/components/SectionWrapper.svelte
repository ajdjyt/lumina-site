<script>
	export let id;
</script>

<section {id} class={'z-20 flex flex-col px-4 scroll-mt-[8rem]'}>
	<div class=" mx-auto flex w-full max-w-[90dvw] flex-col">
		<slot />
	</div>
</section>
