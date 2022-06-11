const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#FF69B4';

dodger.style.bottom = '0px';

dodger.style.left = '0px';

let moveDodgerLeft = () => {
        const leftNumbers = dodger.style.left.replace('px', '');
        const left = parseInt(leftNumbers, 10);
        console.log(left);
        
            dodger.style.left = `${left -1}px`;
        
    
}

let moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace('px', '');
    const right = parseInt(leftNumbers, 10);
    console.log(right);
    if(right < 360) {
        dodger.style.left = `${right +1}px`
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if(event.key === 'ArrowRight'){
        moveDodgerRight();
    }
});