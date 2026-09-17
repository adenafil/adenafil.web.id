import { profile } from '../data/portfolio';

export default function Hero() {
	return (
		<section
			className="site-container grid grid-cols-1 items-center justify-items-center gap-9 py-14 sm:py-16 md:grid-cols-[160px_minmax(0,1fr)] md:justify-items-stretch md:gap-14 md:py-20 lg:grid-cols-[176px_minmax(0,1fr)] lg:gap-20"
			aria-labelledby="hero-title"
		>
			<div className="flex justify-center md:justify-start">
				<img
					className="size-32 rounded-full border border-[var(--line)] object-cover sm:size-36 md:size-40 lg:size-44"
					src="/profile.jpg"
					alt={`Portrait of ${profile.name}`}
					width="176"
					height="176"
					fetchPriority="high"
				/>
			</div>

			<div className="max-w-2xl text-center">
				<p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">{profile.role}</p>
				<h1 id="hero-title" className="mb-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] sm:text-[2.25rem] md:text-[2.5rem]">
					Hi, I'm {profile.name}.
				</h1>
				<p className="mx-auto mb-5 max-w-[65ch] text-[0.9375rem] leading-7 text-[var(--muted)] sm:text-base">{profile.intro}</p>
				<div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Profile links">
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
