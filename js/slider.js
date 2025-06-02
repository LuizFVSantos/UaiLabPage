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

require('dotenv').config();

async function chamarApi() {
    const token = process.env.TokenKey
        if (!token) {
        console.error("Token não encontrado! Verifique seu arquivo .env");
        return;
    }

    try {
        const resp1 = await fetch(URLcall, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!resp1.ok) {
            throw new Error(`Erro na resposta da API: ${resp1.status}`);
        }

        const obj = await resp1.json();
        console.log(obj);
    } catch (error) {
        console.error("Erro ao chamar API:", error.message);
    }
}
chamarApi();
