const infoData = {
  food: {
    title: 'Продукты питания',
    subtitle: 'Свежие товары на каждый день',
    image: 'img/food.png',
    color: 'success',
    text: 'В этом разделе находятся молочные продукты, хлеб, овощи, фрукты, крупы и готовые наборы для завтрака. Доставка продуктов доступна в день заказа.',
    items: ['Молоко 2,5% — 89 ₽', 'Хлеб зерновой — 65 ₽', 'Яблоки — 140 ₽/кг', 'Набор «Завтрак» — 890 ₽']
  },
  chem: {
    title: 'Бытовая химия',
    subtitle: 'Средства для чистоты дома',
    image: 'img/chem.png',
    color: 'primary',
    text: 'Здесь можно выбрать средства для стирки, уборки, мытья посуды и ухода за домом. Для удобства товары разделены по назначению.',
    items: ['Гель для стирки — 420 ₽', 'Средство для посуды — 160 ₽', 'Салфетки для уборки — 95 ₽', 'Набор «Чистый дом» — 1 290 ₽']
  },
  tech: {
    title: 'Бытовая техника',
    subtitle: 'Полезная техника для кухни и дома',
    image: 'img/tech.png',
    color: 'secondary',
    text: 'В разделе представлены электрочайники, блендеры, пылесосы и мелкая техника. На товары действует гарантия 12 месяцев.',
    items: ['Электрочайник — 1 990 ₽', 'Мини-блендер — 2 990 ₽', 'Пылесос — 7 490 ₽', 'Тостер — 2 390 ₽']
  }
};

function showInfo(sectionName) {
  const data = infoData[sectionName];
  const infoContent = document.querySelector('#infoContent');

  infoContent.innerHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-md-4 text-center">
        <img src="${data.image}" class="img-fluid rounded-4 shadow-sm" alt="${data.title}">
      </div>
      <div class="col-md-8">
        <span class="badge text-bg-${data.color} mb-2">${data.subtitle}</span>
        <h2 class="fw-bold mb-3">${data.title}</h2>
        <p class="text-secondary fs-5">${data.text}</p>
        <ul class="list-group list-group-flush mb-3">
          ${data.items.map(item => `<li class="list-group-item px-0"><i class="bi bi-check-circle text-${data.color} me-2"></i>${item}</li>`).join('')}
        </ul>
        <a href="#" class="btn btn-${data.color}">Добавить в корзину</a>
        <a href="#delivery" class="btn btn-outline-${data.color} ms-2">Условия доставки</a>
      </div>
    </div>
  `;

  document.querySelectorAll('.info-link').forEach(link => link.classList.remove('active'));
  document.querySelectorAll(`.info-link[data-section="${sectionName}"]`).forEach(link => link.classList.add('active'));
}

document.querySelectorAll('.info-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showInfo(link.dataset.section);
  });
});

document.querySelectorAll('.catalog-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    showInfo('food');
  });
});
document.querySelectorAll('.needs-validation').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();

    const result = form.querySelector('.form-result');

    if (form.checkValidity()) {
      form.classList.remove('was-validated');
      if (result) result.classList.remove('d-none');
      form.reset();
    } else {
      if (result) result.classList.add('d-none');
      form.classList.add('was-validated');
    }
  });
});

showInfo('food');
