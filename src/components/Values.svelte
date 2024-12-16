<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import Person from '../assets/person.svg?component';
	import Quality from '../assets/quality.svg?component';
	import Scale from '../assets/quality.svg?component';
	import Puzzle from '../assets/puzzle.svg?component';
</script>

<SectionWrapper id="values">
	<div class="flex flex-col">
		<h3 class="py-6 text-center text-4xl font-semibold text-acc1 sm:text-5xl md:text-6xl">
			Our Value Proposition
		</h3>
		<div>
			<section class="bg-prim1 py-12">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div class="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
							<div class="mb-4 rounded-full bg-blue-500 p-4 text-white">
								<Person />
							</div>
							<h3 class="text-xl font-bold text-gray-900">Experienced Leadership</h3>
							<p class="mt-2 text-gray-600">
								Decades of expertise in handling high-volume customers and working for telecom
								giants.
							</p>
						</div>

						<div class="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
							<div class="mb-4 rounded-full bg-green-500 p-4 text-white">
								<Quality />
							</div>
							<h3 class="text-xl font-bold text-gray-900">Quality Assurance</h3>
							<p class="mt-2 text-gray-600">
								Commitment to delivering superior service quality for every customer interaction.
							</p>
						</div>

						<div class="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
							<div class="mb-4 rounded-full bg-yellow-500 p-4 text-white">
								<Scale />
							</div>
							<h3 class="text-xl font-bold text-gray-900">Scalable Operations</h3>
							<p class="mt-2 text-gray-600">
								Flexibility to meet increasing demand and adapt to growth requirements quickly.
							</p>
						</div>

						<div class="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
							<div class="mb-4 rounded-full bg-purple-500 p-4 text-white">
								<Puzzle />
							</div>
							<h3 class="text-xl font-bold text-gray-900">Technology Integration</h3>
							<p class="mt-2 text-gray-600">
								Advanced systems for efficient service and detailed performance insights.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</SectionWrapper>
