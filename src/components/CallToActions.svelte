<script lang="ts">
	export let modal:Boolean;
	function reroute(href: any) {
		modal=false;
		window.location.href = href;
	}
</script>

<div class="flex items-center gap-4">
	<button class={'accentBtnDark min-w-[70dvw] md:min-w-[30dvw]'} on:click={() => reroute('#contact')}>
		<a href="#contact">
			<p class="text-base sm:text-lg md:text-xl">Contact Us</p>
		</a>
	</button>
	<!-- <button class={'accentBtnDark'} on:click={() => reroute('#aboutus')}>
		<a href="#about us">
			<p class="text-base sm:text-lg md:text-xl">About Us</p>
		</a>
	</button> -->
</div>
