<script lang="ts">
	let { showModal = $bindable(), header, children } = $props();
	let dialog: any = $state(); // HTMLDialogElement
	$effect(() => {
		(showModal) ? (dialog.showModal()): (dialog.close());
	});
	export function closeModal() {
		showModal = false;
		dialog?.close();
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={closeModal}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
>
	<div
		class=" fixed left-0 top-0 z-50 flex h-screen w-screen flex-col gap-8 border-b bg-prim1 p-5 px-8 md:hidden"
	>
		<div class="flex items-center justify-between gap-4 border-b pb-2">
			{@render header?.()}
			<button aria-label="Close" onclick={() => dialog.close()} class="border-none outline-none">
				<i class="fa-solid fa-xmark text-2xl"> </i>
			</button>
		</div>

		<div class="flex flex-1 flex-col gap-4">
			{@render children?.({ closeModal })}
		</div>
	</div>
</dialog>
