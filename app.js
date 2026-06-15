// Halle41 Dashboard - app.js
// Entry point for interactive dashboard enhancements and widgets.

console.log('Halle41 Dashboard app.js loaded');

// Simple helper to mount a demo widget
export function mountDemoWidget(container){
  const el = document.createElement('div');
  el.className = 'tw';
  el.style.padding = '18px';
  el.innerHTML = '<h3 style="margin-bottom:8px">Demo Widget</h3><p class="muted">Platzhalter für zukünftige Widgets.</p>';
  container.appendChild(el);
}

// More functions (data fetching, chart init) will be added as we expand the dashboard.
