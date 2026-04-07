fetch(`https://api.mcsrvstat.us/2/eu.raz-network.de`)
.then(res => res.json())
.then(data => {
    if (data.online) {
    document.getElementById("player-count").innerText =
        `${data.players.online} / ${data.players.max}`;
    } else {
    document.getElementById("player-count").innerText = "0 / 0";
    }
})
.catch(() => {
        document.getElementById("player-count").innerText = "0 / 0";
});

