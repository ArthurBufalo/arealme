# arealme
Arialme Hability Tests Hack Scripts

## [Drag CPS Test](https://www.arealme.com/drag-click-test/en/)
```js
const btn = document.getElementById("clickarena");
setInterval(() => {
    btn.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        view: window
    }));
}, 0);
```

## [Colors](https://www.arealme.com/colors/en/)
```js
const patra = document.getElementsByClassName("patra-color")[0].childNodes[0];
let level = 1;
const obs = new MutationObserver(([{ target }]) => {
    if (level++ >= 100)
        obs.disconnect();
    else
        setTimeout(() => { target.click(); }, 0);
});
obs.observe(patra, {
    attributes: true,
    subtree: true
});
for (const el of patra.childNodes)
    el.click();
```

## [Time Perception Test](https://www.arealme.com/time-perception-test/en/)
```js
const list = Array.from(document.getElementById("time-prcp-wrap").childNodes);
for (const el of list) {
    const time = Number(el.innerText) * 1000;
    el.click();
    setTimeout(() => el.click(), time);
}
```

## [Reaction Time](https://www.arealme.com/reaction-test/en/)
```js
const container = document.getElementsByClassName("tfny-container")[0];
function click() {
    return new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window });
}
const obs = new MutationObserver(muts => {
    if (muts.length > 2 || muts[0].attributeName == "style")
        return;
    setTimeout(() => {
        muts[0].target.dispatchEvent(click());
    }, 0);
});
obs.observe(container, { attributes: true, subtree: true });
document.getElementsByClassName("tfny-colWrapper")[0].dispatchEvent(click());

```

## [1-to-50](https://www.arealme.com/1-to-50/en/)
```js
const table = document.getElementsByClassName("dp-one-fifty-container")[0];
let count = 1;
for (const round of Array(50))
    for (const row of table.childNodes)
        for (const block of row.childNodes) {
            const id = Number(block.childNodes[0].innerText);
            if (id === count) {
                block.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window }));
                count++;
            }
        }
```