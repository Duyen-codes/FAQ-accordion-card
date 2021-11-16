// const toggles = document.querySelectorAll('.toggle')

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active');
//     })
// })

const faq = document.querySelectorAll('.faq');

faq.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        faq.nextSibling.classList.toggle('active');
    })

})