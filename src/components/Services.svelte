<script>
	import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="services">
	<div class="mb-24 flex flex-col gap-4 bg-prim1 text-center">
		<div class="mx-auto mb-6 flex flex-col gap-y-4 text-center md:flex-row">
			<div class="mx-auto items-center justify-center rounded-lg bg-acc1 p-2 py-3">
				<h2 class="px-2 text-center text-4xl font-bold text-[#f5f5f5]">Services</h2>
			</div>
			<p class="max-h-[5rem] max-w-3xl overflow-auto text-sm text-#1e1e1e md:ml-8 md:mt-4">
				At our digital support agency, we offer a range of services to help businesses support their
				clients.
			</p>
		</div>
		<div class="place-items-center text-[#f5f5f5]">
			<div
				class="mx-auto flex max-w-[90dvw] flex-col gap-y-6 md:grid md:max-w-[70dvw] md:grid-cols-2 md:grid-rows-2 md:gap-16"
			>
				<div
					class="flex aspect-video flex-row items-center justify-center rounded-3xl bg-prim2 px-2 sm:aspect-auto md:col-start-1 md:row-start-1"
				>
					<!-- <h1>Area 1</h1> -->
					<div class="text-top p-4 text-left">
						<p class="space text-lg md:text-4xl">
							Customer satisfaction (CSAT) improvement strategies
						</p>
					</div>
					<img
						src="/assets/archer-indigo.png"
						alt="Error"
						class="headphone w-[12rem] max-w-full md:min-w-[10dvw] md:max-w-full"
					/>
				</div>
				<div
					class="flex flex-row items-center justify-center rounded-3xl bg-prim2 px-2 md:col-start-2 md:row-start-1"
				>
					<!-- <h1>Area 2</h1> -->
					<div class="text-top p-4 text-left">
						<p class="space text-xl md:text-4xl">Warm transfer and appointment setting</p>
					</div>
					<img
						src="/assets/handshake-indigo.png"
						alt="Error"
						class="w-[12rem] max-w-full md:min-w-[10dvw] md:max-w-full"
					/>
				</div>
				<div
					class="flex flex-row items-center justify-center rounded-3xl bg-prim2 px-2 md:col-start-1 md:row-start-2"
				>
					<!-- <h1>Area 3</h1> -->
					<div class="text-top p-4 text-left">
						<p class="space text-xl md:text-4xl">Secure Lines encrypted with VPNs</p>
					</div>
					<img
						src="/assets/vpn-shield-indigo.png"
						alt="Error"
						class="w-[12rem] max-w-full md:min-w-[10dvw] md:max-w-full"
					/>
				</div>
				<div
					class="flex flex-row items-center justify-center rounded-3xl bg-prim2 px-2 md:col-start-2 md:row-start-2"
				>
					<!-- <h1>Area 4</h1> -->
					<div class="text-top p-4 text-left">
						<p class="space text-xl md:text-4xl">
							Full compliance with industry standards for data encryption and security.
						</p>
					</div>
					<img
						src="/assets/lock-indigo.png"
						alt="Error"
						class="w-[12rem] max-w-full md:min-w-[10dvw] md:max-w-full"
					/>
				</div>
			</div>
		</div>
	</div>
</SectionWrapper>
