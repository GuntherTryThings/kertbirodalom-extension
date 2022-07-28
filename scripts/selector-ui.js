const appendSelectorUi = () => {
    const selectorUI = document.createElement('div');
    selectorUI.id = 'popup-selector';

    const vegetables = getVegetables(false);
    const fields = getFields();

    selectorUIHTML = '<div class="selector-content">';
    for(let i = 0; i < vegetables.length; i++) {
        if(i % 4 == 0)
            selectorUIHTML += `<div class="popup-row">`
        selectorUIHTML += `
            <div class="selector-tile">
                <div class="selector-tile-image l${vegetables[i].id}" count="${vegetables[i].count}"></div>
            </div>
        `
        if(i % 4 == 3)
            selectorUIHTML += `</div>`
    }
    selectorUIHTML += `
        </div>
        <div class="popup-slider-container">
            <input type="range" min="1" max="${fields.count}" value="1" class="slider" id="selector-slider">
            <div id="slider-counter">1</div>
        </div>
        <div class="popup-row">
            <div class="popup-button">Add</div>
        </div>
    `;
    selectorUI.innerHTML = selectorUIHTML;

    document.body.append(selectorUI);
    document.getElementById('selector-slider').oninput = sliderOnchangeDisplayCount;
}