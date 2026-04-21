/**
 * 导航栏
 */
function loadNav() {
    // 自动计算当前页面的深度
    const path = window.location.pathname;
    let depth = path.split('/').length - 2;
    if (depth < 0) depth = 0;
    const prefix = depth > 0 ? '../'.repeat(depth) : '';
    
    const navHtml = `
        <nav class="hyy-nav" id="hyy-main-nav">
            <div class="hyy-nav-header">
                <span class="hyy-nav-title">NORSFAINES</span>
                <button class="hyy-nav-close" id="nav-close-btn" aria-label="关闭">✕</button>
            </div>
            <div class="hyy-nav-links">
                <a href="${prefix}index.html" data-nav="home">首页</a>
                <a href="${prefix}pages/languages.html" data-nav="languages">语言列表</a>
                <a href="${prefix}pages/norsfaines.html" data-nav="grammar">格蔻尔语</a>
                <a href="${prefix}pages/404.html" data-nav="grammar">法罗士语</a>
                <a href="${prefix}pages/404.html" data-nav="grammar">诺尔菲闪烁的特耳荷斯</a>
            </div>
        </nav>
    `;
    
    const container = document.getElementById('nav-container');
    if (container) {
        container.innerHTML = navHtml;
    } else {
        console.warn('找不到 #nav-container');
        return;
    }

    // 高亮当前页
    const currentPage = document.body.dataset.page;
    document.querySelectorAll('[data-nav]').forEach(link => {
        if (link.dataset.nav === currentPage) {
            link.classList.add('active');
        }
    });

    // 折叠展开逻辑
    const nav = document.getElementById('hyy-main-nav');
    const toggleBtn = document.getElementById('nav-toggle-btn');
    const closeBtn = document.getElementById('nav-close-btn');
    
    if (!toggleBtn) {
        console.warn('找不到 #nav-toggle-btn 按钮');
        return;
    }

    console.log('导航初始化成功', { nav, toggleBtn, closeBtn });

    // 打开导航
    toggleBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        nav.classList.add('show');
        console.log('打开导航');
    });

    // 关闭导航 (关闭按钮)
    if (closeBtn) {
        closeBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            nav.classList.remove('show');
            console.log('关闭按钮点击');
        });
    }

    // 点击导航外部关闭
    document.addEventListener('click', function(event) {
        if (!nav.classList.contains('show')) return;
        
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggle = toggleBtn.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle) {
            nav.classList.remove('show');
            console.log('点击外部关闭');
        }
    });
    
    // 按 ESC 键关闭
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && nav.classList.contains('show')) {
            nav.classList.remove('show');
            console.log('ESC 关闭');
        }
    });
}

document.addEventListener('DOMContentLoaded', loadNav);