// Datos de ejemplo
const partidos = [
  { fecha: "13/07/2025", rival: "Deportivo Unión", lugar: "Estadio Municipal", hora: "16:00" },
  { fecha: "20/07/2025", rival: "Atlético Sur", lugar: "Cancha Los Álamos", hora: "18:00" }
];

const resultados = [
  "Academia FC 2 - 1 Deportivo Norte (06/07/2025)",
  "Academia FC 1 - 1 Real Amigos (29/06/2025)"
];

// Insertar partidos
const tbody = document.getElementById('partidos-tbody');
partidos.forEach(p => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${p.fecha}</td><td>${p.rival}</td><td>${p.lugar}</td><td>${p.hora}</td>`;
  tbody.appendChild(tr);
});

// Insertar resultados
const ul = document.getElementById('resultados-list');
resultados.forEach(r => {
  const li = document.createElement('li');
  li.textContent = r;
  ul.appendChild(li);
});

// Header dinamico al hacer scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});