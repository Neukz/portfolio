import Image from 'next/image';
import Link from 'next/link';
import { client, HeroEntrySkeleton } from '@/lib/client';
import { ILang } from '@/types';
import arrowDown from '@/assets/arrow-down.svg';

export default async function Hero({ lang }: ILang) {
	const data = await client.getEntries<HeroEntrySkeleton>({
		content_type: 'hero'
	});
	const hero = data.items[0].fields;

	return (
		<section className="h-screen grid place-items-center place-content-center">
			<div className="flex max-sm:flex-col justify-center items-center max-sm:gap-6 gap-12">
				<Image
					src={hero.photoUrl[lang]!}
					alt="Picture of the author"
					width={144}
					height={144}
					unoptimized
					priority
					className="rounded-full w-36"
				/>

				<div className="space-y-4 max-sm:space-y-2">
					<h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
						<span>{hero.title1[lang]}</span>{' '}
						<span className="text-primary">{hero.title2[lang]}</span>
					</h1>

					<p className="sm:text-lg lg:text-xl xl:text-2xl font-light">
						{hero.subtitle[lang]}
					</p>
				</div>
			</div>

			<Link
				href={`/${lang}#about`}
				scroll={false}
				prefetch={false}
				className="animate-bounce mt-24"
			>
				<Image src={arrowDown} alt="Arrow down" />
			</Link>
		</section>
	);
}
