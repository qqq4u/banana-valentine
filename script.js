function clickButton() {
    let checkBox1 = document.getElementById("chechbox-1");
    let checkBox2 = document.getElementById("checkbox-2");
    if (checkBox1.checked === true && checkBox2.checked === true) {
        location.href = './heart.html'
    } else {
        alert('Сначала включи оба наших сердечка!')
    }
}
