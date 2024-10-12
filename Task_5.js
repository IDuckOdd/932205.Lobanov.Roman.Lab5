function background() {
    document.getElementsByClassName('back_btn')[0].style.display = 'block';
    document.getElementById('news1').style.opacity = '0.3';
    document.getElementById('news2').style.opacity = '0.3';
    document.getElementById('news3').style.opacity = '0.3';
}

function news1() {
    background();
    document.getElementById('popup1').style.display = 'block';
}

function news2() {
    background();
    document.getElementById('popup2').style.display = 'block';
}

function news3() {
    background();
    document.getElementById('popup3').style.display = 'block';
}

function close_popup() {
    document.getElementsByClassName('back_btn')[0].style.display = 'none';
    document.getElementById('popup1').style.display = 'none';
    document.getElementById('popup2').style.display = 'none';
    document.getElementById('popup3').style.display = 'none';
    document.getElementById('news1').style.opacity = '1';
    document.getElementById('news2').style.opacity = '1';
    document.getElementById('news3').style.opacity = '1';
}