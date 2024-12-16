<script lang="ts">
	import SectionWrapper from './SectionWrapper.svelte';
	import Diverse from '../assets/diverse.svg?component';
	import ChartGraph from '../assets/chart-graph.svg?component';
	import Cap from '../assets/cap.svg?component';
	import Globe from '../assets/globe.svg?component';
	import Person from '../assets/person.svg?component';

	let success = false;
	let error = false;
	let msg = '';

	const maxSize = 8 * 1024 * 1024; // 8MB size limit
	const allowedTypes = ['application/pdf'];

	const handleFileChange = (event: Event) => {
		const input = event.target as HTMLInputElement;
		const selectedFile = input?.files?.[0];

		if (selectedFile) {
			if (!allowedTypes.includes(selectedFile.type)) {
				msg = 'Invalid file type. Only PDF files are allowed.';
			} else if (selectedFile.size > maxSize) {
				msg = 'File is too large. Maximum size is 8MB.';
			} else {
				msg = '';
			}
		}
	};

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		if (msg) {
			msg = 'Please fill in the form as per the requirements.';
			return;
		}

		const name = document.getElementById('userName') as HTMLInputElement | null;
		const email = document.getElementById('userEmail') as HTMLInputElement | null;
		const team = document.getElementById('userTeam') as HTMLSelectElement | null;
		const resume = document.getElementById('userResume') as HTMLInputElement | null;

		if (!name || !email || !team || !resume) {
			msg = 'Please fill the entire form.';
			return;
		}

		if (!name.value || !email.value || !team.value || !resume.files?.length) {
			msg = 'Please fill the entire form.';
			return;
		}

		msg = '';

		const formData = new FormData(event.target as HTMLFormElement);
		try {
			const response = await fetch('/api', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				msg = 'Mail sent successfully!';
			} else {
				msg =
					'Error sending mail. Please contact us via the methods mentioned in the contact sections';
			}
		} catch (err) {
			msg =
				'Error sending mail. Please contact us via the methods mentioned in the contact sections';
		}
	};
</script>

<SectionWrapper id="careers">
	<div class="flex flex-1 flex-col">
		<section class="bg-prim1 py-12">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<h3 class="py-6 text-center text-4xl font-semibold text-acc1 sm:text-5xl md:text-6xl">
					Join Our Team
				</h3>
				<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<div>
						<h3 class="mb-4 text-2xl font-bold text-indigo-400">Why Work With Us?</h3>
						<ul class="space-y-4">
							<li class="flex items-start">
								<div class="mr-4 rounded-full bg-purple-500 p-2 text-white">
									<Person />
								</div>
								<p class="text-gray-700">Work with experienced leaders.</p>
							</li>
							<li class="flex items-start">
								<div class="mr-4 rounded-full bg-green-500 p-2 text-white">
									<ChartGraph />
								</div>
								<p class="text-gray-700">Opportunities to grow in the BPO industry.</p>
							</li>
							<li class="flex items-start">
								<div class="mr-4 rounded-full bg-yellow-500 p-2 text-white">
									<Cap />
								</div>
								<p class="text-gray-700">Training and skill development programs.</p>
							</li>
							<li class="flex items-start">
								<div class="mr-4 rounded-full bg-red-500 p-2 text-white">
									<Globe />
								</div>
								<p class="text-gray-700">Opportunity to work with clients from overseas.</p>
							</li>
							<li class="flex items-start">
								<div class="mr-4 rounded-full bg-blue-500 p-2">
									<Diverse class="fill-white" />
								</div>
								<p class="text-gray-700">
									Work alongside a team of professionals who foster a positive and supportive
									culture.
								</p>
							</li>
						</ul>
					</div>

					<div>
						<h3 class="mb-4 text-2xl font-bold text-indigo-400">Open Positions</h3>
						<p class="mb-4 text-gray-700">
							We are looking for talented individuals to join our dynamic team.
						</p>
						<form
							on:submit={handleSubmit}
							method="post"
							class="space-y-4 rounded-lg bg-gray-50 p-6 shadow-md"
						>
							<div>
								<label for="name" class="block text-gray-600">Full Name</label>
								<input
									required
									type="name"
									id="userName"
									name="userName"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label for="email" class="block text-gray-600">Email Address</label>
								<input
									required
									type="email"
									id="userEmail"
									name="userEmail"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label for="position" class="block text-gray-600">Team</label>
								<select
									required
									id="userTeam"
									name="userTeam"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
								>
									<option>Customer Service Specialist</option>
									<option>Team Leaders</option>
									<option>Human Resources</option>
									<option>Finance</option>
									<option>Operations Head</option>
									<option>IT</option>
								</select>
							</div>
							<div>
								<label for="resume" class="block text-gray-600">Upload Resume (PDF Only)</label>
								<input
									required
									type="file"
									accept=".pdf,.docx"
									on:change={handleFileChange}
									id="userResume"
									name="userResume"
									class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
								/>
							</div>
							<button
								type="submit"
								class="w-full rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
							>
								Apply Now
							</button>
							<div>
								{#if msg}
									<p>{msg}</p>
								{/if}
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</SectionWrapper>
