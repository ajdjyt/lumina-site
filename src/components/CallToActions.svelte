<script lang="ts">
	export let modal:Boolean;
	function reroute(href: any) {
		modal=false;
		window.location.href = href;
	}
</script>

<div class="flex items-center gap-4">
	<button class={'accentBtn'} on:click={() => reroute('#contact')}>
		<a href="#contact">
			<p class="text-base sm:text-lg md:text-xl">Contact Us</p>
		</a>
	</button>
	<button class={'accentBtnDark'} on:click={() => reroute('#product')}>
		<a href="#product">
			<p class="text-base sm:text-lg md:text-xl">Get Started</p>
		</a>
	</button>
</div>
