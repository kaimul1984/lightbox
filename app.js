const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img');
const opacity = 0.4;


images.forEach((img) => {
    img.addEventListener('click', (e) => {
       
        // Reset the images opcity
        images.forEach(img =>(img.style.opacity = 1));
        //change current imaage to src of clicked image
        current.src = e.target.src;
        // add fadein class
        current.classList.add('fade-in');
         // remove fadein class
        setTimeout(() => {
            current.classList.remove('fade-in')
        },500);
        //set opacity to iamges
        e.target.style.opacity = opacity;

    })
})