import { Poppins } from 'next/font/google';
import Navbar from './navbar';
import Footer from './footer';
import { client, MetadataEntrySkeleton } from '@/lib/client';
import { ILang } from '@/types';

import '@/styles/globals.css';

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins'
});

export async function generateMetadata({ params }: { params: ILang }) {
	const data = await client.getEntries<MetadataEntrySkeleton>({
		content_type: 'metadata'
	});
	const { title, description } = data.items[0].fields;

	return {
		title: title[params.lang],
		description: description[params.lang]
	};
}

export async function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'pl' }];
}

interface ILayoutProps {
	children: React.ReactNode;
	params: ILang;
}

export default function Layout({ children, params }: ILayoutProps) {
	return (
		<html lang={params.lang} className={`${poppins.variable}`}>
			<body className={poppins.className}>
				<div className="container mx-auto px-4">
					{/* @ts-ignore - Async Server Component */}
					<Navbar lang={params.lang} />
					{children}
					{/* @ts-ignore - Async Server Component */}
					<Footer lang={params.lang} />
				</div>
			</body>
		</html>
	);
}
