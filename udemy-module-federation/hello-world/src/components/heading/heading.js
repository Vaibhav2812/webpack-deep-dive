import './heading.css';

class Heading {
    render(pageName) {
        const h1 = document.createElement('h1');
        h1.textContent = 'Webpack is Amazing!' + pageName + ' ' + 'Page';
        h1.classList.add('heading');
        const body = document.querySelector('body');
        body.appendChild(h1);
    }
}
export default Heading;