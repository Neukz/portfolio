import Hero from './hero';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import { ILang } from '@/types';

interface IPageProps {
	params: ILang;
}

export default function Page({ params: { lang } }: IPageProps) {
	return (
		<main>
			{/* @ts-ignore - Async Server Component */}
			<Hero lang={lang} />
			{/* @ts-ignore - Async Server Component */}
			<About lang={lang} />
			{/* @ts-ignore - Async Server Component */}
			<Portfolio lang={lang} />
			{/* @ts-ignore - Async Server Component */}
			<Contact lang={lang} />
		</main>
	);
}
