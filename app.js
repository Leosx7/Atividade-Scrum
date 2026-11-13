const horario = document.querySelector('#horario');
const resultado = document.querySelector('#resultado');
const reservas = { '10:00': 'Ana' };

document.querySelector('#formulario').addEventListener('submit', (evento) => {
  evento.preventDefault();
  const hora = horario.value;

  if (evento.submitter?.value !== 'reservar') {
    resultado.textContent = reservas[hora] ? 'Ocupado' : 'Livre';
  } else if (reservas[hora]) {
    resultado.textContent = 'Horário ocupado. Escolha outro horário.';
  } else {
    reservas[hora] = 'Estudante';
    resultado.textContent = 'Reserva confirmada.';
  }
});
