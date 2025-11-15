const screen = document.querySelector('.screen');
const numberButtons = document.querySelector('.numpads');
let text = "";

for (let i = 0; i < 9; i++) {
    text += `<div class="border-amber-100 border-2 rounded-2xl flex justify-center items-center cursor-pointer bg-blue-600 hover:bg-blue-300" onclick="numberInsert(${9-i})"> ${9-i} </div>`;
};
numberButtons.innerHTML = text;

let dotHelper = 0;
let varHelper;
let operType;
let operHelper;
// operatOrEqual

//print number on the black screen
function numberInsert(x) {
    if (String(+screen.innerText).length < 17) {
        if (operHelper) {
            operHelper = '';
            screen.innerText = '0';
        };
        if (screen.innerText == '0') {
            if (x == '.') {
                dotHelper = 1;
                screen.innerText = '0.';
            } else if (x == 0) {
                screen.innerText = 0;
            } else {
                screen.innerText = x;
            };
        } else if (screen.innerText != '0') {
            if (x == '.') {
                if (dotHelper == 0) {
                    dotHelper = 1;
                    screen.innerText += x;
                } else if (dotHelper != 0) {
                    screen.innerText = screen.innerText;
                };
            } else {
                screen.innerText += x;
            };
        };
        // screen.innerHTML = (+screen.innerText).toLocaleString();
    };
};

//operator actions
function operate(x) {
    if (varHelper) {
        calculate();
    }
    operHelper = x;
    operType = x;
    varHelper = +screen.innerText;
    dotHelper = 0;
    // console.log(operType + ' ' + varHelper);
}

//calculation
function calculate() {
    if (operType === '+') {
        screen.innerText = +varHelper + +screen.innerText;
    } else if (operType === '-') {
        screen.innerText = +varHelper - +screen.innerText;
    } else if (operType === '×') {
        screen.innerText = +varHelper * +screen.innerText;
    } else if (operType === '÷') {
        screen.innerText = +varHelper / +screen.innerText;
    };
    operHelper = operType;
    varHelper = 0;
};

//cleaning
function cleaner(x) {
    if (x == 'cls') {
        screen.innerText = 0;
        operHelper = '';
        operType = '';
        varHelper = 0;
        dotHelper = 0;
    } else if (x == 'backspace') {
        if (String(screen.innerText).length == 1) {
            screen.innerText = 0;
        } else if (String(screen.innerText).length > 1) {
            if (String(screen.innerText.slice(0, -1) == '.')) {
                dotHelper = 0;
                screen.innerText = (screen.innerText).slice(0, -1)
            } else {
                screen.innerText = (screen.innerText).slice(0, -1)
            };
        };
    };
};