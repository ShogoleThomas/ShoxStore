document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-btn');
    
    faqButtons.forEach(button => {
      button.addEventListener('click', function() {
        const faqItem = this.parentElement;
        
        // Toggle 'active' class to show or hide the answer
        faqItem.classList.toggle('active');
        
        // Close other FAQ answers (if you want one answer open at a time)
        document.querySelectorAll('.faq-item').forEach(item => {
          if (item !== faqItem) {
            item.classList.remove('active');
          }
        });
      });
    });
  });
  
  