// ===================================
// 加减咖啡馆 — 交互脚本
// ===================================

document.addEventListener('DOMContentLoaded', function () {

  // === 导航栏滚动效果 ===
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // === 移动端汉堡菜单 ===
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // 点击菜单项后自动关闭
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // === 滚动渐入动画 ===
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    function checkReveal() {
      var windowHeight = window.innerHeight;
      reveals.forEach(function (el) {
        var top = el.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
          el.classList.add('visible');
        }
      });
    }
    // 初始检查（页面加载时） + 延迟检查确保布局完成
    checkReveal();
    setTimeout(checkReveal, 300);
    window.addEventListener('scroll', checkReveal);
  }

  // === 菜单页 Tab 切换 ===
  const tabs = document.querySelectorAll('.menu-tab');
  const sections = document.querySelectorAll('.menu-section');
  if (tabs.length && sections.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = this.getAttribute('data-tab');

        // 切换 tab 激活状态
        tabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');

        // 切换内容区
        sections.forEach(function (s) { s.classList.remove('active'); });
        var targetSection = document.getElementById(target);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      });
    });
  }
});