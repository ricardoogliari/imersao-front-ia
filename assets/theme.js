// Dark/Light Mode Toggle
const ThemeToggle = {
  // Elementos
  get htmlElement() {
    return document.documentElement;
  },

  get toggleButton() {
    return document.getElementById('theme-toggle');
  },

  get currentTheme() {
    return localStorage.getItem('theme') || this.getPreferredTheme();
  },

  // Detecta preferência do navegador
  getPreferredTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  },

  // Inicializa o tema ao carregar a página
  init() {
    const theme = this.currentTheme;
    this.setTheme(theme);

    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => this.toggle());
    }

    // Detecta mudanças de preferência do sistema
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        this.setTheme(newTheme);
      });
  },

  // Define o tema
  setTheme(theme) {
    this.htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (this.toggleButton) {
      const isDark = theme === 'dark';
      this.toggleButton.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
      this.toggleButton.textContent = isDark ? '☀️' : '🌙';
    }
  },

  // Alterna entre temas
  toggle() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  },
};

// Inicializa quando o DOM está pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ThemeToggle.init();
  });
} else {
  ThemeToggle.init();
}
