import Link from 'next/link';
import { client, NavigationEntrySkeleton } from '@/lib/client';
import { Lang } from '@/types';

interface INavProps {
	sections: Awaited<
		ReturnType<typeof client.getEntries<NavigationEntrySkeleton>>
	>['items'][0]['fields']['sections'];
	lang: Lang;
}

export default function Nav({ sections, lang }: INavProps) {
	return (
		<>
			{/* @ts-ignore - TS expects stronger typing with respect to collection types */}
			{sections[lang].map((section: string, idx: number) => (
				<li key={section}>
					<Link
						href={`/${lang}#${sections.en![idx]}`}
						scroll={false}
						prefetch={false}
						className="capitalize hover:text-primary duration-150"
					>
						{section}
					</Link>
				</li>
			))}
		</>
	);
}
