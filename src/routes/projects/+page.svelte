<script lang="ts">
	import SiteShell from '$lib/components/layout/SiteShell.svelte';
  import { projects } from '$lib/data/projects.ts';

</script>

<SiteShell>
  <main class="bg-amber-400 min-h-screen flex flex-col">
    <section class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each projects as { title, description, url, tags }}
          <a href="{url}" target="_blank" rel="noopener noreferrer" class="block p-6 bg-cyan-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <h2 class="text-xl font-semibold mb-2">{title}</h2>
            <p class="text-gray-700">{description}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              {#each tags as tag}
                <span class="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">{tag}</span>
              {/each}
            </div>
          </a>
        {/each}
      </div>
    </section>
  </main>
</SiteShell>

