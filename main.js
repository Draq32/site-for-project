// ========== ФУНКЦИИ НАВИГАЦИИ И МЕНЮ ==========

// Переключение мобильного меню
function toggleMenu() {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    }
}

// Плавная прокрутка к разделу
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== ФУНКЦИИ СТАТЕЙ ==========

// Открытие полной страницы статьи
function expandArticle(button) {
    const article = button.closest('.article-card');
    if (!article) return;

    // ID статьи на основе порядка или атрибута data-article-id
    const articleId = article.getAttribute('data-article-id') || '1';
    const articlePage = `article-${articleId}.html`;

    console.log('Переход на страницу статьи:', articlePage);
    window.location.href = articlePage;
}

// FAQ: открыть/закрыть ответ
function toggleFAQ(button) {
    const item = button.closest('.faq-item');
    if (!item) return;

    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));

    if (!isOpen) {
        item.classList.add('open');
    }
}

// Фильтрация статей по категории
function filterByCategory(element) {
    event.preventDefault();
    const category = element.textContent;
    alert(`Фильтрация по категории: ${category}`);
    console.log('Выбрана категория:', category);
}

// ========== ФУНКЦИИ САЙДБАРА ==========

// Подписка на рассылку
function subscribeNewsletter() {
    const emailInput = document.querySelector('.newsletter-input');
    const email = emailInput.value.trim();
    
    if (email) {
        if (isValidEmail(email)) {
            alert(`✓ Спасибо! Вы подписались на рассылку.\nEmail: ${email}`);
            emailInput.value = '';
            console.log('Подписка успешна:', email);
        } else {
            alert('Пожалуйста, введите корректный email адрес');
        }
    } else {
        alert('Пожалуйста, введите ваш email адрес');
    }
}

// Проверка корректности email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

document.addEventListener('DOMContentLoaded', function() {
    console.log('✓ Сайт блога загружен');
    
    // Добавляем анимацию к элементам при загрузке
    const animatedItems = document.querySelectorAll('.card, .recipe-card, .faq-item');
    animatedItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `fadeIn 0.6s ease ${index * 0.05}s forwards`;
    });
    
    // Добавляем обработчик для закрытия мобильного меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.querySelector('.nav');
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
});

// Добавляем анимацию fadeIn в стили динамически
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========== СОБЫТИЯ ОКНА ==========

// Адаптивность при изменении размера окна
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const nav = document.querySelector('.nav');
        if (nav) {
            nav.style.display = '';
        }
    }
});

// Логирование при загрузке страницы
window.addEventListener('load', function() {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✓ Сайт полностью загружен');
    console.log('✓ Все интерактивные элементы готовы');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});