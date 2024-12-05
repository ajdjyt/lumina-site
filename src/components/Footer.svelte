<script>
	// import MailUs from './MailUs.svelte';
	let socials = {
		X: '',
		YT: '',
		Instagram: '',
		Facebook: ''
	};

	// let contacts = [
	// 	{
	// 		phone: '+91 9889009003',
	// 		name: 'Francisco Fernandes',
	// 		email: 'francisco@luminavoice.com'
	// 	}
	// ];
</script>

<footer>
	<div
		class="mx-auto flex w-full flex-col items-start justify-start gap-4 bg-prim1 px-10 pt-2 pb-16 text-base sm:grid-cols-2 md:flex-row md:justify-between md:px-5 md:py-10"
	>
		<div class="flex flex-col items-start md:col-span-2 md:items-start">
			<h1 class="align-middle font-semibold">
				<img class="max-w-[5rem] md:max-w-[7rem]" src="assets/logo.png" alt="" />
			</h1>
			<p class="text-xs md:text-xl">©2024 Lumina Voice.</p>
		</div>
		<div
			id="contact"
			class="flex flex-col items-start justify-center gap-4 md:items-start md:justify-normal"
		>
			<p class="text-base font-bold sm:text-lg">Contact Us</p>
			<p>Vashi South</p>
			<div class="flex flex-col">
				<div>
					<i class="fa-regular fa-envelope"></i>
					info@luminavoice.com
				</div>
				<div>
					<i class="fa-brands fa-skype"></i>
					live:.cid.7d28ad9520074ab7
				</div>
			</div>
			<!-- {#each contacts as contact}
				<div class="flex flex-col">
					<div>
						<i class="fa-solid fa-person"></i>
						{contact.name}
					</div>
					<div>
						<i class="fa-solid fa-phone"></i>
						{contact.phone}
					</div>
					<div>
						<i class="fa-regular fa-envelope"></i>
						{contact.email}
					</div>
				</div>
			{/each} -->
		</div>
		<!-- <div class="flex flex-col gap-4">
			<p class="text-base font-bold sm:text-lg">Submit a Query</p>
		</div> -->
		<div class="flex flex-col gap-4">
			<p class="text-base font-bold sm:text-lg">Follow Us</p>
			<a
				href={socials.Instagram}
				target="_blank"
				class="cursor-pointer duration-200 hover:text-indigo-400"
			>
				<i class="fa-brands fa-instagram pr-2"></i>
				Instagram
			</a>
			<a
				href={socials.YT}
				target="_blank"
				class="cursor-pointer duration-200 hover:text-indigo-400"
			>
				<i class="fa-brands fa-youtube pr-2"></i>
				YouTube
			</a>
			<a
				href={socials.Facebook}
				target="_blank"
				class="cursor-pointer duration-200 hover:text-indigo-400"
			>
				<i class="fa-brands fa-facebook pr-2"></i>
				Facebook
			</a>
			<a href={socials.X} target="_blank" class="cursor-pointer duration-200 hover:text-indigo-400">
				<i class="fa-brands fa-twitter pr-2"></i>
				X
			</a>
		</div>
	</div>
</footer>
