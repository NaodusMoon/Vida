const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const salarySlider = document.getElementById('salarySlider');
const salaryVal = document.getElementById('salaryVal');
const calcNec = document.getElementById('calcNec');
const calcDes = document.getElementById('calcDes');
const calcAho = document.getElementById('calcAho');

const evidenceData = {
    fase1: {
        label: 'Fase 1: Diagnóstico',
        title: 'Definición del estilo de vida',
        summary: 'Estas capturas muestran la primera conversación con la IA, donde se definieron las preguntas base sobre vivienda, transporte, alimentación, pasatiempos, viajes y ahorro.',
        items: [
            ['evidencia-01.webp', 'Prompt inicial para pedirle a la IA cinco preguntas sobre la vida ideal a los 25 años.'],
            ['evidencia-02.webp', 'Pregunta sobre vivienda, ciudad, zona y tipo de apartamento deseado.'],
            ['evidencia-03.webp', 'Preguntas sobre alimentación, gastos de ocio, viajes, ahorro y mascotas.'],
            ['evidencia-04.webp', 'Respuesta personal sobre vivir sola en Bogotá y construir una vida independiente.'],
            ['evidencia-05.webp', 'Respuesta sobre transporte, alimentación y hábitos cotidianos.'],
            ['evidencia-06.webp', 'Respuesta sobre viajes a pueblos de Colombia, naturaleza y meta de ir a Japón.'],
            ['evidencia-07.webp', 'Primer resumen de presupuesto mensual según las respuestas entregadas.'],
            ['evidencia-08.webp', 'Estimación de ahorro, viajes y salario ideal para vivir con tranquilidad.'],
            ['evidencia-09.webp', 'Plan temprano para empezar desde los 18 años con bases académicas y laborales.'],
            ['evidencia-10.webp', 'Reflexión inicial sobre la viabilidad del estilo de vida planteado.']
        ]
    },
    fase2: {
        label: 'Fase 2: Costos reales',
        title: 'Investigación de precios y gastos',
        summary: 'En esta fase se le pidió a la IA aterrizar los costos reales de vivienda, servicios, alimentación, transporte y entretenimiento en Bogotá.',
        items: [
            ['evidencia-11.webp', 'Prompt para investigar arriendos, servicios, comida, transporte y entretenimiento.'],
            ['evidencia-12.webp', 'Solicitud de sumar pasatiempos, plataformas y salidas con amigos.'],
            ['evidencia-13.webp', 'Respuesta sobre manualidades, restaurantes, parques y entretenimiento moderado.'],
            ['evidencia-14.webp', 'Estimación del arriendo y servicios para una persona en el sur de Bogotá.'],
            ['evidencia-15.webp', 'Cálculo de alimentación, mercado y primeros datos de transporte.'],
            ['evidencia-16.webp', 'Rangos de transporte usando bicicleta y pasajes ocasionales.'],
            ['evidencia-17.webp', 'Estimación de entretenimiento y pasatiempos personales.'],
            ['evidencia-18.webp', 'Tabla final de presupuesto mensual recomendado por categoría.']
        ]
    },
    fase3: {
        label: 'Fase 3: Cifra central',
        title: 'Cálculo del ingreso mensual',
        summary: 'Aquí se consolidó el presupuesto con la regla 50/30/20, incluyendo inflación e imprevistos para obtener la cifra mensual requerida.',
        items: [
            ['evidencia-19.webp', 'Pregunta sobre el salario que debería ganar para cubrir el presupuesto.'],
            ['evidencia-20.webp', 'Prompt para aplicar la regla 50/30/20 y añadir inflación e imprevistos.'],
            ['evidencia-21.webp', 'Primera parte de la tabla con necesidades y subtotal.'],
            ['evidencia-22.webp', 'Cálculo de deseos, ahorro y subtotal antes de inflación.'],
            ['evidencia-23.webp', 'Total mensual con inflación e imprevistos: $4.422.000 COP.'],
            ['evidencia-24.webp', 'Tabla visual de distribución por porcentaje.'],
            ['evidencia-25.webp', 'Continuación de porcentajes y cierre del cálculo total.'],
            ['evidencia-26.webp', 'Conclusión de la cifra central y margen recomendado.']
        ]
    },
    fase4: {
        label: 'Fase 4: Ruta profesional',
        title: 'Empleo, educación y formación desde hoy',
        summary: 'Estas evidencias muestran la búsqueda de carreras, salarios, cursos gratuitos y acciones concretas para alcanzar el ingreso necesario.',
        items: [
            ['evidencia-27.webp', 'Prompt para buscar carreras o habilidades que cubran la cifra mensual requerida.'],
            ['evidencia-28.webp', 'Solicitud de cursos gratuitos con certificación para empezar desde el colegio.'],
            ['evidencia-29.webp', 'Recomendación de carreras y habilidades que pueden cubrir o superar el ingreso meta.'],
            ['evidencia-30.webp', 'Comparación inicial de medicina, enfermería y atención prehospitalaria.'],
            ['evidencia-31.webp', 'Habilidades digitales y complementarias con buena proyección laboral.'],
            ['evidencia-32.webp', 'Ruta gratuita desde hoy con Cruz Roja y voluntariado juvenil.'],
            ['evidencia-33.webp', 'Opciones del SENA y programas gratuitos del sector salud.'],
            ['evidencia-34.webp', 'Ruta recomendada para los 18 años y próximos pasos de formación.'],
            ['evidencia-35.webp', 'Reflexión final del chat sobre disciplina, formación y decisiones financieras.']
        ]
    }
};

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

