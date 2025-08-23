import './navigation-bar.css';

class NavigationBar {
    render(navigationItems) {
        const list = navigationItems.map(item => {
            return `<li><a href="${item.path}">${item.label}</a></li>`;
        })
        const ulElement = document.createElement('ul');
        ulElement.innerHTML = list.join('');
        ulElement.classList.add('navigation-bar');
        document.body.appendChild(ulElement);
        return ulElement;
    }
}
export default NavigationBar;