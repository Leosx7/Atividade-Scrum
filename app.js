const horario = document.querySelector('#horario');
const resultado = document.querySelector('#resultado');

document.querySelector('#formulario').addEventListener('submit', (evento) => {
  evento.preventDefault();
  resultado.textContent = horario.value === '10:00' ? 'Ocupado' : 'Livre';
});
