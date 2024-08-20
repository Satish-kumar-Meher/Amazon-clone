


// Add an event listener for hamburger
document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".box4").style.left = "0"
    document.querySelector(".cross").style.width = "33px"
    document.querySelector(".box5").style.width = "1216px"
document.body.style.overflow = "hidden";
})

// Add an event listener for close button
document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".box4").style.left = "-120%"
    document.querySelector(".cross").style.width = "0"
    document.querySelector(".box5").style.width = "0"
document.body.style.overflow = "auto";
})
document.querySelector(".india").addEventListener("click", ()=>{
    document.body.style.overflow="hidden";
})


let currentBgIndex = 0;
const bgImages = [".bg-img-1", ".bg-img-2", ".bg-img-3", ".bg-img-4", ".bg-img-5"];
document.querySelector(".right-arrow").addEventListener("click", () => {
    // Hide all background images
    bgImages.forEach(bgClass => {
        const bgElement = document.querySelector(bgClass);
        if (bgElement) {
            bgElement.style.width = "0";
        }
    });

    // Increment the index to show the next background image
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;

    // Show the next background image
    const nextBgElement = document.querySelector(bgImages[currentBgIndex]);
    if (nextBgElement) {
        nextBgElement.style.width = "1536px";
    }
});

document.querySelector(".left-arrow").addEventListener("click", () => {
    // Hide all background images
    bgImages.forEach(bgClass => {
        const bgElement = document.querySelector(bgClass);
        if (bgElement) {
            bgElement.style.width = "0";
        }
    });

    // Decrement the index to show the previous background image
    // If currentBgIndex is 0, set it to the last index (bgImages.length - 1)
    currentBgIndex = (currentBgIndex - 1 + bgImages.length) % bgImages.length;

    // Show the previous background image
    const prevBgElement = document.querySelector(bgImages[currentBgIndex]);
    if (prevBgElement) {
        prevBgElement.style.width = "1536px";
    }
});


setInterval(() => {
    // Hide all background images
    bgImages.forEach(bgClass => {
        const bgElement = document.querySelector(bgClass);
        if (bgElement) {
            bgElement.style.width = "0";
        }
    });

    // Increment the index to show the next background image
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;

    // Show the next background image
    const nextBgElement = document.querySelector(bgImages[currentBgIndex]);
    if (nextBgElement) {
        nextBgElement.style.width = "1536px";
    }
}, 5000); // Change the background image every 5 seconds


// add event listener to Back to top for scrolling

document.querySelector(".back").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.querySelector("#sm").addEventListener("click",()=>{
    document.querySelector(".plang").innerText="SM"
    
})

document.querySelector("#hi").addEventListener("click",()=>{
    document.querySelector(".plang").innerText="HI"

})
document.querySelector("#sp").addEventListener("click",()=>{
    document.querySelector(".plang").innerText="SP"

})
document.querySelector("#en").addEventListener("click",()=>{
    document.querySelector(".plang").innerText="EN"

})

