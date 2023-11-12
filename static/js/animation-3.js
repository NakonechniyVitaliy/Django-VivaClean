function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show-3');
        }
    });
}

let options3 = {
    threshold: [0.5] };
let observer3 = new
IntersectionObserver(onEntry, options3);
let elements3 =
document.querySelectorAll('.element-animation-3');

for (let elm of elements3) {
    observer3.observe(elm);
}

