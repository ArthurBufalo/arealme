const container = document.getElementsByClassName("tfny-container")[0] as HTMLElement;

function click() {
    return new MouseEvent(
        "mousedown",
        { bubbles: true, cancelable: true, view: window }
    )
}

const obs = new MutationObserver(muts => {
    if (muts.length > 2 || muts[0].attributeName == "style") return;
    setTimeout(() => {
        muts[0].target.dispatchEvent(click())
    }, 0)
});

obs.observe(container, { attributes: true, subtree: true })

document.getElementsByClassName("tfny-colWrapper")[0].dispatchEvent(click())