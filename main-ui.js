const ROWS_IN_UI = 0;
const TILES_IN_ROW = 0;

const createUITile = () => {
    const UITile = document.createElement('div');

    UITile.innerText = '+';
    UITile.onclick = showSelectorUi;

    UITile.style = `
        display: flex;
        flex-direction: column;
        height: 4rem;
        width: 4rem;
        background: linear-gradient(45deg, #ffffff05, #ffffff10 20%, #ffffff10 21%, #ffffff05);
        backdrop-filter: blur(6px);
        margin: .5rem;
        border-radius: 1rem;
        box-shadow: 0 0 0.2rem white;
        justify-content: center;
        align-items: center;
        font-size: xx-large;
        color: transparent;
        text-shadow: 0 0 0.15rem #ffffffaa;
    `;

    return UITile;
}

const createUIRow = () => {
    const UIRow = document.createElement('div');

    UIRow.style = `
        display: flex;
        flex-direction: row;
        height: 5rem;
    `;

    for(let i = 0; i < 4; i++)
        UIRow.appendChild(createUITile());

    return UIRow;
}

const createUIButton = () => {
    const UIRow = document.createElement('div');

    UIRow.style = `
        display: flex;
        flex-direction: row;
        height: 5rem;
    `;

    const UIButton = document.createElement('div');

    UIButton.innerText = 'Plant';

    UIButton.style = `
        display: flex;
        flex-direction: column;
        height: 4rem;
        background: linear-gradient(45deg, #ffffff01, #ffffff05 20%, #ffffff05 21%, #ffffff01);
        backdrop-filter: blur(6px);
        margin: .5rem;
        border-radius: 1rem;
        box-shadow: 0 0 0.2rem white;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: xx-large;
        color: transparent;
        text-shadow: 0 0 0.15rem #ffffffaa;
    `;

    UIRow.appendChild(UIButton);

    return UIRow;
}

const createUIElement = () => {
    const mainUIElement = document.createElement('div');

    mainUIElement.style = `
        display: flex;
        flex-direction: column;
        position: fixed;
        bottom: 3rem;
        right: 3rem;
        width: 20rem;
        height: 40rem;
        padding: .5rem;
        background: linear-gradient(45deg, #ffffff15, #ffffff30 20%, #ffffff30 21%, #ffffff15);
        backdrop-filter: blur(6px);
        z-index: 100;
        border-radius: 1rem;
        box-shadow: 0 0 0.2rem white;
    `;

    for(let i = 0; i < 7; i++)
        mainUIElement.appendChild(createUIRow());

    mainUIElement.appendChild(createUIButton());

    return mainUIElement;
}

const showUI = () => {
    const mainUIElement = createUIElement();

    document.body.appendChild(mainUIElement);
    document.body.style.background = 'linear-gradient(90deg, #092800, #028102 20%, #028102 80%, #092800)';
}