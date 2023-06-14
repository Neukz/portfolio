import Image from 'next/image';
import Link from 'next/link';
import Title from '@/components/title';
import { client, ContactEntrySkeleton } from '@/lib/client';
import { ILang } from '@/types';
import githubIcon from '@/assets/github-icon.svg';
import linkedinIcon from '@/assets/linkedin-icon.svg';
import instagramIcon from '@/assets/instagram-icon.svg';
import twitterIcon from '@/assets/twitter-icon.svg';

export default async function Contact({ lang }: ILang) {
	const data = await client.getEntries<ContactEntrySkeleton>({
		content_type: 'contact'
	});
	const contact = data.items[0].fields;

	return (
		<section
			id="contact"
			className="h-screen grid place-items-center place-content-center gap-20"
		>
			<Title>{contact.title[lang]}</Title>

			<p className="text-center max-w-md">{contact.description[lang]}</p>

			<a
				href={`mailto:${contact.email[lang]}`}
				className="bg-primary capitalize px-4 py-2 rounded-sm hover:scale-105 hover:shadow-md hover:shadow-neutral-700/50 transition duration-150"
			>
				{contact.sendMessageText[lang]}
			</a>

			<div className="flex justify-center items-center gap-5">
				<Link
					href={contact.githubUrl[lang]!}
					target="_blank"
					className="hover:scale-105 transition duration-150"
				>
					<Image src={githubIcon} alt="GitHub" />
				</Link>

				<Link
					href={contact.linkedinUrl[lang]!}
					target="_blank"
					className="hover:scale-105 transition duration-150"
				>
					<Image src={linkedinIcon} alt="LinkedIn" />
				</Link>

				<Link
					href={contact.instagramUrl[lang]!}
					target="_blank"
					className="hover:scale-105 transition duration-150"
				>
					<Image src={instagramIcon} alt="Instagram" />
				</Link>

				<Link
					href={contact.twitterUrl[lang]!}
					target="_blank"
					className="hover:scale-105 transition duration-150"
				>
					<Image src={twitterIcon} alt="Twitter" />
				</Link>
			</div>
		</section>
	);
}
