function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show-2');
        }
    });
}

let options2 = {
    threshold: [0.5] };
let observer2 = new
IntersectionObserver(onEntry, options2);
let elements2 = document.querySelectorAll('.element-animation-2');

for (let elm of elements2) {
    observer2.observe(elm);
}

