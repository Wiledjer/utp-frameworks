# Frontend Portfolio — UTP Frameworks

Готовая цельная версия портфолио для репозитория `utp-frameworks`.

## Демо

После загрузки в GitHub Pages сайт будет доступен по адресу:

```text
https://Wiledjer.github.io/utp-frameworks/
```

## Что внутри

- **Главная страница портфолио** — минималистичная витрина работ, навыков и главного проекта.
- **FocusBoard** — новый главный проект: панель задач с фильтрами, статусами, темой и `localStorage`.
- **Лабораторные работы** — аккуратный раздел `labs/` с учебными работами.
- **Старые пути `works/...`** — уже включены в архив как совместимые страницы, чтобы старые ссылки не ломались.
- **404.html** — страница ошибки для GitHub Pages.
- **DEPLOY.md** — короткая инструкция по загрузке в репозиторий.

## Технологии

```text
HTML5 · CSS3 · JavaScript · GitHub Pages · LocalStorage · Responsive Design
```

## Структура

```text
.
├── index.html
├── 404.html
├── README.md
├── DEPLOY.md
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   └── img/
├── projects/
│   └── focus-board/
├── labs/
│   ├── index.html
│   ├── utp/
│   └── frameworks/
└── works/
    ├── utp/
    └── frameworks/
```

## Главный проект: FocusBoard

**FocusBoard** — компактная учебная dashboard-страница для задач и дедлайнов.

Возможности:

- добавление задач;
- удаление задач;
- статусы `Todo`, `In Progress`, `Done`;
- фильтрация по статусу;
- сохранение данных в `localStorage`;
- переключение светлой/тёмной темы;
- адаптивная вёрстка.

## Как залить на GitHub Pages

1. Распакуйте архив.
2. Скопируйте всё содержимое архива в корень репозитория `utp-frameworks`.
3. Сделайте commit и push:

```bash
git add .
git commit -m "Redesign portfolio and add FocusBoard project"
git push
```

4. В настройках GitHub Pages выберите ветку `main` и папку `/root`.

## Рекомендованные GitHub topics

```text
html css javascript portfolio frontend github-pages localstorage responsive-design
```

## Лицензия

MIT
