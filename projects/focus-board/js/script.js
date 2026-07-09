const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const form = document.querySelector('[data-task-form]');
const list = document.querySelector('[data-tasks-list]');
const filterButtons = document.querySelectorAll('[data-filter]');
const totalCount = document.querySelector('[data-total-count]');
const activeCount = document.querySelector('[data-active-count]');
const doneCount = document.querySelector('[data-done-count]');
const progressValue = document.querySelector('[data-progress-value]');
const progressCaption = document.querySelector('[data-progress-caption]');

function createId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

const defaultTasks = [
  {
    id: createId(),
    title: 'Собрать структуру портфолио',
    description: 'Главная страница, раздел лабораторных и новый проект.',
    status: 'done',
  },
  {
    id: createId(),
    title: 'Сделать адаптивный hero-блок',
    description: 'Проверить отображение на телефоне и на десктопе.',
    status: 'progress',
  },
  {
    id: createId(),
    title: 'Обновить README',
    description: 'Добавить описание, технологии и инструкцию по запуску.',
    status: 'todo',
  },
];

let tasks = loadTasks();
let currentFilter = 'all';

function loadTasks() {
  const saved = localStorage.getItem('focus-board-tasks');

  try {
    return saved ? JSON.parse(saved) : defaultTasks;
  } catch {
    return defaultTasks;
  }
}

function saveTasks() {
  localStorage.setItem('focus-board-tasks', JSON.stringify(tasks));
}

function getStatusLabel(status) {
  const labels = {
    todo: 'Todo',
    progress: 'In Progress',
    done: 'Done',
  };

  return labels[status] || 'Todo';
}

function getFilteredTasks() {
  if (currentFilter === 'all') {
    return tasks;
  }

  return tasks.filter((task) => task.status === currentFilter);
}

function updateStats() {
  const total = tasks.length;
  const done = tasks.filter((task) => task.status === 'done').length;
  const active = tasks.filter((task) => task.status !== 'done').length;
  const progress = total ? Math.round((done / total) * 100) : 0;

  totalCount.textContent = total;
  activeCount.textContent = active;
  doneCount.textContent = done;
  progressValue.textContent = `${progress}%`;
  progressCaption.textContent = total ? `${done} из ${total} завершено` : 'Нет задач';
}

function renderTasks() {
  const visibleTasks = getFilteredTasks();

  updateStats();

  if (!visibleTasks.length) {
    list.innerHTML = '<div class="empty-state">Нет задач для выбранного фильтра.</div>';
    return;
  }

  list.innerHTML = visibleTasks
    .map(
      (task) => `
        <article class="task-card">
          <div>
            <h3>${escapeHtml(task.title)}</h3>
            <p>${escapeHtml(task.description || 'Без описания')}</p>
            <div class="task-card__meta">
              <span class="badge badge--${task.status}">${getStatusLabel(task.status)}</span>
            </div>
          </div>
          <div class="task-card__actions">
            <button class="task-action" type="button" data-next-status="${task.id}">Статус</button>
            <button class="task-action" type="button" data-delete="${task.id}">Удалить</button>
          </div>
        </article>
      `,
    )
    .join('');
}

function addTask(formData) {
  const task = {
    id: createId(),
    title: formData.get('title').trim(),
    description: formData.get('description').trim(),
    status: formData.get('status'),
  };

  tasks.unshift(task);
  saveTasks();
  renderTasks();
}

function moveToNextStatus(id) {
  const order = ['todo', 'progress', 'done'];
  tasks = tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    const currentIndex = order.indexOf(task.status);
    const nextStatus = order[(currentIndex + 1) % order.length];

    return { ...task, status: nextStatus };
  });

  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('focus-board-theme', theme);
  themeToggle.textContent = theme === 'dark' ? 'Светлая тема' : 'Тёмная тема';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(new FormData(form));
  form.reset();
});

list.addEventListener('click', (event) => {
  const statusButton = event.target.closest('[data-next-status]');
  const deleteButton = event.target.closest('[data-delete]');

  if (statusButton) {
    moveToNextStatus(statusButton.dataset.nextStatus);
  }

  if (deleteButton) {
    deleteTask(deleteButton.dataset.delete);
  }
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

setTheme(localStorage.getItem('focus-board-theme') || 'light');
renderTasks();
