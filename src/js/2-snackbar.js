import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const delayInput = form.querySelector(".js-delay");

let settled;
let settledBtn;

form.addEventListener('click', (event) => {
    if (event.target.type === "radio") {
        settled = event.target.value;
        settledBtn = event.target;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = delayInput.value;

    switch (settled) {
        case "fulfilled":
            resolve(delay);
            break;
        case "rejected":
            reject(delay);
            break;
    }
    
    delayInput.value = '';
    settledBtn.checked = false;

});


function resolve(delay) {
    return Promise.resolve(showResolve(delay));
}

function showResolve(delay) {
    setTimeout(() => {
        iziToast.show({
            message: `✅ Fulfilled promise in ${delay}ms`,
            color: 'green',
            position: 'topRight',
            close: false
        });
    }, delay);
}


function reject(delay) {
    return Promise.reject(showReject(delay));
}

function showReject(delay) {
    setTimeout(() => {
        iziToast.show({
            message: `❌ Rejected promise in ${delay}ms`,
            color: 'red',
            position: 'topRight',
            close: false
        });
    }, delay);
}