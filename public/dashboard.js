async function getStatus(){

let res = await fetch("/relay/1/status");
let data = await res.json();

document.getElementById("lightStatus").innerText =
"Status: " + (data.status ? "ON" : "OFF");

}

async function turnOn(){

await fetch("/relay/1/on",{method:"POST"});
getStatus();

}

async function turnOff(){

await fetch("/relay/1/off",{method:"POST"});
getStatus();

}

getStatus();