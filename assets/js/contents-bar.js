/**
 * 目录
 */

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.hyy-contents-btn');
    const contents = document.querySelector('.hyy-contents');
    const closeBtn = document.querySelector('.hyy-contents-close');

    if (!btn || !contents) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        contents.classList.add('show');
        btn.setAttribute('aria-expanded', 'true');
    });

    // 关闭按钮
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            contents.classList.remove('show');
            btn.setAttribute('aria-expanded', 'false');
        });
    }

    // 点击外部关闭
    document.addEventListener('click', (e) => {
        if (!contents.contains(e.target) && e.target !== btn) {
            contents.classList.remove('show');
            btn.setAttribute('aria-expanded', 'false');
        }
    });

    contents.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});