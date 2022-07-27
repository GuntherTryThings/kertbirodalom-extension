const getCid = () => {
    for (let script of document.scripts)
        if(script.innerText.includes('ajax.setToken'))
            return script.innerText.split('ajax.setToken("')[1].split('"')[0];
}

const getFields = () => {
    const SELECTOR = '[style="background:url(https://wurzelimperium.wavecdn.net/pics/produkte/0.gif)"]';
    const emptyFields = document.querySelectorAll(SELECTOR);

    const count = emptyFields.length;
    const fieldIds = [];

    for(let emptyField of emptyFields)
        fieldIds.push(emptyField.parentElement.id.split('gardenTile')[1]);

    return {
        count,
        ids: fieldIds
    }
}

const getVegetables = () => {
    let vegetableElements = document.querySelectorAll('.regalItem');
    let vegetables = [];

    for(let vegetable of vegetableElements) {
        vegetables.push({
            count: parseInt(vegetable.childNodes[1].innerText),
            id: parseInt(vegetable.id.split('regal_')[1])
        })
    }

    // Sorting the vegetables by count
    vegetables.sort((a, b) => {
        if (a.count < b.count)
            return -1;
        else if (a.count > b.count)
            return 1;
        return 0;
    });

    return vegetables;
}

const forgeUrls = (vegetables, fields) => {
    let urlsParams = [];

    // Forging the URL
    let requestFields = '';
    let vegetableIdx = 0;
    let counter = 0;

    for(let fieldId of fields.ids) {

        // Increasing index, if we ran out of the selected vegetable
        if(vegetables[vegetableIdx].count == 0) 
            vegetableIdx++;

        // Break if we dont't have any vegetable
        if(!vegetables[vegetableIdx])
            break;

        // Creating the URL for one tile
        requestFields += `pflanze[]=${vegetables[vegetableIdx].id}&feld[]=${fieldId}&felder[]=${fieldId}&`;

        // Decreasing the count
        vegetables[vegetableIdx].count--;

        if(counter == 5) {
            urlsParams.push(requestFields);
            requestFields = '';
            counter = 0;
        } else
            counter++;
    }

    if(requestFields != '')
        urlsParams.push(requestFields);

    return urlsParams;
}

const sendRequest = (settings, parameters, requestCount) => {
    setTimeout(() => {
        const oReq = new XMLHttpRequest();
        oReq.open("GET", `${settings.url}?${parameters}cid=${settings.cid}&garden=${settings.garden}`);
        oReq.send();
    }, requestCount * 300);
}

const sendAllRequest = (settings, urlParams) => {
    let requestCount = 0;

    for(let params of urlParams) {
        sendRequest(settings, params, requestCount);
        requestCount++;
    }

    return requestCount
}

const main = () => {
    showUI();
    const settings = getSettings();
    const fields = getFields();
    const vegetables = getVegetables();
    const urlParams = forgeUrls(vegetables, fields);
    const requestCount = sendAllRequest(settings, urlParams) + 1;

    console.log(urlParams)

    if(requestCount > 1) {
        console.log(`All request will be sent after ${(requestCount * 300) / 1000} seconds`);
        setTimeout(() => {
            window.location.reload();
        }, requestCount * 300);
    }    
}

main();

