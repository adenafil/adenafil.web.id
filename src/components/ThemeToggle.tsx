export default function ThemeToggle() {
	function toggleTheme() {
		const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = nextTheme;
		localStorage.setItem('theme', nextTheme);
	}

	return (
		<button
			className="grid size-8 cursor-pointer place-items-center border-0 bg-transparent text-[var(--ink)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--canvas)]"
			type="button"
			onClick={toggleTheme}
			aria-label="Switch color theme"
			title="Switch color theme"
		>
			<span
				className="block size-[18px] rounded-full border-2 border-current bg-[linear-gradient(90deg,currentColor_50%,transparent_50%)]"
				aria-hidden="true"
			/>
		</button>
	);
}
