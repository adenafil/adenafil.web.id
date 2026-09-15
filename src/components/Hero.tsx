import { profile } from '../data/portfolio';

export default function Hero() {
	return (
		<section
			className="mx-auto grid min-h-[min(660px,calc(100dvh-4.5rem))] w-[calc(100%-2rem)] max-w-6xl grid-cols-1 items-center gap-12 py-16 md:w-[calc(100%-3rem)] md:grid-cols-[220px_1fr] md:gap-20 md:py-24 lg:gap-32"
			aria-labelledby="hero-title"
		>
			<div className="flex flex-col items-start gap-5">
				<img
					className="size-32 rounded-full border border-[var(--line)] object-cover md:size-44"
					src="/profile.jpg"
					alt={`Portrait of ${profile.name}`}
					width="176"
					height="176"
					fetchPriority="high"
				/>
				<span className="flex items-center gap-2 text-xs font-semibold text-[var(--muted)]">
					<i className="size-[7px] rounded-full bg-[var(--accent)]" aria-hidden="true" />
					Based in {profile.location}
				</span>
			</div>

			<div className="max-w-3xl">
				<p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">{profile.role}</p>
				<h1 id="hero-title" className="mb-5 text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.06em] md:text-6xl">
					Hi, I'm {profile.name}.
				</h1>
				<p className="mb-7 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">{profile.intro}</p>
				<div className="flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Profile links">
					{profile.links.map((link) => {
						const opensNewTab = link.href.startsWith('http') || link.label === 'CV';
						return (
							<a
								className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
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
