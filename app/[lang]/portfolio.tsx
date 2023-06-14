import Image from 'next/image';
import Title from '@/components/title';
import {
	client,
	PortfolioEntrySkeleton,
	ProjectEntrySkeleton
} from '@/lib/client';
import { ILang } from '@/types';

export default async function Portfolio({ lang }: ILang) {
	const portfolio = await client.getEntries<PortfolioEntrySkeleton>({
		content_type: 'portfolio'
	});
	const { title } = portfolio.items[0].fields;

	const projects = await client.getEntries<ProjectEntrySkeleton>({
		content_type: 'project'
	});

	return (
		<section
			id="portfolio"
			className="min-h-screen grid place-items-center place-content-center gap-20"
		>
			<Title>{title[lang]}</Title>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.items.map(project => (
					<div
						key={project.sys.id}
						className="flex flex-col gap-4 p-5 rounded-lg bg-neutral-900/80"
					>
						<p className="font-semibold text-lg text-primary">
							{project.fields.name[lang]}
						</p>

						<div className="relative group">
							<Image
								src={project.fields.imageUrl[lang]!}
								alt={project.fields.name[lang]!}
								width={385}
								height={215}
								className="rounded-lg"
							/>

							<a
								href={project.fields.demoUrl[lang]}
								target="_blank"
								className="absolute top-0 left-0 hidden group-hover:grid place-items-center w-full h-full p-4 rounded-lg text-center hover:bg-neutral-900/80 duration-150"
							>
								<p>{project.fields.description[lang]}</p>
							</a>
						</div>

						<ul className="flex flex-wrap gap-2">
							{/* @ts-ignore - TS expects stronger typing with respect to collection types */}
							{project.fields.tools[lang].map(tool => (
								<li
									key={tool}
									className="font-light text-xs border border-white rounded-md px-2 py-1"
								>
									{tool}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
