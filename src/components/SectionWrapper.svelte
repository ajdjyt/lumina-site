<script>
	export let id;
</script>

<section {id} class={'z-20 flex flex-col px-4'}>
	<div class="mx-auto flex w-full max-w-[100rem] flex-col">
		<slot />
	</div>
</section>
