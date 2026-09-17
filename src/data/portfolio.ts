export const profile = {
	name: 'Ade Nafil Firmansah',
	shortName: 'adenafil.',
	role: 'Full-Stack Developer',
	location: 'Gresik, Indonesia',
	email: 'adenafilfirmansah@gmail.com',
	intro:
		'Full-stack developer building reliable web applications, backend services, and practical tools for real operational problems.',
	links: [
		{ label: 'Email', href: 'mailto:adenafilfirmansah@gmail.com' },
		{ label: 'GitHub', href: 'https://github.com/adenafil' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/adenafilf' },
		{ label: 'CV', href: '/assets/firmansah.pdf' },
	],
};

export const about = {
	intro:
		"I'm a full-stack developer based in Gresik, Indonesia. I build reliable web applications, backend services, and practical tools for real operational problems.",
	detail:
		'My work spans TypeScript and React applications, Laravel and NestJS services, databases, background processing, testing, and deployment. I enjoy turning complex requirements into software that is clear, maintainable, and useful.',
};

export const education = [
	{
		institution: 'Universitas Internasional Semen Indonesia',
		degree: "Bachelor's Degree in Informatics",
		period: '2022 - 2026',
		gpa: 'GPA 3.72',
	},
];

export const experiences = [
	{
		company: 'Universitas Internasional Semen Indonesia / PT Semen Indonesia',
		role: 'Junior Full-Stack Developer',
		engagement: 'Volunteer Project',
		period: 'Dec 2025 - Aug 2026',
		details: [
			'Developed SIJAKU as a TypeScript monorepo combining a TanStack Start frontend, NestJS API, Prisma, MySQL, and a Bun optimization worker.',
			'Implemented Redis-backed jobs with real-time progress and scheduling constraints for lecturers, rooms, capacities, and study programs.',
			'Delivered import/export, PDF generation, authentication, Docker Compose deployment, and broad automated test coverage.',
		],
		technologies: ['TypeScript', 'TanStack Start', 'NestJS', 'Prisma', 'MySQL', 'Bun', 'Redis', 'BullMQ', 'WebSocket', 'Docker'],
	},
	{
		company: 'PT Petrokopindo Cipta Selaras',
		role: 'Full-Stack Developer',
		engagement: 'Internship',
		period: 'Sep 2025 - Dec 2025',
		details: [
			'Developed an internal asset inventory platform to manage assets, models, types, locations, employees, and organizational units.',
			'Implemented asset assignment and return workflows, document uploads, and QR-based public asset details.',
			'Built role-based access control, activity logging, and searchable management interfaces.',
		],
		technologies: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'MySQL'],
	},
	{
		company: 'SIDNOV Indonesia',
		role: 'Junior Full-Stack Developer',
		engagement: 'Volunteer Project',
		period: 'Feb 2025 - Jul 2025',
		details: [
			'Built a full-stack e-commerce platform for a local UMKM covering products, carts, wishlists, checkout, orders, reviews, and customer accounts.',
			'Integrated Google OAuth, Tripay QRIS payments, shipping workflows, cashback vouchers, and email broadcasts.',
			'Developed an administration workspace for products, content, coupons, orders, and campaigns.',
		],
		technologies: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'MySQL', 'Google OAuth', 'Tripay QRIS'],
	},
];
