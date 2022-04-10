function copyToClipboard(what) {
    navigator.clipboard.writeText(document.querySelector(`[data-${what}]`).innerHTML);
}
