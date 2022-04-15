function copyToClipboard(button, what) {
    navigator.clipboard.writeText(document.querySelector(`[data-${what}]`).innerHTML);

    const copyImg = button.querySelector('img.copy');
    const tickImg = button.querySelector('img.tick');
    copyImg.classList.add('hide');
    tickImg.classList.remove('hide');
    setTimeout(() => {
        copyImg.classList.remove('hide');
        tickImg.classList.add('hide');
    }, 1000);
}

document.getElementById('btnCbu').addEventListener('click', function() {
    copyToClipboard(this, 'cbu');
});

document.getElementById('btnAlias').addEventListener('click', function() {
    copyToClipboard(this, 'alias');
});
