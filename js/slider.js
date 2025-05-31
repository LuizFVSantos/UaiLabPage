const controls = document.querySelectorAll(".control");
let currentItem = 0;
const elements = document.querySelectorAll(".elements");
const maxElements = elements.length;

controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left");
        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }
        if (currentItem >= maxElements) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxElements - 1;
        }
        elements[currentItem].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
        });
    });
});

const URLcall = "http://localhost:1337/api/roletas"

async function chamarApi() {
    let token = ""
    const resp1 = await fetch(URLcall, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    const obj = await resp1.json()
    console.log(obj)
}
chamarApi();
