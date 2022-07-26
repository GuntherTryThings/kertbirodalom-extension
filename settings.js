const getSettings = () => {

    const server = 5;                   // Your server
    const domain = 'kertbirodalom';     // Your domain
    const location = 'hu';              // Your location
    const garden = 1;                   // Your server

    return {
        cid: getCid(),
        url: `https://s${server}.${domain}.${location}/save/pflanz.php`,
        garden
    }
}