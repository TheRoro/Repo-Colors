function addLanguage(lang, card, span) {
	span.classList.add(lang)
	span.classList.add('background-none')
	card.classList.add(language)
}

function addRepoIcon(card) {
	var icon = card.getElementsByTagName('svg')[0]
	if (icon) {
		icon.classList.remove('color-text-secondary')
	}
}

function addLinks(card, lang) {
	var links = card.getElementsByTagName('a')
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

function addOwner(card) {
	var owner = card.getElementsByClassName('owner')
	if (owner.length > 0) {
		owner[0].classList.add(language)
		owner[0].classList.add('background-none')
		owner[0].classList.add('bold')
	}
}

function addTitle(card) {
	var title = card.getElementsByClassName('repo')
	title[0].classList.add(language)
	title[0].classList.add('bold')
	title[0].classList.add('background-none')
}

function addLabel(card, lang) {
	var label = card.getElementsByClassName('Label')
	if (label.length > 0) {
		label[0].classList.add(lang)
		label[0].classList.remove('Label--secondary')
		label[0].classList.add('Label')
	}
}

function addDescription(card, lang) {
	var desc = card.getElementsByClassName('pinned-item-desc')
	if (desc.length > 0 && desc[0]) {
		desc[0].classList.add(lang)
		desc[0].classList.add('desc')
		desc[0].classList.add('background-none')
		desc[0].classList.remove('color-fg-muted')
	}
}

function addForkedText(card) {
	var forked = card.getElementsByClassName('color-fg-muted')
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
	var extras = card.getElementsByClassName('pinned-item-meta')
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
	var grabbers = card.getElementsByClassName('octicon-grabber')
	if (grabbers.length > 0) {
		grabbers[0].classList.add(lang)
		grabbers[0].classList.add('background-none')
	}
}

function addGistIcon(card) {
	var codeIcon = card.getElementsByClassName('octicon-code-square')
	if (codeIcon.length > 0) {
		codeIcon[0].classList.add('none')
		codeIcon[0].classList.add('background-none')
		codeIcon[0].classList.remove('color-text-secondary')
	}
}

function addGistBackground(card) {
	var bgGist = card.getElementsByClassName('rounded-bottom-1')
	if (bgGist.length > 0 && bgGist[0]) {
		bgGist[0].classList.add('none')
		bgGist[0].classList.add('background-none')
		bgGist[0].classList.remove('color-bg-subtle')
	}
}

//Get all cards from profile
var cards = document.getElementsByClassName('pinned-item-list-item')

for (let i = 0; i < cards.length; i++) {
	cards[i].classList.add('card')

	//Get all programming languages for each card
	var languageSpan = cards[i].querySelector('[itemprop=programmingLanguage]')
	if (languageSpan) {
		//Get programming language first name
		//Composed names like: "Jupyter Notebook" stay as "Jupyter"
		var language = languageSpan.innerHTML.split(' ')
		language = language[0]

		// Add programming name CSS class to span and card
		addLanguage(language, cards[i], languageSpan)

		// Remove default color from Repo Icon
		addRepoIcon(cards[i])

		//Link to repo
		addLinks(cards[i], language)

		//Owner of repo (for repos not owned by the user)
		addOwner(cards[i])

		//Card title of Repo
		addTitle(cards[i])

		//Public/Private Repo Label
		addLabel(cards[i], language)

		//Card description of Repo
		addDescription(cards[i], language)

		//"Forked From" text
		addForkedText(cards[i])

		//Star and Fork icon
		addExtraIcons(cards[i], language)

		//Drag and Drop Grabber for repository cards
		addGrabbers(cards[i], language)
	} else {
		//When card does not have a programming language
		cards[i].classList.add('none')
		var title = cards[i].getElementsByClassName('repo')
		title[0].classList.add('none')
		title[0].classList.add('bold')

		//Link to repo
		addLinks(cards[i], 'none')

		//Public/Private Repo Label
		addLabel(cards[i], 'none')

		// Remove default color from Repo Icon
		addRepoIcon(cards[i])

		//Card description
		addDescription(cards[i], 'none')

		//"Forked From" text
		addForkedText(cards[i])

		//Star and Fork icon
		addExtraIcons(cards[i], 'none')

		//Drag and Drop Grabber for repository cards
		addGrabbers(cards[i], 'none')

		//Code Icon for gists
		addGistIcon(cards[i])

		//Backgroung for gists preview
		addGistBackground(cards[i])
	}
}
