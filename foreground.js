const supportedLanguages = {
	JavaScript: 1,
	Vue: 1,
	Java: 1,
	TypeScript: 1,
	Python: 1,
	Go: 1,
	HTML: 1,
	'C++': 1,
	'C#': 1,
	CSS: 1,
	SCSS: 1,
	sass: 1,
	Jupyter: 1,
	Vim: 1,
	VimL: 1,
	TeX: 1,
	Swift: 1,
	Kotlin: 1,
	Dart: 1,
	Gherkin: 1,
	'Objective-C': 1,
	R: 1,
	Powershell: 1,
	Shell: 1,
	Cuda: 1,
	Lua: 1,
	PHP: 1,
	Ruby: 1,
	CoffeeScript: 1,
	Rust: 1,
	Dockerfile: 1,
	AutoHotkey: 1,
	Rebol: 1,
	C: 1,
	PureBasic: 1,
	Makefile: 1,
	Visual: 1,
	D: 1,
	Lisp: 1,
}

function addLanguage(lang, card, span) {
	if (span) {
		span.classList.add(lang)
		span.classList.add('background-none')
	}
	card.classList.add(lang)
}

function addRepoIcon(card) {
	let icon = card.getElementsByTagName('svg')[0]
	if (icon) {
		icon.classList.remove('color-text-secondary')
	}
}

function addLinks(card, lang) {
	let links = card.getElementsByTagName('a')
	for (let i = 0; i < links.length; i++) {
		links[i].classList.add(lang)
		links[i].classList.add('background-none')
		if (i == 0) {
			links[i].classList.add('card-link')
		} else {
			links[i].classList.add('all-links')
			links[i].classList.remove('Link--muted')
			links[i].classList.add('medium')
		}
	}
}

function addOwner(card, lang) {
	let owner = card.getElementsByClassName('owner')
	if (owner.length > 0) {
		owner[0].classList.add(lang)
		owner[0].classList.add('background-none')
		owner[0].classList.add('bold')
	}
}

function addTitle(card, lang) {
	let title = card.getElementsByClassName('repo')
	title[0].classList.add(lang)
	title[0].classList.add('bold')
	title[0].classList.add('background-none')
}

function addLabel(card, lang) {
	let label = card.getElementsByClassName('Label')
	if (label.length > 0) {
		label[0].classList.add(lang)
		label[0].classList.remove('Label--secondary')
		label[0].classList.add('Label')
	}
}

function addDescription(card, lang) {
	let desc = card.getElementsByClassName('pinned-item-desc')
	if (desc.length > 0 && desc[0]) {
		desc[0].classList.add(lang)
		desc[0].classList.add('desc')
		desc[0].classList.add('background-none')
		desc[0].classList.remove('color-fg-muted')
	}
}

function addForkedText(card) {
	let forked = card.getElementsByClassName('color-fg-muted')
	if (
		forked.length > 0 &&
		forked[0].nodeName == 'P' &&
		forked[0].hasChildNodes() &&
		forked[0].firstElementChild &&
		forked[0].firstElementChild.nodeName == 'A'
	) {
		//Forked Repo Name and Link
		forked[0].firstElementChild.classList.add('opacity-10')
		//"Forked From" text
		forked[0].classList.add('opacity-9')
		forked[0].classList.remove('color-fg-muted')
	}
}

function addExtraIcons(card, lang) {
	let extras = card.getElementsByClassName('pinned-item-meta')
	if (extras.length > 0 && extras[0]) {
		for (let i = 0; i < extras.length; i++) {
			const element = extras[i]
			element.classList.add(lang)
			element.classList.add('background-none')
			element.classList.remove('Link--muted')
		}
	}
}

function addGrabbers(card, lang) {
	let grabbers = card.getElementsByClassName('octicon-grabber')
	if (grabbers.length > 0) {
		grabbers[0].classList.add(lang)
		grabbers[0].classList.add('background-none')
	}
}

function addGistIcon(card, lang) {
	let codeIcon = card.getElementsByClassName('octicon-code-square')
	if (codeIcon.length > 0) {
		codeIcon[0].classList.add(lang)
		codeIcon[0].classList.add('background-none')
		codeIcon[0].classList.remove('color-text-secondary')
	}
}

function addGistBackground(card, lang) {
	let bgGist = card.getElementsByClassName('rounded-bottom-1')
	if (bgGist.length > 0 && bgGist[0]) {
		bgGist[0].classList.add(lang)
		bgGist[0].classList.add('background-none')
		bgGist[0].classList.remove('color-bg-subtle')
	}
}

//Get all cards from profile
let cards = document.getElementsByClassName('pinned-item-list-item')

for (const card of cards) {
	card.classList.add('card')

	//Get programming language for a card
	let languageSpan = card.querySelector('[itemprop=programmingLanguage]')
	let language = 'none'
	if (languageSpan) {
		//Get programming language first name
		//Composed names like: "Jupyter Notebook" stay as "Jupyter"
		language = languageSpan.innerHTML.split(' ')[0]
		//Validate if it is a supported language
		if (language in supportedLanguages) {
			language = language
		} else {
			language = 'none'
		}
	}
	// Add programming name CSS class to span and card
	addLanguage(language, card, languageSpan)

	//Card title of Repo
	addTitle(card, language)

	//Link to repo
	addLinks(card, language)

	//Public/Private Repo Label
	addLabel(card, language)

	// Remove default color from Repo Icon
	addRepoIcon(card)

	//Card description of Repo
	addDescription(card, language)

	//"Forked From" text
	addForkedText(card)

	//Owner of repo (for repos not owned by the user)
	addOwner(card, language)

	//Star and Fork icon
	addExtraIcons(card, language)

	//Drag and Drop Grabber for repository cards
	addGrabbers(card, language)

	//Code Icon for gists
	addGistIcon(card, language)

	//Backgroung for gists preview
	addGistBackground(card, language)
}
