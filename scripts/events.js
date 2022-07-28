const showSelectorUi = () => {
    document.getElementById('popup-selector').style.display = 'flex';
};

const hideSelectorUI = () => {
    document.getElementById('popup-selector').style.display = 'none';
}

const toggleMainPopup = () => {
    const mainPopupElement = document.getElementById('main-popup');
    const displayToggleButton = document.getElementById('display-toggle');

    if(displayToggleButton.getAttribute('show') === 'true') {
        mainPopupElement.style.bottom = '-35.25rem';
        displayToggleButton.style.transform = 'rotate(180deg)';
        displayToggleButton.setAttribute('show', 'false');
        hideSelectorUI();
    } else {
        mainPopupElement.style.bottom = '3rem';
        displayToggleButton.style.transform = 'rotate(0deg)';
        displayToggleButton.setAttribute('show', 'true');
    }
}

const setSelectorMax = () => {

}

const sliderOnchangeDisplayCount = () => {
    const slider = document.getElementById('selector-slider');
    const counter = document.getElementById('slider-counter');

    console.log(slider.value)

    counter.innerText = slider.value;
}