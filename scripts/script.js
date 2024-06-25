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

gamificationFeature.addEventListener("click", (e) => {
    e.preventDefault()
    featureExplanatonContainer.innerHTML = ""

    const img = document.createElement("img")
    img.src = "/images/illustration-features-tab-3.svg"
    img.alt = "An illustration of the feature"
    img.id = "feature-image"

    const title = document.createElement("h2")
    title.innerText = "Be competitive"
    title.className = "section-title"

    const paragraph = document.createElement("p")
    paragraph.innerHTML = "With the gamification feature, people studying the same topics will be classified based on the number of answers they answered and the number of points each question has."
    paragraph.className = "section-description"

    featureExplanatonContainer.appendChild(img)
    featureExplanatonContainer.appendChild(title)
    featureExplanatonContainer.appendChild(paragraph)
})

questionDividerFeature.addEventListener("click", (e) => {
    e.preventDefault()
    featureExplanatonContainer.innerHTML = ""

    const img = document.createElement("img")
    img.src = "/images/illustration-features-tab-2.svg"
    img.alt = "An illustration of the feature"
    img.id = "feature-image"

    const title = document.createElement("h2")
    title.innerText = "Learn by yourself"
    title.className = "section-title"

    const paragraph = document.createElement("p")
    paragraph.innerHTML = "We use a technique inspired by the CBL framework. This characteristic specifies that, when you have a study topic, you, due to your own doubts about the topic, come up with questions about it that must be answered. According to your answer, you will be ranked among other people studying this subject."
    paragraph.className = "section-description"

    featureExplanatonContainer.appendChild(img)
    featureExplanatonContainer.appendChild(title)
    featureExplanatonContainer.appendChild(paragraph)
})