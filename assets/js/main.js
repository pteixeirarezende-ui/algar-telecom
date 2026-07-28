    // 1. Header Blur on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }, { passive: true });

    // 2. Scroll Reveal Animations (Entra e Sai)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        } else {
          entry.target.classList.remove('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-scale, .reveal-fade').forEach(el => {
      observer.observe(el);
    });

    // 3. Particles generation
    const container = document.getElementById('particles');
    if (container) {
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const startX = Math.random() * 100;
        const duration = Math.random() * 8 + 4;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
          position: absolute;
          bottom: -10px;
          left: ${startX}%;
          width: ${size}px;
          height: ${size}px;
          background: ${Math.random() > 0.5 ? 'var(--color-primary-light)' : 'rgba(255,255,255,0.5)'};
          border-radius: 50%;
          opacity: 0;
          animation: particle-float ${duration}s ease-in ${delay}s infinite;
        `;
        container.appendChild(particle);
      }
    }

    // 4. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      const body = item.querySelector('.faq-body');
      
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all
        faqItems.forEach(faq => {
          faq.classList.remove('active');
          faq.querySelector('.faq-body').style.maxHeight = null;
        });
        
        // Open clicked if it wasn't active
        if (!isActive) {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
