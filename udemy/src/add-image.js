import Logo from './logo_lower_section.png';
import altText from './altText.txt';
function addImage() {
    const img =  document.createElement('img');
    img.src = Logo;
    img.alt = altText;
    img.width = 300;
    img.height = 300;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;;