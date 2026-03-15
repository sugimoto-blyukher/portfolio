<script lang="ts">
	import { gsap } from 'gsap';

	const links = [
		{ href: '/', label: 'About me' },
		{ href: '/timeline', label: 'タイムライン' },
		{ href: '/goal.html', label: '目標' },
		{ href: '/projects', label: 'プロジェクト集' },
		{ href: '/links', label: '関連リンク集' }
	];

	let menu: HTMLElement;
	let overlay: HTMLElement;

	const duration = 0.5;
	const ease = 'power3.inOut';

	function openMenu() {
		gsap.to(menu, { x: 0, duration, ease });
		gsap.to(overlay, { opacity: 1, pointerEvents: 'auto', duration });
	}

	function closeMenu() {
		gsap.to(menu, { x: '100%', duration, ease });
		gsap.to(overlay, { opacity: 0, pointerEvents: 'none', duration });
	}
</script>

<!-- Overlay for menu -->
<button
	type="button"
	bind:this={overlay}
	class="fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 z-40"
	onclick={closeMenu}
	aria-label="メニューを閉じる"
></button>

<!-- Slide Menu -->
<nav
	bind:this={menu}
	class="fixed top-0 right-0 w-64 h-full bg-cyan-900 text-white z-50 transform translate-x-full shadow-2xl dotgothic16-regular"
>
	<div class="p-6 flex flex-col h-full">
		<div class="flex justify-end mb-8">
			<button
				type="button"
				class="text-white hover:text-amber-400 transition-colors"
				onclick={closeMenu}
				aria-label="メニューを閉じる"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
		<ul class="space-y-6 text-2xl text-center">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						class="hover:text-amber-400 block py-2 border-b border-cyan-700"
						onclick={closeMenu}>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<header class="bg-cyan-800 p-4 relative flex items-center justify-center">
	<div class="text-center w-full">
		<h1 class="text-5xl md:text-8xl dotgothic16-regular text-white">Sugimotoのポートフォリオ</h1>
	</div>
	<!-- Hamburger Button -->
	<button
		type="button"
		class="absolute right-4 text-white hover:text-amber-400 transition-colors z-30 p-2"
		onclick={openMenu}
		aria-label="メニューを開く"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-10 w-10 md:h-12 md:w-12"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>
</header>
