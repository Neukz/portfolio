import Image from 'next/image';
import Title from '@/components/title';
import { client, AboutEntrySkeleton } from '@/lib/client';
import { ILang } from '@/types';

export default async function About({ lang }: ILang) {
	const data = await client.getEntries<AboutEntrySkeleton>({
		content_type: 'about'
	});
	const about = data.items[0].fields;

	return (
		<section
			id="about"
			className="h-screen grid place-items-center place-content-center gap-20"
		>
			<Title>{about.title[lang]}</Title>

			<div className="relative flex max-sm:flex-col justify-center items-center gap-10">
				<Image
					src={about.photoUrl[lang]!}
					alt="Picture of the author"
					width={240}
					height={240}
					unoptimized
					className="z-10 w-60"
				/>
				{/* Offset border */}
				<div className="absolute top-2 left-2 max-sm:hidden border-2 border-primary w-60 h-60" />

				<p className="text-center sm:text-left">{about.description[lang]}</p>
			</div>
		</section>
	);
}
