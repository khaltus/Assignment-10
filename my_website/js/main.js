//

const clicker = document.querySelector('#florence');
const image = document.querySelector('#play');
// hide the image
image.style.display = 'none';
const div = document.querySelector('#flsky');

// event handler
clicker.onclick = () => {
   image.style.display = 'block';
   div.style.display = 'none';
};

// another event handler
image.onclick = () => {
   image.style.display = 'none';
   div.style.display = 'block';
}
