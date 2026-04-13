fetch(`https://api.mcsrvstat.us/2/eu.raz-network.de`)
.then(res => res.json())
.then(data => {
    if (data.online) {
    document.getElementById("server-status").innerText = "Online";
    } else {
    document.getElementById("server-status").innerText = "Offline";
    }
})
.catch(() => {
        document.getElementById("server-status").innerText = "Error";
});

