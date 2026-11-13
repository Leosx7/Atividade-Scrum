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

const cenario = document.querySelector('#cenario');
const backlog = document.querySelector('#backlog');
const prioridades = {
  inicial: {
    itens: ['Enviar lembrete', 'Cancelar reserva', 'Personalizar cores'],
    motivo: 'Cinco estudantes chegaram atrasados. Um lembrete aproveita as notificações que o aplicativo já consegue enviar.'
  },
  revisado: {
    itens: ['Cancelar reserva', 'Enviar lembrete', 'Personalizar cores'],
    motivo: 'Oito reservas ficaram sem uso. O cancelamento devolve esses horários à lista de vagas.'
  }
};

function mostrarPrioridades() {
  const { itens, motivo } = prioridades[cenario.value];
  const lista = document.createElement('ol');
  for (const item of itens) {
    const linha = document.createElement('li');
    linha.textContent = item;
    lista.append(linha);
  }
  const justificativa = document.createElement('p');
  justificativa.textContent = motivo;
  backlog.replaceChildren(lista, justificativa);
}

cenario.addEventListener('change', mostrarPrioridades);
mostrarPrioridades();

const suporte = document.querySelector('#suporte');
const acesso = document.querySelector('#acesso');

suporte.addEventListener('click', () => {
  acesso.textContent = 'Acesso restabelecido na simulação. O teste de cancelamento pode ser retomado.';
  suporte.disabled = true;
});
