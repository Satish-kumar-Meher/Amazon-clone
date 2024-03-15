


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
// let = function(){
//     let element = document.body.firstElementChild.children[3].
// }
// document.querySelector(".india").addEventListener("click", () => {
//     const locationBoxHtml = `
//     <div class="loc-box">
//         <div class="loc-box1">
//             <div class="loc-box2">
//                 <p class="choose">Choose your location</p>
//             </div>
//             <p class="del">Delivery options and delivery speeds may vary for different locations</p>
//             <button class="btn-3"><a href="login page/index.html" class="btn-login">Sign in to see your address</a></button>
//             <p class="zip-code">or enter a US zip code</p>
//             <p class="gaar-1">_______________</p>
//             <p class="gaar-2">______________</p>
//             <input type="text" class="place-holder">
//             <input type="submit" class="apply" value="Apply">
//             <p class="gaar-3">________________________</p>
//             <p class="gaar-4">_______________________</p>
//             <p class="or">or</p>
//             <select name="Ship outside the US" class="countries">
//                 <option value="Ship outside the US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship outside the US</option>
//                 <option value="Australia">Australia</option>
//                 <option value="Canada">Canada</option>
//                 <option value="France">France</option>
//                 <option value="Germany">Germany</option>
//                 <option value="India">India</option>
//                 <option value="Italy">Italy</option>
//                 <option value="Japan">Japan</option>
//                 <option value="Mexico">Mexico</option>
//                 <option value="Netherlands">Netherlands</option>
//                 <option value="Poland">Poland</option>
//                 <option value="Russia">Russia</option>
//                 <option value="Singapore">Singapore</option>
//                 <option value="South Africa">South Africa</option>
//                 <option value="Spain">Spain</option>
//                 <option value="Sweden">Sweden</option>
//                 <option value="Switzerland">Switzerland</option>
//                 <option value="Turkey">Turkey</option>
//                 <option value="United Kingdom">United Kingdom</option>
//                 <option value="United States">United States</option>
//                 <option value="Brazil">Brazil</option>
//             </select>
//             <input type="submit" value="Done" class="done">
//         </div>
//     </div>`;
//     document.body.insertAdjacentHTML('afterbegin', locationBoxHtml);
// });

// document.querySelector(".choose").addEventListener("click", () => {
//     const locationBox = document.querySelector(".loc-box");
//     if (locationBox) {
//         locationBox.remove();
//     }
// });
// let bg2 =document.querySelector(".bg-img-2")
// let bg3= document.querySelector(".bg-img-3")
// let bg4 = document.querySelector(".bg-img-4")
// let bg5 = document.querySelector(".bg-img-5")
// document.querySelector(".right-arrow").addEventListener("click", () => {
//     bg2.style.width = "1536px"
// })
// document.querySelector(".right-arrow").addEventListener("click", () => {
//     bg3.style.width = "1536px"
// })
// document.querySelector(".right-arrow").addEventListener("click", () => {
//     bg4.style.width = "1536px"
// })
// document.querySelector(".right-arrow").addEventListener("click", () => {
//     bg5.style.width = "1536px"
// })
// let arr=[document.querySelector(".bg-img-2"),document.querySelector(".bg-img-3"),document.querySelector(".bg-img-4"),document.querySelector(".bg-img-5")]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     document.querySelector(".right-arrow").addEventListener("click", () => {

//     })
// }


// if(document.querySelector(".right-arrow").addEventListener("click", () => {

// })){

// }

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

