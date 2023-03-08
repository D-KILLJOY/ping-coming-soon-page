const inputBox = document.querySelector(".input-box");
const btn = document.querySelector(".btn");
const errMsg = document.querySelector(".input-err");

const validateEmail = (email) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	return emailRegex.test(email);
};

btn.addEventListener("click", (e) => {
	e.preventDefault();

	if (validateEmail(inputBox.value)) {
		inputBox.value = "";
		inputBox.style.borderColor = `var(--Pale-Blue)`;
		errMsg.style.display = "none";
	} else {
		inputBox.style.borderColor = `var(--Light-Red)`;
		errMsg.style.display = "block";
	}
});
