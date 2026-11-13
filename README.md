# Reservas da Biblioteca

Protótipo acadêmico de Engenharia de Software. Abra `index.html` no navegador.

## Atividade 1 · Introdução ao Scrum

Consulta dos três horários da Sala 1. Às 9h e 11h, a sala está livre. Às 10h, está ocupada. No primeiro rascunho, uma consulta ao horário ocupado deixava a resposta vazia. Depois da inspeção, passei a mostrar “Ocupado”.

## Atividade 2 · Papéis, artefatos e eventos

A meta da Sprint é reservar um horário livre sem duplicar reservas. O Product Backlog começa com reservar, cancelar e enviar lembrete. O Sprint Backlog inclui montar as telas e testar os horários livre e ocupado. A Reunião Diária apontou que faltava tratar o horário ocupado. Na Revisão, surgiu a sugestão de exibir a disponibilidade junto da escolha. Na Retrospectiva, decidi escrever os casos de teste antes de desenhar as telas.

## Atividade 3 · Product Owner

O seletor de cenários demonstra a mudança de prioridade. Com cinco atrasos, o lembrete vinha primeiro. Ao descobrir que oito reservas ficaram sem uso, o cancelamento passou à frente porque devolve vagas à consulta.

## Atividade 4 · Scrum Master

O acesso da conta de teste foi bloqueado. O Scrum Master aciona o suporte, e os Developers adiantam o roteiro em papel. O painel simula a liberação. O teste seguinte verifica a confirmação de cancelamento e a atualização da disponibilidade.

## Atividade 5 · Time Scrum

A reserva e a consulta usam a mesma agenda. Na simulação original, a reserva aparecia cancelada, mas o horário continuava ocupado. Agora, confirmar remove a reserva e libera a vaga. Voltar fecha a confirmação e preserva a reserva.

### Como demonstrar

1. Abra `index.html`. Consulte 9h e 10h. A reserva inicial de Ana é às 10h.
2. Reserve 9h e tente reservar novamente. A segunda tentativa deve ser recusada.
3. Em “Minhas reservas”, abra o cancelamento das 10h e escolha “Voltar”. A consulta deve continuar mostrando “Ocupado”.
4. Repita e escolha “Confirmar”. Consulte 10h de novo. O resultado deve ser “Livre”.
5. Use “Reiniciar demonstração” para voltar à agenda inicial. A agenda da demonstração fica na memória da página.

## Histórico de entrega

As cinco versões estão marcadas no Git com as tags `atividade-01` até `atividade-05`. No GitHub, abra **Commits** no repositório e copie o link da versão que corresponde a cada atividade.
