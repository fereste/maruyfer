function copyToClipboard(what) {
    // navigator.clipboard.writeText(document.querySelector(`[data-${what}]`).innerHTML);

    document.querySelector('#copy').classList.add('hide');
    document.querySelector('#tick').classList.remove('hide');
    setTimeout(() => {
        document.querySelector('#copy').classList.remove('hide');
        document.querySelector('#tick').classList.add('hide');
    }, 1000);
}
