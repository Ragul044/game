const imageSources =[
    'pxfuel.com(1).jpg','pxfuel.com(2).jpg','pxfuel.com(3).jpg','pxfuel.com(4).jpg', 
    'pxfuel.com(5).jpg','pxfuel.com(6).jpg','pxfuel.com.jpg'
];

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}

// Change the background image every 0.2 seconds (200 milliseconds)
setInterval(changeBackgroundImage, 100);