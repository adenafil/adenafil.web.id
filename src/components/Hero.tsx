import { profile } from '../data/portfolio';

export default function Hero() {
	return (
		<section
			className="site-container grid grid-cols-1 items-center gap-8 py-12 sm:py-14 md:grid-cols-[144px_minmax(0,1fr)] md:gap-12 md:py-16 lg:grid-cols-[176px_minmax(0,1fr)] lg:gap-16"
			aria-labelledby="hero-title"
		>
			<div className="flex justify-center md:justify-start">
				<img
					className="size-28 rounded-full border border-[var(--line)] object-cover sm:size-32 md:size-36 lg:size-40"
					src="/profile.jpg"
					alt={`Portrait of ${profile.name}`}
					width="176"
					height="176"
					fetchPriority="high"
				/>
			</div>

			<div className="min-w-0 max-w-3xl text-center md:justify-self-end md:text-right">
				<h1 id="hero-title" className="mb-2 text-[1.75rem] leading-[1.2] font-semibold tracking-[-0.035em] sm:text-[2rem] md:text-[2.25rem]">
					Hi, I'm {profile.name}.
				</h1>
				<p className="mx-auto mb-4 max-w-[65ch] text-[0.9375rem] leading-7 text-[var(--muted)] sm:text-base md:ml-auto md:mr-0">{profile.intro}</p>
				<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end" aria-label="Profile links">
					{profile.links.map((link) => {
						const opensNewTab = link.href.startsWith('http') || link.label === 'CV';
						return (
							<a
								key={link.href}
								className="text-sm font-semibold text-[var(--muted)] underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:decoration-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
								href={link.href}
								target={opensNewTab ? '_blank' : undefined}
								rel={opensNewTab ? 'noreferrer' : undefined}
							>
								{link.label}<span aria-hidden="true"> ↗</span>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
