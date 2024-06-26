const menuButton = document.getElementById("hamburguer-menu")
const menuContainer = document.getElementById("menu-navigation-container")

menuButton.addEventListener('click', () => {
    if(menuContainer.style.display == "none" || menuContainer.style.display == ""){
        menuContainer.style.display = "block"
    }else{
        menuContainer.style.display = "none"
    }
})

const featureExplanatonContainer = document.getElementById("feature-explanation-container")
const questionDividerFeature = document.getElementById("question-divider-feature")
const gamificationFeature = document.getElementById("gamification-feature")

const updateFeatureExplanation = (imgSrc, imgAlt, titleText, paragraphText) => {
    featureExplanatonContainer.innerHTML = ""

    const img = document.createElement("img")
    img.src = imgSrc
    img.alt = imgAlt
    img.id = "feature-image"

    const title = document.createElement("h2")
    title.innerText = titleText
    title.className = "section-title"

    const paragraph = document.createElement("p")
    paragraph.innerHTML = paragraphText
    paragraph.className = "section-description"

    featureExplanatonContainer.appendChild(img)
    featureExplanatonContainer.appendChild(title)
    featureExplanatonContainer.appendChild(paragraph)
};

gamificationFeature.addEventListener("click", (e) => {
    e.preventDefault()
    updateFeatureExplanation(
        "images/illustration-features-tab-3.svg",
        "An illustration of the feature",
        "Be competitive",
        "With the gamification feature, people studying the same topics will be classified based on the number of answers they answered and the number of points each question has."
    )
})

questionDividerFeature.addEventListener("click", (e) => {
    e.preventDefault()
    updateFeatureExplanation(
        "images/illustration-features-tab-2.svg",
        "An illustration of the feature",
        "Learn by yourself",
        "We use a technique inspired by the CBL framework. This characteristic specifies that, when you have a study topic, you, due to your own doubts about the topic, come up with questions about it that must be answered. According to your answer, you will be ranked among other people studying this subject."
    )
})

const accordionsButtonFaq = document.getElementsByClassName("faq-accordion")

for(let i = 0; i< accordionsButtonFaq.length; i++){
    accordionsButtonFaq[i].addEventListener("click", (e) => {
        e.preventDefault()
        accordionsButtonFaq[i].classList.toggle("active")
        accordionsButtonFaq[i].parentElement.classList.toggle("active")

        const iconArrow = accordionsButtonFaq[i].childNodes[3]
        if(accordionsButtonFaq[i].childNodes[3].className == "fa-solid fa-chevron-down"){
            iconArrow.className = "fa-solid fa-chevron-up"
        }else{
            iconArrow.className = "fa-solid fa-chevron-down"
        }

        let pannel = accordionsButtonFaq[i].nextElementSibling
        if(pannel.style.display === "block"){
            pannel.style.display = "none"
        }else{
            pannel.style.display = "block"
        }
    })
}

function validateEmailByRegex(email){
    let regexEmail = /\S+@\S+\.\S+/

    return regexEmail.test(email)
}

const submitButton = document.getElementById("submit-button")
const emailField = document.getElementById("email-field")
const errorEmail = document.getElementById("email-error")
submitButton.addEventListener("submit", (e) => {
    e.preventDefault()
    const isEmailValid = validateEmailByRegex(emailField.value)

    if(!isEmailValid || emailField.value == ""){
        errorEmail.innerText = "Fill with a valid email!"
    }else{
        errorEmail.innerText = ""
    }
})