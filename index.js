const carrouselEle = document.querySelector('.engloba-clients-comments');
let isDown = false;
var offset = 0;

carrouselEle.addEventListener('wheel', (event) => {
    event.preventDefault();
    carrouselEle.scrollLeft += event.deltaY - 50;
});

// carrouselEle.addEventListener('mousedown', function (event) {
//     isDown = true;
//     console.log(event)
//     offset = event.clientX;
// }, true);


// document.addEventListener('mouseup', function () {
//     isDown = false;
// }, true);

// document.addEventListener('mousemove', function (event) {
//     event.preventDefault();
    
//     if (isDown) {
//         //offset = (offset > 0) ? offset - 50 : offset + 50
//         let toMoveX = -(event.clientX - offset);
//         console.log(toMoveX)
//         // console.log(toMoveX);
//         // if (toMoveX < 0) {
//         //     toMoveX = +30;
//         // }
//         // else if (toMoveX >= 10) {
//         //     toMoveX = -30;
//         // }
        
//         carrouselEle.scrollLeft += toMoveX;
//     }
// }, true);