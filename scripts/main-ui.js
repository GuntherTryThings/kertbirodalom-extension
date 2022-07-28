const createUITile = () => {
    const UITile = document.createElement('div');
    UITile.innerText = '+';
    UITile.onclick = showSelectorUi;
    UITile.classList.add('popup-tile');

    return UITile;
}

const createUIRow = () => {
    const UIRow = document.createElement('div');
    UIRow.classList.add('popup-row');

    for(let i = 0; i < 4; i++)
        UIRow.appendChild(createUITile());

    return UIRow;
}

const createUIButton = () => {
    const UIRow = document.createElement('div');
    UIRow.classList.add('popup-row');

    const UIButton = document.createElement('div');
    UIButton.classList.add('popup-button');

    UIButton.innerText = 'Plant';
    UIRow.appendChild(UIButton);

    return UIRow;
}

const createDisplayToggle = () => {
    const UIRow = document.createElement('div');
    UIRow.classList.add('popup-row');

    const UIButton = document.createElement('div');
    UIButton.classList.add('popup-button');
    UIButton.onclick = toggleMainPopup;

    UIButton.innerHTML = '<p id="display-toggle" show="false">V</p>';
    UIRow.appendChild(UIButton);

    return UIRow;
}

const createMainUIElement = () => {
    const mainUIElement = document.createElement('div');

    mainUIElement.id = 'main-popup';
    mainUIElement.classList.add('main-popup');
    mainUIElement.appendChild(createDisplayToggle());

    for(let i = 0; i < 6; i++)
        mainUIElement.appendChild(createUIRow());

    mainUIElement.appendChild(createUIButton());

    return mainUIElement;
}

const showUI = () => {
    const mainUIElement = createMainUIElement();
    document.body.appendChild(mainUIElement);
    appendSelectorUi();
}