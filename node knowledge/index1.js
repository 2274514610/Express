function add (num1,num2) {
    return num1 + num2;
};

let addDom = document.querySelector('.add');

setTimeout(()=> {
    addDom.innerText = add(1,3)
},2000)