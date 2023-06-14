import * as contentful from 'contentful';

export type MetadataEntrySkeleton = {
	contentTypeId: 'metadata';
	fields: {
		title: contentful.EntryFields.Text;
		description: contentful.EntryFields.Text;
	};
};

export type NavigationEntrySkeleton = {
	contentTypeId: 'navigation';
	fields: {
		logoUrl: contentful.EntryFields.Text;
		sections: contentful.EntryFields.Array<contentful.EntryFields.Text>;
	};
};

export type HeroEntrySkeleton = {
	contentTypeId: 'hero';
	fields: {
		title1: contentful.EntryFields.Text;
		title2: contentful.EntryFields.Text;
		subtitle: contentful.EntryFields.Text;
		photoUrl: contentful.EntryFields.Text;
	};
};

export type AboutEntrySkeleton = {
	contentTypeId: 'about';
	fields: {
		title: contentful.EntryFields.Text;
		photoUrl: contentful.EntryFields.Text;
		description: contentful.EntryFields.Text;
	};
};

export type PortfolioEntrySkeleton = {
	contentTypeId: 'portfolio';
	fields: {
		title: contentful.EntryFields.Text;
	};
};

export type ProjectEntrySkeleton = {
	contentTypeId: 'project';
	fields: {
		name: contentful.EntryFields.Text;
		description: contentful.EntryFields.Text;
		imageUrl: contentful.EntryFields.Text;
		demoUrl: contentful.EntryFields.Text;
		tools: contentful.EntryFields.Array<contentful.EntryFields.Text>;
	};
};

export type ContactEntrySkeleton = {
	contentTypeId: 'contact';
	fields: {
		title: contentful.EntryFields.Text;
		description: contentful.EntryFields.Text;
		sendMessageText: contentful.EntryFields.Text;
		email: contentful.EntryFields.Text;
		githubUrl: contentful.EntryFields.Text;
		linkedinUrl: contentful.EntryFields.Text;
		instagramUrl: contentful.EntryFields.Text;
		twitterUrl: contentful.EntryFields.Text;
	};
};

export type FooterEntrySkeleton = {
	contentTypeId: 'footer';
	fields: {
		copyright: contentful.EntryFields.Text;
	};
};

export const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID as string,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
}).withAllLocales;
