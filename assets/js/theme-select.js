/**
 * 切换主题, 同时浏览器内保存切换结果
 * 想加其他主题的, 以后再说吧
 */

const sunIcon = `
<svg viewBox="0 0 15 15" height="25" width="25">
  <g>
    <path d="M7 0c0.41421 0 0.75 0.335786 0.75 0.75v1c0 0.41421 -0.33579 0.75 -0.75 0.75s-0.75 -0.33579 -0.75 -0.75v-1C6.25 0.335786 6.58579 0 7 0Zm2.25 7c0 1.24264 -1.00736 2.25 -2.25 2.25S4.75 8.24264 4.75 7 5.75736 4.75 7 4.75 9.25 5.75736 9.25 7Zm-1.5 5.25c0 -0.4142 -0.33579 -0.75 -0.75 -0.75s-0.75 0.3358 -0.75 0.75v1c0 0.4142 0.33579 0.75 0.75 0.75s0.75 -0.3358 0.75 -0.75v-1ZM11.5 7c0 -0.41421 0.3358 -0.75 0.75 -0.75h1c0.4142 0 0.75 0.33579 0.75 0.75s-0.3358 0.75 -0.75 0.75h-1c-0.4142 0 -0.75 -0.33579 -0.75 -0.75ZM0.75 6.25C0.335786 6.25 0 6.58579 0 7s0.335786 0.75 0.75 0.75h1c0.41421 0 0.75 -0.33579 0.75 -0.75s-0.33579 -0.75 -0.75 -0.75h-1Zm1.30024 -4.19976c0.29289 -0.2929 0.76776 -0.2929 1.06066 0l0.86066 0.86066c0.29289 0.29289 0.29289 0.76776 0 1.06066 -0.2929 0.29289 -0.76777 0.29289 -1.06066 0l-0.86066 -0.86066c-0.2929 -0.2929 -0.2929 -0.76777 0 -1.06066Zm9.03886 7.97806c-0.2929 -0.29293 -0.7678 -0.29293 -1.0607 0 -0.29285 0.2929 -0.29285 0.7677 0 1.0606l0.8607 0.8607c0.2929 0.2929 0.7678 0.2929 1.0607 0 0.2929 -0.2929 0.2929 -0.7678 0 -1.0607l-0.8607 -0.8606Zm0.8607 -7.97806c0.2929 0.29289 0.2929 0.76776 0 1.06066l-0.8607 0.86066c-0.2929 0.29289 -0.7678 0.29289 -1.0607 0 -0.29285 -0.2929 -0.29285 -0.76777 0 -1.06066l0.8607 -0.86066c0.2929 -0.2929 0.7678 -0.2929 1.0607 0ZM3.97156 11.0889c0.29289 -0.2929 0.29289 -0.7677 0 -1.0606 -0.2929 -0.29293 -0.76777 -0.29293 -1.06066 0l-0.86066 0.8606c-0.2929 0.2929 -0.2929 0.7678 0 1.0607 0.29289 0.2929 0.76776 0.2929 1.06066 0l0.86066 -0.8607Z" clip-rule="evenodd" stroke-width="1"></path>
  </g>
</svg>`;   // 太阳 SVG
const moonIcon = `
<svg viewBox="0 0 15 15" height="25" width="25">
  <g>
    <path d="M9 0a7 7 0 0 0 0 14l0.004 0a7.079 7.079 0 0 0 2.657 -0.538 0.5 0.5 0 0 0 0.061 -0.894A6.5 6.5 0 0 1 8.5 7a6.5 6.5 0 0 1 3.194 -5.568 0.5 0.5 0 0 0 -0.063 -0.893A7.08 7.08 0 0 0 9.006 0H9Z" clip-rule="evenodd" stroke-width="1"></path>
  </g>
</svg>`;  // 月亮 SVG
const topIcon = `
<svg viewBox="0 0 24 24" height="24" width="24">
  <path d="M23.4665 16.6854 12.71 4.4914c-0.409 -0.4322 -1.097 -0.4322 -1.506 0L0.4866 16.6854c-0.1737 0.1957 -0.2618 0.4528 -0.2445 0.7139 0.0215 0.2632 0.1484 0.5066 0.3521 0.6747l1.809 1.5157c0.2117 0.1859 0.4933 0.2714 0.7725 0.2347 0.2618 -0.0189 0.5049 -0.1423 0.6748 -0.3422l7.9892 -9.2409c0.1029 -0.1019 0.2687 -0.1019 0.3716 0l7.9891 9.2409c0.1699 0.1999 0.4131 0.3233 0.6748 0.3422 0.2616 0.0253 0.5224 -0.0557 0.7236 -0.2249l1.8091 -1.5255c0.2036 -0.1681 0.3306 -0.4115 0.352 -0.6747 0.0042 -0.2681 -0.1018 -0.5262 -0.2934 -0.7138Z" fill="#000000" stroke-width="1"></path>
</svg>`;  // TOP SVG

document.addEventListener('DOMContentLoaded', () => {

  // 回到顶端

    const topBtn = document.createElement('button');
    topBtn.id = 'back-to-top';
    topBtn.className = 'hyy-theme-btn';
    topBtn.style.bottom = '64px';
    topBtn.style.display = 'none';
    topBtn.setAttribute('aria-label', '回到顶部');
    topBtn.innerHTML = topIcon;
    
    document.body.appendChild(topBtn);
    
    // 滚动监听 - 控制显示/隐藏
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });
    
    // 点击回到顶部 - 平滑滚动
    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

  // 主题按钮

  const btn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // 读取保存的主题
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    btn.innerHTML = savedTheme === 'dark' ? sunIcon : moonIcon;
  } else {
    btn.innerHTML = moonIcon;
  }

  btn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    btn.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
    localStorage.setItem('theme', newTheme);
  });





});

