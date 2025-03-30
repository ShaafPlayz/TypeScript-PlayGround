
window.addEventListener('DOMContentLoaded', () =>  {
    const output = document.getElementById('count') as HTMLHeadingElement;

    setInterval(() => {
        const date = new Date().toLocaleDateString();   
        output.textContent = date;
    }, 1000);
});