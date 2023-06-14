import { client, FooterEntrySkeleton } from '@/lib/client';

interface IFooterProps {
	lang: string;
}

export default async function Footer({ lang }: IFooterProps) {
	const data = await client.getEntries<FooterEntrySkeleton>({
		content_type: 'footer'
	});

	return (
		<footer className="p-5">
			<p className="text-center text-slate-400">
				{data.items[0].fields.copyright[lang]}
			</p>
		</footer>
	);
}
