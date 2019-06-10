const modals = document.getElementsByClassName('modal');

const platterA = document.getElementById("platter-modal-link");
platterA.onclick = () => modals[0].style.display = "flex";
const cookiesA = document.getElementById("cookies-modal-link");
cookiesA.onclick = () => modals[1].style.display = "flex";
const muffinsA = document.getElementById("muffins-modal-link");
muffinsA.onclick = () => modals[2].style.display = "flex";
const otherTreatsA = document.getElementById("other-treats-modal-link");
otherTreatsA.onclick = () => modals[3].style.display = "flex";

const closeButtons = document.getElementsByClassName("modal-close");

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = () => {
        modals[i].style.display = "none";
    }
}

window.onclick = (event) => {
    for (let i = 0; i < modals.length; i++) {
        if (modals[i] === event.target) {
            modals[i].style.display = "none";
            return;
        }
    }
};