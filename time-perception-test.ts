const list = Array.from((document.getElementById("time-prcp-wrap") as HTMLElement).childNodes) as HTMLElement[];

for (const el of list) {
    const time = Number(el.innerText) * 1000;
    el.click();
    setTimeout(() => el.click(), time);
}