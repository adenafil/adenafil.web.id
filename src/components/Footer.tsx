import { profile } from '../data/portfolio';

export default function Footer() {
	return (
		<footer className="site-container flex flex-col items-start justify-between gap-12 border-t border-[var(--line)] py-16 md:flex-row md:items-end md:py-20">
			<div>
				<p className="mb-2 text-sm text-[var(--muted)]">Have a project or opportunity in mind?</p>
				<a className="text-lg font-semibold tracking-[-0.035em] transition-colors hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:text-2xl" href={`mailto:${profile.email}`}>{profile.email}</a>
			</div>
			<div className="md:text-right">
				<div className="mb-3 flex gap-6 md:justify-end">
					<a className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--ink)]" href="https://github.com/adenafil" target="_blank" rel="noreferrer">GitHub</a>
					<a className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--ink)]" href="https://linkedin.com/in/adenafilf" target="_blank" rel="noreferrer">LinkedIn</a>
					<a className="text-sm font-semibold text-[var(--muted)] hover:text-[var(--ink)]" href="/assets/firmansah.pdf" target="_blank" rel="noreferrer">CV</a>
				</div>
				<p className="text-xs text-[var(--faint)]">© {new Date().getFullYear()} {profile.name}. Built with Astro.</p>
			</div>
		</footer>
	);
}
