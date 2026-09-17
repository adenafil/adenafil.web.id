import { experiences } from '../data/portfolio';

export default function Experience() {
	return (
		<section className="site-container scroll-mt-16 border-t border-[var(--line)] py-20 md:scroll-mt-[72px] md:py-28" id="experience" aria-labelledby="experience-title">
			<h2 id="experience-title" className="mb-12 text-2xl font-bold tracking-[-0.035em] md:mb-14 md:text-[1.7rem]">Work Experiences</h2>

			<div className="space-y-20 md:space-y-24">
				{experiences.map((experience) => (
					<article key={experience.company}>
						<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
							<div>
								<h3 className="text-lg leading-7 font-bold tracking-[-0.025em] md:text-xl">{experience.company}</h3>
								<p className="mt-1 text-sm font-medium text-[var(--muted)]">{experience.role}</p>
							</div>
							<time className="shrink-0 pt-1 text-sm font-semibold text-[var(--ink)]">{experience.period}</time>
						</div>

						<p className="mt-3 inline-flex rounded-md bg-[var(--badge)] px-2.5 py-1 text-xs font-bold text-[var(--badge-text)]">{experience.engagement}</p>

						<div className="mt-7">
							<h4 className="mb-2 text-base font-bold md:text-lg">Responsibilities</h4>
							<ul className="max-w-5xl list-disc space-y-1 pl-5 text-sm leading-7 text-[var(--body)] marker:text-[var(--ink)] md:text-base">
								{experience.details.map((detail) => <li className="pl-1" key={detail}>{detail}</li>)}
							</ul>
						</div>

						<div className="mt-7">
							<h4 className="mb-2 text-base font-bold md:text-lg">Technologies used</h4>
							<ul className="flex list-none flex-wrap gap-1.5 p-0" aria-label={`${experience.company} technologies`}>
								{experience.technologies.map((technology) => (
									<li className="rounded-md bg-[var(--badge)] px-2.5 py-1 text-xs font-bold text-[var(--badge-text)]" key={technology}>{technology}</li>
								))}
							</ul>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
