# DEPLOY.md

Архив уже собран как единый проект. Ничего вручную объединять не нужно.

## Загрузка в GitHub

1. Распакуйте архив.
2. Откройте папку своего репозитория `utp-frameworks`.
3. Скопируйте в неё всё содержимое распакованного архива.
4. Если система спросит о замене файлов — подтвердите замену.
5. Выполните:

```bash
git add .
git commit -m "Redesign portfolio and add FocusBoard"
git push
```

## GitHub Pages

В настройках репозитория:

```text
Settings → Pages → Branch: main → Folder: /root
```

## После загрузки

Проверьте:

- главную страницу `/`;
- главный проект `/projects/focus-board/`;
- архив лабораторных `/labs/`;
- старые пути `/works/utp/1/tasku1.html` и `/works/frameworks/8/index.html`.

## Рекомендуемые настройки репозитория

Description:

```text
Minimal frontend portfolio with HTML, CSS, JavaScript and FocusBoard project.
```

Website:

```text
https://Wiledjer.github.io/utp-frameworks/
```

Topics:

```text
html css javascript portfolio frontend github-pages localstorage responsive-design
```
