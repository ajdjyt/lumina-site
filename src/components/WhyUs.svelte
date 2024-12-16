<script>
	import SectionWrapper from "./SectionWrapper.svelte";

</script>
<SectionWrapper id="whyus">
    <div class="flex flex-1">
        <section class="bg-gray-50 py-12">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Why Choose Us</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Left Side: Highlights -->
                <div>
                  <h3 class="text-2xl font-bold text-blue-600 mb-4">What Makes Us Unique</h3>
                  <ul class="space-y-4">
                    <li class="flex items-start">
                      <div class="bg-blue-500 text-white rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <p class="text-gray-700">Specialized in travel insurance customer care.</p>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-green-500 text-white rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p class="text-gray-700">Compliance with international standards.</p>
                    </li>
                    <li class="flex items-start">
                      <div class="bg-yellow-500 text-white rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16M4 6h16m-7 4v10" />
                        </svg>
                      </div>
                      <p class="text-gray-700">Scalable solutions for growing businesses.</p>
                    </li>
                  </ul>
                </div>
                
                <!-- Right Side: Visual or Additional Details -->
                <div>
                  <img
                    src="https://via.placeholder.com/600x400"
                    alt="Why Choose Us"
                    class="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>
          
    </div>
</SectionWrapper>