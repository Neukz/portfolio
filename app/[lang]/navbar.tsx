import Image from 'next/image';
import Link from 'next/link';
import Nav from './nav';
import HamburgerMenu from './hamburger-menu';
import { client, NavigationEntrySkeleton } from '@/lib/client';
import { ILang } from '@/types';

export default async function Navbar({ lang }: ILang) {
	const data = await client.getEntries<NavigationEntrySkeleton>({
		content_type: 'navigation'
	});
	const { logoUrl, sections } = data.items[0].fields;

	return (
		<nav className="sticky top-0 z-20 flex justify-between items-center bg-dark">
			<Link href={`/${lang}`}>
				<Image src={logoUrl[lang]!} alt="Logo" width={75} height={75} />
			</Link>

			<div className="flex items-center">
				<Link
					href={`/${lang === 'en' ? 'pl' : 'en'}`}
					className="z-10 border-r border-r-slate-600 pr-4 mr-4 hover:text-primary duration-150"
				>
					{lang === 'en' ? 'PL' : 'EN'}
				</Link>

				<ul className="max-sm:hidden flex gap-8">
					<Nav sections={sections} lang={lang} />
				</ul>

				<HamburgerMenu>
					<ul className="flex flex-col gap-4 items-center">
						<Nav sections={sections} lang={lang} />
					</ul>
				</HamburgerMenu>
			</div>
		</nav>
	);
}
