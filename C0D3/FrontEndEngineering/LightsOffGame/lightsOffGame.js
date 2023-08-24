let lightContainer = document.getElementsByClassName('light-table')[0];

// click to light on/off
lightContainer.onclick = (e)=>{
    if (e.target.classList.contains('light')) {
        e.target.classList.toggle('light-on');
    }
};