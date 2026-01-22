// 平滑滚动
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 考虑导航栏高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 导航栏滚动效果
function navbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'white';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// 滚动动画
function scrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 为所有需要动画的元素添加初始样式
    const animatedElements = document.querySelectorAll('section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// 表单提交处理
function handleFormSubmission() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 收集表单数据
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // 简单的表单验证
            if (!data.name || !data.company || !data.email || !data.phone) {
                alert('请填写所有必填字段');
                return;
            }
            
            // 模拟表单提交
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '提交中...';
            submitBtn.disabled = true;
            
            // 模拟异步请求
            setTimeout(function() {
                alert('表单提交成功！我们将尽快与您联系。');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// 计数器动画
function counterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateCounters() {
        if (animated) return;
        
        counters.forEach(counter => {
            const target = counter.textContent;
            const isPlus = target.includes('+');
            const hasDecimal = target.includes('.');
            const hasTenThousand = target.includes('万');
            
            // 提取数字，保留小数点
            const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
            
            let current = 0;
            const duration = 2000;
            const startTime = performance.now();
            
            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                current = progress * numericTarget;
                
                if (hasTenThousand) {
                    counter.textContent = (current / 10000).toFixed(1) + '万+';
                } else if (isPlus) {
                    counter.textContent = Math.floor(current) + '+';
                } else if (hasDecimal) {
                    counter.textContent = current.toFixed(1);
                } else if (target === '秒级') {
                    counter.textContent = '秒级';
                } else {
                    counter.textContent = Math.floor(current);
                }
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }
            
            requestAnimationFrame(updateCounter);
        });
        
        animated = true;
    }
    
    // 监听滚动，当统计区域进入视口时触发动画
    const statsSection = document.querySelector('.overview-stats');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    smoothScroll();
    navbarScrollEffect();
    scrollAnimation();
    handleFormSubmission();
    counterAnimation();
    
    console.log('智能仿真系统页面加载完成！');
});

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});