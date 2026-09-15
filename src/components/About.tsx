import { certifications, education, profile, skillGroups } from '../data/portfolio';

export default function About() {
	return (
		<section className="mx-auto w-[calc(100%-2rem)] max-w-6xl scroll-mt-16 border-t border-[var(--line)] py-20 md:w-[calc(100%-3rem)] md:scroll-mt-[72px] md:py-28" id="about" aria-labelledby="about-title">
			<div className="mb-14 max-w-3xl">
				<h2 id="about-title" className="mb-4 text-3xl font-semibold tracking-[-0.045em] md:text-4xl">About & capabilities</h2>
				<p className="leading-7 text-[var(--muted)]">{profile.about}</p>
			</div>

			<div className="grid grid-cols-1 gap-16 md:grid-cols-[1.35fr_0.8fr] md:gap-20 lg:gap-28">
				<div>
					<h3 className="mb-6 text-lg font-bold tracking-[-0.025em]">Technical toolkit</h3>
					<dl>
						{skillGroups.map((group) => (
							<div className="grid grid-cols-1 gap-1 border-t border-[var(--line)] py-4 sm:grid-cols-[140px_1fr] sm:gap-6" key={group.name}>
								<dt className="text-sm font-bold">{group.name}</dt>
								<dd className="m-0 text-sm text-[var(--muted)]">{group.items.join(' · ')}</dd>
							</div>
						))}
					</dl>
				</div>

				<div className="space-y-14">
					<div>
						<h3 className="mb-6 text-lg font-bold tracking-[-0.025em]">Education</h3>
						<p className="mb-1 font-bold leading-6">{education.institution}</p>
						<p className="mb-1 text-sm text-[var(--muted)]">{education.degree}</p>
						<p className="text-sm text-[var(--faint)]">{education.period} · {education.gpa}</p>
					</div>
					<div>
						<h3 className="mb-6 text-lg font-bold tracking-[-0.025em]">Certifications</h3>
						<div className="space-y-6">
							{certifications.map((certification) => (
								<div key={certification.name}>
									<p className="mb-1 font-bold leading-6">{certification.name}</p>
									<p className="mb-1 text-sm text-[var(--muted)]">{certification.issuer}</p>
									<p className="text-sm text-[var(--faint)]">{certification.date}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
