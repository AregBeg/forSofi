const namak = document.querySelector('.left_block');
const pesa = document.querySelector('.pesa');
const flower_left = document.querySelector('.to_left_flower');
const flower_right = document.querySelector('.to_right_flower');
const namesHarsUPesa = document.querySelector('.names p');
const names = document.querySelector('.names');
const pak_srtik = document.querySelector('.pak_srtik')
const right_block = document.querySelector('.right_block')
const namesHideHandler = () => {
    names.classList.add('hide_names_half');
    // setTimeout(() => {
    //     flower_right.style.display = 'none';
    //     flower_left.style.display = 'none';
    //     namesHarsUPesa.style.display = 'none';
    //     pak_srtik.style.display = 'none';
    // },1000)
    setTimeout(() => {
        right_block.classList.add('show_right_half')
    }, 1000)
}
const pesaHandler = () => {
    pesa.classList.add('pesu_qaylel');
    setTimeout(() => {
        namesHideHandler();
    }, 2500)
}
namak.addEventListener('click', pesaHandler);
