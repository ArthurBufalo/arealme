const table = document.getElementsByClassName("dp-one-fifty-container")[0] as HTMLElement;
let count = 1;

for (const round of Array(50))
    for (const row of table.childNodes)
        for (const block of row.childNodes) {
            const id = Number((block.childNodes[0] as HTMLElement).innerText)
            if (id === count) {
                block.dispatchEvent(new MouseEvent(
                    "mousedown",
                    { bubbles: true, cancelable: true, view: window }
                ))
                count++
            }
        }
