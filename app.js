const horario = document.querySelector('#horario');
const resultado = document.querySelector('#resultado');
const reservas = new Set(['10:00']);
const listaReservas = document.querySelector('#lista-reservas');
const disponibilidade = document.querySelector('#disponibilidade');
const situacaoReserva = document.querySelector('#situacao-reserva');
const dialogo = document.querySelector('#cancelamento');
let horarioSelecionadoParaCancelar;

function mostrarDisponibilidade() {
  disponibilidade.textContent = reservas.has(horario.value) ? 'Horário ocupado' : 'Horário livre';
}

function mostrarReservas() {
  listaReservas.replaceChildren();
  if (reservas.size === 0) {
    const item = document.createElement('li');
    item.textContent = 'Nenhuma reserva ativa.';
    listaReservas.append(item);
  }

  for (const hora of [...reservas].sort()) {
    const item = document.createElement('li');
    const cancelar = document.createElement('button');
    cancelar.type = 'button';
    cancelar.className = 'secundario';
    cancelar.textContent = 'Cancelar';
    cancelar.setAttribute('aria-label', 'Cancelar reserva da Sala 1 às ' + hora);
    cancelar.addEventListener('click', () => {
      horarioSelecionadoParaCancelar = hora;
      dialogo.returnValue = '';
      document.querySelector('#pergunta').textContent = 'Cancelar a reserva da Sala 1 às ' + hora + '?';
      dialogo.showModal();
    });
    item.append('Sala 1 · ' + hora + ' ', cancelar);
    listaReservas.append(item);
  }
}

function atualizarTelas() {
  mostrarDisponibilidade();
  mostrarReservas();
}

horario.addEventListener('change', () => {
  resultado.textContent = '';
  mostrarDisponibilidade();
});

document.querySelector('#formulario').addEventListener('submit', (evento) => {
  evento.preventDefault();
  const hora = horario.value;

  if (evento.submitter?.value !== 'reservar') {
    resultado.textContent = reservas.has(hora) ? 'Ocupado' : 'Livre';
  } else if (reservas.has(hora)) {
    resultado.textContent = 'Horário ocupado. Escolha outro horário.';
  } else {
    reservas.add(hora);
    resultado.textContent = 'Reserva confirmada para a Sala 1 às ' + hora + '.';
    situacaoReserva.textContent = '';
    atualizarTelas();
  }
});

dialogo.addEventListener('close', () => {
  const hora = horarioSelecionadoParaCancelar;
  if (dialogo.returnValue === 'confirmar' && reservas.delete(hora)) {
    resultado.textContent = '';
    situacaoReserva.textContent = 'Reserva da Sala 1 às ' + hora + ' cancelada.';
    atualizarTelas();
    document.querySelector('#reiniciar').focus();
  }
});

document.querySelector('#reiniciar').addEventListener('click', () => {
  reservas.clear();
  reservas.add('10:00');
  horario.value = '09:00';
  resultado.textContent = '';
  situacaoReserva.textContent = 'Demonstração reiniciada.';
  atualizarTelas();
});

atualizarTelas();

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
