/**
 * 主脚本文件 - 技术风格个人网站
 * 为Zhicheng Jiang设计
 */

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化打字效果
  initTypewriter();
  
  // 初始化深色模式
  initDarkMode();
  
  // 初始化滚动动画
  initScrollAnimations();
  
  // 初始化平滑滚动
  initSmoothScroll();
  
  // 初始化移动导航
  initMobileNav();
  
  // 初始化表单提交
  initContactForm();
});

/**
 * 初始化打字效果
 */
function initTypewriter() {
  const options = {
    strings: [
      'MIT Undergraduate Student',
      'Math & Computer Science Major',
      'AI & Machine Learning Enthusiast',
      'IMO Gold Medalist',
      'Researcher in Generative Models'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  };
  
  // 检查元素是否存在
  const typedElement = document.querySelector('.typed-text');
  if (typedElement) {
    new Typed('.typed-text', options);
  }
}

/**
 * 初始化深色模式
 */
function initDarkMode() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // 检查本地存储中的主题偏好
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  // 应用保存的主题
  if (isDarkMode) {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
  }
  
  // 监听主题切换
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  });
}

/**
 * 初始化滚动动画
 */
function initScrollAnimations() {
  // 添加动画类到所有部分
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.add('animate-on-scroll');
  });
  
  // 添加动画类到其他元素
  const animatedElements = [
    '.card', 
    '.timeline-item', 
    '.skill', 
    '.project-card', 
    '.award-item', 
    '.publication-item',
    '.contact-item'
  ];
  
  animatedElements.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.classList.add('animate-on-scroll');
    });
  });
  
  // 检测元素是否在视口中并添加可见类
  function checkVisibility() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const position = element.getBoundingClientRect();
      // 如果元素在视口中
      if (position.top < window.innerHeight * 0.9) {
        element.classList.add('visible');
      }
    });
  }
  
  // 初始检查
  checkVisibility();
  
  // 滚动时检查
  window.addEventListener('scroll', checkVisibility);
}

/**
 * 初始化平滑滚动
 */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a, .hero-buttons a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 获取目标部分的ID
      const targetId = this.getAttribute('href');
      
      // 如果是页内链接
      if (targetId.startsWith('#')) {
        e.preventDefault();
        
        // 获取目标元素
        const targetElement = document.querySelector(targetId);
        
        // 如果目标元素存在
        if (targetElement) {
          // 平滑滚动到目标位置
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
          
          // 如果在移动设备上，关闭导航菜单
          if (window.innerWidth <= 768) {
            document.querySelector('.sidebar').classList.remove('active');
          }
        }
      }
    });
  });
  
  // 监听滚动以更新活动导航链接
  window.addEventListener('scroll', updateActiveNavLink);
}

/**
 * 更新活动导航链接
 */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // 获取当前滚动位置
  const scrollPosition = window.scrollY;
  
  // 检查每个部分的位置
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    // 如果当前滚动位置在部分范围内
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const sectionId = section.getAttribute('id');
      
      // 移除所有导航链接的活动类
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      // 添加活动类到当前部分的导航链接
      const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

/**
 * 初始化移动导航
 */
function initMobileNav() {
  // 创建移动导航切换按钮
  const mobileNavToggle = document.createElement('button');
  mobileNavToggle.className = 'mobile-nav-toggle';
  mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.body.appendChild(mobileNavToggle);
  
  // 监听切换按钮点击
  mobileNavToggle.addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    
    // 更新图标
    if (sidebar.classList.contains('active')) {
      this.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      this.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
  
  // 点击页面其他部分关闭导航
  document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    
    if (sidebar.classList.contains('active') && 
        !sidebar.contains(e.target) && 
        e.target !== mobileNavToggle && 
        !mobileNavToggle.contains(e.target)) {
      sidebar.classList.remove('active');
      mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
}

/**
 * 初始化联系表单
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 获取表单数据
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // 在实际应用中，这里会发送表单数据到服务器
      // 这里只是模拟提交成功
      
      // 显示成功消息
      alert(`感谢您的留言，${name}！我会尽快回复您。`);
      
      // 重置表单
      contactForm.reset();
    });
  }
}

/**
 * 技能进度条动画
 */
function animateSkillBars() {
  const skillLevels = document.querySelectorAll('.skill-level');
  
  skillLevels.forEach(level => {
    const width = level.style.width;
    level.style.width = '0';
    
    setTimeout(() => {
      level.style.width = width;
    }, 100);
  });
}

// 页面加载完成后执行技能进度条动画
window.addEventListener('load', animateSkillBars);
