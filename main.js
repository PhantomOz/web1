const mode = document.querySelector('#mode');
const menu = document.querySelectorAll('a');

mode.addEventListener('click', function(){
    document.body.classList.toggle('light');
    if(mode.textContent === 'light mode'){
        mode.textContent = 'dark mode';
    }else{
        mode.textContent = 'light mode';
    }
});

menu.forEach(menu => {
    menu.addEventListener('click', (e)=> {
        console.log('click')
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    })
})