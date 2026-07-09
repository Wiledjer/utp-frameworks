# DEPLOY.md

Архив уже собран как единый проект. Внутри есть новое портфолио, новый проект FocusBoard и твои настоящие лабораторные из `works/`.

## Загрузка в GitHub

1. Распакуй архив.
2. Открой папку `utp-frameworks-final-real-labs`.
3. Скопируй **всё содержимое этой папки** в корень своего репозитория `utp-frameworks`.
4. Если система спросит о замене файлов — подтверди замену.
5. Выполни:

```bash
git add .
git commit -m "Redesign portfolio and keep original labs"
git push
```

## GitHub Pages

В настройках репозитория:

```text
Settings → Pages → Branch: main → Folder: /root
```

## Что проверить после загрузки

```text
/                                  главная страница портфолио
/projects/focus-board/             новый главный проект
/labs/                             красивый каталог лабораторных
/works/                            старый архив работ
/works/utp/1/tasku1.html            оригинальная УТП работа №1
/works/frameworks/8/index.html      оригинальный УютМаркет
```

## Рекомендуемые настройки репозитория

Description:

```text
Minimal frontend portfolio with HTML, CSS, JavaScript, Bootstrap and FocusBoard project.
```

Website:

```text
https://Wiledjer.github.io/utp-frameworks/
```

Topics:

```text
html css javascript bootstrap portfolio frontend github-pages localstorage responsive-design
```
