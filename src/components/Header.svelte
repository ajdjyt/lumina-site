<script lang="ts">
	let sitename = 'Lumina<span>Voice</span>';

	import { openModal } from '../store';
	import Modal from './Modal.svelte';
	let dialog:any = $state();
	// let { closeModal } = $props();
	let showModal = $state(false);
	let modal;

	import CTAs from "./CallToActions.svelte";
	
	function reroute(href: string) {
		showModal = false;
		window.location.href = href;
	}
</script>

<header class="flex flex-col fixed  top-0 left-0 z-50 w-screen  bg-prim1">
	<div class="item-center mx-auto flex w-full justify-between px-4 py-6">
		<a class="flex flex-row items-center justify-items-center" href="/">
			<div class="flex max-h-[10rem] max-w-[5rem] flex-col gap-4 md:max-w-[7rem]">
				<img class="bg-prim2 rounded-lg h-[4rem]" src="assets/logo.png" alt={'Error loading icon'} />
			</div>
		</a>
		<h1
			class="color-prim2 mx-auto flex min-h-full items-center justify-items-center text-3xl font-semibold hover:text-acc1 md:ml-[1rem] md:mr-auto"
		>
			{@html sitename}
		</h1>
		<button
			aria-label="Open"
			class="bg-prim1 grid place-items-center md:hidden"
			onclick={() => (showModal = true)}
		>
			<i class="fa-solid fa-bars"></i>
		</button>
		<nav class="hidden items-center gap-4 md:flex lg:gap-6">
			<a class="cursor-pointer duration-200 hover:text-acc1" href="#aboutus">About Us</a>
			<a class="cursor-pointer duration-200 hover:text-acc1" href="#services">Our Services</a>
			<a href="#contact">
				<button class="specialBtnDark">Contact Us</button>
			</a>
		</nav>
	</div>
</header>

<Modal bind:this={modal} bind:showModal={showModal}>
	{#snippet header()}
		<a class="flex flex-row items-center justify-items-center" href="/">
			<div class=" flex max-h-[10rem] max-w-[5rem] flex-col gap-4 md:max-w-[7rem]">
				<img class="rounded-lg bg-prim2 h-[4rem]" src="assets/logo.png" alt={'Error loading icon'} />
			</div>
		</a>
		<h1
			class="color-prim2 mx-auto flex min-h-full items-center justify-items-center text-3xl font-semibold hover:text-acc1 md:ml-[1rem] md:mr-auto"
		>
			{@html sitename}
		</h1>
	{/snippet}
	<button
		onclick={() => reroute("#services")}
		class="group cursor-pointer border-none p-2 text-left outline-none duration-200"
	>
		<p class="duration-200 group-hover:pl-2">Our Services</p>
	</button>
	<!-- <button
		onclick={() => reroute('#faqs')}
		class="group cursor-pointer border-none p-2 text-left outline-none duration-200"
	>
		<p class="duration-200 group-hover:pl-2">FAQs</p>
	</button> -->
	<button
		onclick={() => reroute('#aboutus')}
		class="group cursor-pointer border-none p-2 text-left outline-none duration-200"
	>
		<p class="duration-200 group-hover:pl-2">About Us</p>
	</button>
	<!-- <button
		onclick={() => reroute('#contact')}
		class="group cursor-pointer border-none p-2 text-left outline-none duration-200"
	>
		<p class="duration-200 group-hover:pl-2">Contact Us</p>
	</button> -->
	<div class="flex flex-col items-center justify-center">
		<CTAs bind:modal={showModal}/>
	</div>
</Modal>
