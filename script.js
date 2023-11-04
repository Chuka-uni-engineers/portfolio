

window.addEventListener("load", function () {
    let prof = document.getElementById('prof');
    let texts = ["Programmer['", "Designer", "Developer", "Winner"];
    let index = 0;

    // Change text every 2 seconds
    setInterval(function () {
        prof.textContent = texts[index++ % texts.length]; // Loop through the texts array
    }, 2000); // 2000 milliseconds = 2 seconds
});
