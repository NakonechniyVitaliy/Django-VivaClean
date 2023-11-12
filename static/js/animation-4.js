function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show-4');
        }
    });
}

let options4 = {
    threshold: [0.5] };
let observer4 = new
IntersectionObserver(onEntry, options4);
let elements4 =
document.querySelectorAll('.element-animation-4');

for (let elm of elements4) {
    observer4.observe(elm);
}

