const nums = document.querySelectorAll(".number");
const actions = document.querySelectorAll(".action");
const options = document.querySelectorAll(".option");
const screen = document.getElementById("result");

let x;
let type;
let phase = 1;

function addNum(num) {
	if (phase == 3) {
		screen.innerHTML = "";
		phase = 1;
	}
	if (screen.innerHTML.length > 8) return;
	if (screen.innerHTML == "" && num == "0") return;
	screen.innerHTML = screen.innerHTML + String(num);
}
function action(symbol) {
	if (phase == 1 || phase == 3) {
		if (symbol == "=") return;
		type = symbol;
		x = Number(screen.innerHTML);
		screen.innerHTML = "";
	}
	if (phase == 2) {
		switch (type) {
			case "+":
				x = x + Number(screen.innerHTML);
				break;
			case "-":
				x = x - Number(screen.innerHTML);
				break;
			case "÷":
				x = x / Number(screen.innerHTML);
				break;
			case "×":
				x = x * Number(screen.innerHTML);
				break;
		}
		screen.innerHTML = x;
	}
	if (phase == 1 || phase == 3) phase = 2;
	else phase = 3;
}
function option(o) {
	if (o == "C") screen.innerHTML = "";
	else screen.innerHTML = screen.innerHTML.slice(0, -1);
}
for (let i = 0; i < nums.length; i++) {
	nums[i].addEventListener("click", () => addNum(nums[i].innerHTML));
}
for (let i = 0; i < actions.length; i++) {
	actions[i].addEventListener("click", () => action(actions[i].innerHTML));
}
for (let i = 0; i < options.length; i++) {
	options[i].addEventListener("click", () => option(options[i].innerHTML));
}
