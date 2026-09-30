/**
 * 主脚本文件 - 技术风格个人网站
 * 为Zhicheng Jiang设计
 */

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化打字效果
  initTypewriter();

  // 初始化滚动动画
  initScrollAnimations();

  // 初始化平滑滚动
  initSmoothScroll();

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
      '18 (Math) & 6-4(AI)',
      'Generative Models Researcher',
      'Automated Theorem Proving',
      'IMO Gold Medalist',
      'Building AI That Reasons'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  };
  
  // 检查元素是否存在
  const typedElement = document.querySelector('.typed-text');
  if (typedElement && typeof Typed !== 'undefined') {
    new Typed('.typed-text', options);
  }
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
    '.skill-chip',
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
  const navLinks = document.querySelectorAll('.top-nav-links a, .hero-buttons a, .footer-links a[href^="#"]');
  
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
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // 监听滚动以更新活动导航链接
  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();
}

/**
 * 更新活动导航链接
 */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.top-nav-links a');
  
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
      const activeLink = document.querySelector(`.top-nav-links a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
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

      const subject = encodeURIComponent(`Website message from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
      window.location.href = `mailto:jzc_2007@mit.edu?subject=${subject}&body=${body}`;
    });
  }
}
