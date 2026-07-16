const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const salarySlider = document.getElementById('salarySlider');
const salaryVal = document.getElementById('salaryVal');
const calcNec = document.getElementById('calcNec');
const calcDes = document.getElementById('calcDes');
const calcAho = document.getElementById('calcAho');

function formatCurrency(amount) {
    return '$' + amount.toLocaleString('es-CO') + ' COP';
}

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });

    const targetContent = document.getElementById('content-' + tabId);
    if (targetContent) {
        targetContent.classList.remove('hidden');
    }

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-crema-light', 'text-vinotinto-dark', 'font-bold');
        btn.classList.add('text-softgray');
    });

    const activeBtn = document.getElementById('btn-' + tabId);
    if (activeBtn) {
        activeBtn.classList.add('bg-crema-light', 'text-vinotinto-dark', 'font-bold');
        activeBtn.classList.remove('text-softgray');
    }
}

if (mobileMenuBtn && mobileMenu && menuIcon) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');

        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        } else {
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

document.querySelectorAll('[data-tab]').forEach(button => {
    button.addEventListener('click', () => switchTab(button.dataset.tab));
});

if (salarySlider && salaryVal && calcNec && calcDes && calcAho) {
    salarySlider.addEventListener('input', event => {
        const rawVal = parseInt(event.target.value, 10);
        const needs = Math.round(rawVal * 0.50);
        const desires = Math.round(rawVal * 0.30);
        const savings = Math.round(rawVal * 0.20);

        salaryVal.textContent = formatCurrency(rawVal);
        calcNec.textContent = formatCurrency(needs);
        calcDes.textContent = formatCurrency(desires);
        calcAho.textContent = formatCurrency(savings);
    });
}
