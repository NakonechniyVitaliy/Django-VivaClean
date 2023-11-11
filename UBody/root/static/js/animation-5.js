function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show-5');
        }
    });
}

let options5 = {
    threshold: [0.5] };
let observer5 = new
IntersectionObserver(onEntry, options5);
let elements5 =
document.querySelectorAll('.element-animation-5');

for (let elm of elements5) {
    observer5.observe(elm);
}

