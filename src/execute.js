function init() {
    for (let num of numBtn) {
        num.addEventListener("click", Numbering.numProgress);
    }
    dotBtn.addEventListener("click", Numbering.dotProgress);
    backSpaceBtn.addEventListener("click", Numbering.backSpaceProgress);
    cBtn.addEventListener("click", Numbering.cProgress);
    for (let btn of signBtn) {
        btn.addEventListener("click", signProcess.verification);
    }
}

init();