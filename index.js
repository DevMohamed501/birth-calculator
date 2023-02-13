const birthDay = document.querySelector("#birth-day");
const calculatorBtn = document.querySelector("#birth-btn");
const birthResult = document.querySelector(".birth-result");

calculatorBtn.addEventListener("click", () => {
    const today = new Date().getTime();
    const inputDate = new Date(birthDay.value).getTime();

    const day = parseInt((today - inputDate) / (1000 * 60 * 60 * 24));
    const month = parseInt((today - inputDate) / ((1000 * 60 * 60 * 24 * 365) / 12));
    const years = parseInt((today - inputDate) / (1000 * 60 * 60 * 24 * 365));

    birthResult.querySelector(".day").textContent = day;
    birthResult.querySelector(".month").textContent = month;
    birthResult.querySelector(".years").textContent = years;
});
