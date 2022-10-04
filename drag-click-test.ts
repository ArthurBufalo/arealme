const btn = document.getElementById("clickarena") as HTMLElement;

setInterval(() => {
    btn.dispatchEvent(new MouseEvent(
            "mousedown",
            { bubbles: true, cancelable: true, view: window }
        )
    );
}, 0);