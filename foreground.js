var cards = document.getElementsByClassName('pinned-item-list-item')

for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add('card')

    var languageSpan = cards[i].querySelector('[itemprop=programmingLanguage]')
    if(languageSpan) {
        language = languageSpan.innerHTML.split(" ")
        language = language[0]
        languageSpan.classList.add(language)
        languageSpan.classList.add('background-none')
        cards[i].classList.add(language)
        
        var icon = cards[i].getElementsByTagName('svg')[0]
        if(icon) {
            icon.classList.remove('color-text-secondary')
        }
        
        var link = cards[i].getElementsByTagName('a')[0]
        link.classList.add(language)

        var owner = cards[i].getElementsByClassName('owner')
        if(owner.length > 0) {
            owner[0].classList.add(language)
            owner[0].classList.add('background-none')
            owner[0].classList.add('bold')
        }

        var title = cards[i].getElementsByClassName('repo')
        title[0].classList.add(language)
        title[0].classList.add('bold')
        title[0].classList.add('background-none')

        var desc = cards[i].getElementsByClassName('pinned-item-desc')
        desc[0].classList.add(language)
        desc[0].classList.add('desc')
        desc[0].classList.remove('color-text-secondary')
        
        var dot = cards[i].getElementsByClassName('repo-language-color')
        dot[0].parentNode.removeChild(dot[0])
        
        var stars = cards[i].getElementsByClassName('pinned-item-meta')
        if(stars.length > 0 && stars[0]) {
            stars[0].classList.add(language)
            stars[0].classList.add('background-none')
            stars[0].classList.remove('Link--muted')
        }

        var grabbers = cards[i].getElementsByClassName('octicon-grabber')
        if(grabbers.length > 0) {
            grabbers[0].classList.add(language)
            grabbers[0].classList.add('background-none')
        }
    }
    else {
        cards[i].classList.add('none')
        var title = cards[i].getElementsByClassName('repo')
        title[0].classList.add('none')
        title[0].classList.add('bold')

        var stars = cards[i].getElementsByClassName('pinned-item-meta')
        if(stars.length > 0 && stars[0]) {
            stars[0].classList.add('none')
        }

        var grabbers = cards[i].getElementsByClassName('octicon-grabber')
        if(grabbers.length > 0) {
            grabbers[0].classList.add('none')
        }
    }
}