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
        
        var links = cards[i].getElementsByTagName('a')
        for (let i = 0; i < links.length; i++) {
                links[i].classList.add(language)
                links[i].classList.add('background-none')
            if(i == 0) {
                links[i].classList.add('card-link')
            }
            else {
                links[i].classList.add('all-links')
                links[i].classList.remove('Link--muted')
                links[i].classList.add('medium')
            } 
        }
        
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
        if(desc.length > 0 && desc[0]) {
            desc[0].classList.add(language)
            desc[0].classList.add('desc')
            desc[0].classList.add('background-none')
            desc[0].classList.remove('color-text-secondary')
        }
        
        var forked = cards[i].getElementsByClassName('color-text-secondary')

        if(forked.length > 0) {
            forked[0].classList.remove('color-text-secondary')
        }

        var dot = cards[i].getElementsByClassName('repo-language-color')
        dot[0].parentNode.removeChild(dot[0])
        
        var extras = cards[i].getElementsByClassName('pinned-item-meta')
        if(extras.length > 0 && extras[0]) {
            for (let i = 0; i < extras.length; i++) {
                const element = extras[i];
                element.classList.add(language)
                element.classList.add('background-none')
                element.classList.remove('Link--muted')
            }
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
        
        var links = cards[i].getElementsByTagName('a')
        for (let i = 0; i < links.length; i++) {
                links[i].classList.add('none')
                links[i].classList.add('background-none')
            if(i == 0) {
                links[i].classList.add('card-link')
            }
            else {
                links[i].classList.add('all-links')
                links[i].classList.remove('Link--muted')
                links[i].classList.add('medium')
            } 
        }

        var desc = cards[i].getElementsByClassName('pinned-item-desc')
        if(desc.length > 0 && desc[0]) {
            desc[0].classList.add('none')
            desc[0].classList.add('desc')
            desc[0].classList.add('background-none')
            desc[0].classList.remove('color-text-secondary')
        }

        var forked = cards[i].getElementsByClassName('color-text-secondary')

        if(forked.length > 0) {
            forked[0].classList.remove('color-text-secondary')
        }

        var extras = cards[i].getElementsByClassName('pinned-item-meta')
        if(extras.length > 0 && extras[0]) {
            for (let i = 0; i < extras.length; i++) {
                const element = extras[i];
                element.classList.add('none')
                element.classList.add('background-none')
                element.classList.remove('Link--muted')
            }
        }

        var grabbers = cards[i].getElementsByClassName('octicon-grabber')
        if(grabbers.length > 0) {
            grabbers[0].classList.add('none')
        }

        var codeIcon = cards[i].getElementsByClassName('octicon-code-square')
        if(codeIcon.length > 0) {
            codeIcon[0].classList.add('none')
            codeIcon[0].classList.add('background-none')
            codeIcon[0].classList.remove('color-text-secondary')
        }

        var bgGist = cards[i].getElementsByClassName('rounded-bottom-1')
        
        if(bgGist.length > 0 && bgGist[0]) {
            bgGist[0].classList.add('none')
            bgGist[0].classList.add('background-none')
            bgGist[0].classList.remove('color-bg-tertiary')
        }
    }
}