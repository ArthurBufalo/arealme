const patra = document.getElementsByClassName("patra-color")[0].childNodes[0] as HTMLElement
let level = 1;

const obs = new MutationObserver(([ { target } ]) => {
    if (level++ >= 100) obs.disconnect(); // If any higher, the score crashes (yeah)
    else setTimeout(() => { (target as HTMLElement).click() }, 0);
})

obs.observe(patra, {
    attributes: true,
    subtree: true
});

for (const el of patra.childNodes)
    (el as HTMLElement).click();