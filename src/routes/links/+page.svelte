<script>
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
  import { links } from '$lib/data/links.ts';
</script>

<SiteShell>
	<main class="bg-amber-400">
		<section class="container mx-auto px-4 py-8">
			<h1 class="text-4xl font-bold mb-8">Links</h1>
			<div class="border-l-2 border-gray-300 pl-4">
				{#each links as { title, url, description }}
					<div class="mb-6">
						<div class="flex items-center mb-2">
							<div class="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
							<h2 class="text-xl font-semibold">{title}</h2>
						</div>
						<p class="ml-8 text-gray-700">{description}</p>
						<a href="{url}" target="_blank" rel="noopener noreferrer" class="ml-8 text-blue-500 hover:underline">Visit</a>
					</div>
				{/each}
			</div>
		</section>
	</main>
</SiteShell>
