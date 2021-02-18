/*
    If script added that also uses addEventListener
    create a function here
*/

/* 
    TODO: make "get quote" button on showcase, then it transitions over to
    the bottom right corner as you scroll down.

*/

/**
 *  Turns on an animation on items with 'animate-on' class
 */
(function(){
    const elements = document.querySelectorAll('.to-animate')
    
    let elementTop = 0
        windowHeight = window.innerHeight
    
    function updateElement() {
        for (let element of elements) {
            if (!(element.classList.contains('animate-on'))) {
                if (isVisible(element)) {
                    element.classList.add('animate-on')
                }
            }
        }
    }
    
    function isVisible(element) {
        elementTop = element.getBoundingClientRect().top
        return (windowHeight * 0.9 > elementTop) 
    }

    document.addEventListener('scroll', updateElement)
    
    document.addEventListener('resize', ()=> {
        updateElement()
    })
    
    updateElement()
})()



