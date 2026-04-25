/**
 * 目录
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. 注入目录 HTML
    const contentsHTML = `
        <div class="hyy-contents">
            <button class="hyy-contents-close" type="button" aria-label="关闭目录">✕</button>
            <a href="norsfaines.html">1 状态组; 潮汐状态句及其流向</a>
            <a href="norsfaines2.html">2 关系组; 滤镜关系句的次数及灵性</a>
            <a href="norsfaines3.html">3 关系词和状态词; 古典化合入门</a>
        </div>
        <button class="hyy-contents-btn" type="button" aria-label="目录">☰</button>
    `;
    document.body.insertAdjacentHTML('afterbegin', contentsHTML);

    // 2. 交互逻辑
    const btn = document.querySelector('.hyy-contents-btn');
    const contents = document.querySelector('.hyy-contents');
    const closeBtn = document.querySelector('.hyy-contents-close');

    if (!btn || !contents) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        contents.classList.add('show');
        btn.setAttribute('aria-expanded', 'true');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            contents.classList.remove('show');
            btn.setAttribute('aria-expanded', 'false');
        });
    }

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