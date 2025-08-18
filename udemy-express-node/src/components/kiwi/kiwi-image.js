import Kiwi from './kiwi-image.png';
import './kiwi-image.css'; // Importing the CSS file for KiwiImage
class KiwiImage {
    render() {
        const img = document.createElement('img');
        const body = document.querySelector('body');
        img.src = Kiwi;
        img.alt = 'Kiwi Fruit';
        body.appendChild(img);
    }
}
export default KiwiImage;
