export class MediaEmbed {
}

export class SecureMediaEmbed {
}

export class Data2 {
	contest_mode: boolean;
	banned_by?: any;
	media_embed: MediaEmbed;
	subreddit: string;
	selftext_html: string;
	selftext: string;
	likes?: any;
	suggested_sort?: any;
	user_reports: any[];
	secure_media?: any;
	link_flair_text?: any;
	id: string;
	gilded: number;
	secure_media_embed: SecureMediaEmbed;
	clicked: boolean;
	score: number;
	report_reasons?: any;
	author: string;
	saved: boolean;
	mod_reports: any[];
	name: string;
	subreddit_name_prefixed: string;
	approved_by?: any;
	over_18: boolean;
	domain: string;
	hidden: boolean;
	thumbnail: string;
	subreddit_id: string;
	edited: any;
	link_flair_css_class?: any;
	author_flair_css_class: string;
	downs: number;
	brand_safe: boolean;
	archived: boolean;
	removal_reason?: any;
	is_self: boolean;
	hide_score: boolean;
	spoiler: boolean;
	permalink: string;
	num_reports?: any;
	locked: boolean;
	stickied: boolean;
	created: number;
	url: string;
	author_flair_text: string;
	quarantine: boolean;
	title: string;
	created_utc: number;
	distinguished?: any;
	media?: any;
	num_comments: number;
	visited: boolean;
	subreddit_type: string;
	ups: number;
}

export class Child {
	kind: string;
	data: Data2;
}

export class Data {
	modhash: string;
	children: Child[];
	after: string;
	before?: any;
}

export class Posts {
	kind: string;
	data: Data;
}
