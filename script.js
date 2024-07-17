let btn = document.querySelector("#button")
let body = document.querySelector("body")
let currMode = "light";

btn.addEventListener("click", () => {
    if (currMode === "light") {
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("#box").style.backgroundColor="black";
        document.querySelector("h1").style.color="white"
        currMode="dark"
        
}
else if(currMode === "dark"){
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("h1").style.color="black"
    document.querySelector("#box").style.backgroundColor="white";
    currMode="light"
}

console.log(currMode);
});
