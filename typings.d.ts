type Base = {
	_createdAt: string
	_id: string
	_rev: string
	_type: string
	_updatedAt: string
}

interface Post extends Base {
	title: string
	description: string
	slug: Slug
	author: Author
	mainImage: Image
	categories: Category[]
	body: Block[]
}

interface Author extends Base {
	name: string
	slug: string
	image: Image
	bio: Block[]
}

interface Category extends Base {
	description: string
	title: string
}

interface Image {
	_type: 'image'
	asset: Reference
}

interface Slug {
	_type: 'slug'
	current: string
}

interface Block {
	_key: string
	_type: 'block'
	children: Span[]
	markDefs: any[]
	style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Span {
	_key: string
	_type: 'span'
	marks: string[]
	text: string
}

interface MainImage {
	_type: 'image'
	asset: Refence
}

interface Title {
	_type: 'string'
	current: string
}
