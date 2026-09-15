import { projects } from '../data/portfolio';

export default function Projects() {
	return (
		<section className="mx-auto w-[calc(100%-2rem)] max-w-6xl scroll-mt-16 border-t border-[var(--line)] py-20 md:w-[calc(100%-3rem)] md:scroll-mt-[72px] md:py-28" id="work" aria-labelledby="work-title">
			<div className="mb-12 max-w-2xl md:mb-16">
				<h2 id="work-title" className="mb-3 text-3xl font-semibold tracking-[-0.045em] md:text-4xl">Selected work</h2>
				<p className="text-[var(--muted)]">Products built around real operational needs, from scheduling optimization to commerce.</p>
			</div>

			<div className="border-t border-[var(--line)]">
				{projects.map((project, index) => (
					<article className="grid grid-cols-1 gap-4 border-b border-[var(--line)] py-10 md:grid-cols-[140px_1fr] md:gap-12 md:py-14" key={project.name}>
						<p className="pt-1 text-xs font-bold tracking-[0.12em] text-[var(--faint)]" aria-hidden="true">0{index + 1}</p>
						<div>
							<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
								<div>
									<h3 className="text-lg leading-7 font-bold tracking-[-0.025em]">{project.name}</h3>
									<p className="text-sm text-[var(--muted)]">{project.type}</p>
								</div>
								<time className="shrink-0 pt-1 text-xs font-semibold text-[var(--muted)]">{project.year}</time>
							</div>
							<p className="mt-6 max-w-3xl text-[var(--muted)]">{project.description}</p>
							<ul className="mt-5 max-w-3xl list-disc space-y-1 pl-5 text-[var(--muted)] marker:text-[var(--accent)]">
								{project.highlights.map((highlight) => <li className="pl-1" key={highlight}>{highlight}</li>)}
							</ul>
							<ul className="mt-7 flex list-none flex-wrap gap-2 p-0" aria-label={`${project.name} technologies`}>
								{project.technologies.map((technology) => (
									<li className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs font-semibold text-[var(--muted)]" key={technology}>{technology}</li>
								))}
							</ul>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
