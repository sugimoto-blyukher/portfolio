<script lang="ts">
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
	import { projects } from '$lib/data/projects.js';
</script>

<SiteShell>
	<main class="bg-amber-400 min-h-screen flex flex-col">
		<section class="container mx-auto px-4 py-8">
			<h1 class="text-4xl font-bold mb-8">Projects</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each projects as { title, description, url, tags } (url)}
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						class="block rounded-lg bg-cyan-100 p-6 shadow transition-shadow duration-300 hover:shadow-lg"
					>
						<h2 class="text-xl font-semibold mb-2">{title}</h2>
						<p class="text-gray-700">{description}</p>
						<div class="flex flex-wrap gap-2 mt-4">
							{#each tags as tag (tag)}
								<span class="rounded bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
									{tag}
								</span>
							{/each}
						</div>
					</a>
				{/each}
			</div>
		</section>
	</main>
</SiteShell>
