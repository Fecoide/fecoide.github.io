function loadNav() {
    // 自动计算当前页面的深度
    const depth = window.location.pathname.split('/').length - 2;
    const prefix = depth > 0 ? '../'.repeat(depth) : '';
    
    const navHtml = `
        <nav class="hyy-nav">
            <a href="${prefix}index.html" data-nav="home">首页</a>
            <a href="${prefix}pages/languages.html" data-nav="languages">语言</a>
            <a href="${prefix}pages/grammar.html" data-nav="grammar">语法</a>
        </nav>
    `;
    
    document.getElementById('nav-container').innerHTML = navHtml;
    
    // 高亮当前页
    const currentPage = document.body.dataset.page;
    document.querySelectorAll('[data-nav]').forEach(link => {
        if (link.dataset.nav === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', loadNav);