function renderEvidenceCarousel(container) {
    const phase = evidenceData[container.dataset.phase];
    if (!phase) {
        return;
    }

    let currentIndex = 0;
    const total = phase.items.length;
    container.innerHTML = `
        <div class="evidence-frame">
            <img src="" alt="" loading="lazy" decoding="async">
        </div>
        <div class="evidence-panel">
            <div class="space-y-4">
                <span class="evidence-kicker"><i data-lucide="image"></i>${phase.label}</span>
                <div>
                    <h3 class="font-display font-bold text-2xl text-vinotinto-dark">${phase.title}</h3>
                    <p class="text-softgray text-sm leading-relaxed mt-2">${phase.summary}</p>
                </div>
                <div class="evidence-question"></div>
            </div>
            <div class="carousel-controls">
                <button class="carousel-button" type="button" data-action="prev">
                    <i data-lucide="arrow-left"></i> Anterior
                </button>
                <span class="carousel-counter"></span>
                <button class="carousel-button" type="button" data-action="next">
                    Siguiente <i data-lucide="arrow-right"></i>
                </button>
            </div>
        </div>
    `;

    const image = container.querySelector('img');
    const question = container.querySelector('.evidence-question');
    const counter = container.querySelector('.carousel-counter');

    function updateCarousel() {
        const [fileName, description] = phase.items[currentIndex];
        image.src = `assets/img/webp/${fileName}`;
        image.alt = `${phase.label}, evidencia ${currentIndex + 1}: ${description}`;
        question.textContent = description;
        counter.textContent = `${currentIndex + 1} / ${total}`;
    }

    container.querySelector('[data-action="prev"]').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + total) % total;
        updateCarousel();
    });

    container.querySelector('[data-action="next"]').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % total;
        updateCarousel();
    });

    updateCarousel();
}

function initRevealAnimations() {
    const animatedItems = document.querySelectorAll('main section, footer, main .brutal-border, main .border');
    animatedItems.forEach(item => item.classList.add('reveal'));

    const cardItems = document.querySelectorAll('main .brutal-border, main .border, footer');
    cardItems.forEach(item => item.classList.add('motion-card'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    animatedItems.forEach(item => observer.observe(item));
}

function initBudgetTable() {
    const rows = [...document.querySelectorAll('.budget-row')];
    if (!rows.length) {
        return;
    }

    const maxValue = Math.max(...rows.map(row => Number(row.dataset.max || 0)));

    rows.forEach((row, index) => {
        const rowMax = Number(row.dataset.max || 0);
        const width = Math.max(8, Math.round((rowMax / maxValue) * 100));
        row.style.setProperty('--budget-width', `${width}%`);

        row.addEventListener('mouseenter', () => {
            rows.forEach(item => item.classList.remove('is-active'));
            row.classList.add('is-active');
        });

        row.addEventListener('click', () => {
            rows.forEach(item => item.classList.remove('is-active'));
            row.classList.add('is-active');
        });

        if (index === 0) {
            row.classList.add('is-active');
        }
    });
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

document.querySelectorAll('.evidence-carousel').forEach(renderEvidenceCarousel);

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

initRevealAnimations();
initBudgetTable();

if (window.lucide) {
    window.lucide.createIcons();
}
