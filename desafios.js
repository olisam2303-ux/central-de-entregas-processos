/* Desafios do Nível avançado e perguntas do teste de preparo. */
/* quiz: [pergunta, código ou null, [alternativas], índice da correta] */
var NIVEIS = [
  { id: "n1", nome: "Nível 1 — Requisitos e testes", sub: "Descobrir o que o sistema precisa fazer e como conferir se ele faz.",
    onde: "Usa um editor de texto ou planilha.",
    quiz: [
      ["Qual destes é um requisito funcional?", null, ["O sistema deve responder em até 2 segundos", "O sistema deve permitir cadastrar clientes", "O sistema deve funcionar no navegador Chrome", "O sistema deve usar as cores da marca"], 1],
      ["Qual é o formato de uma história de usuário?", null, ["Se, então, senão", "Entrada, processamento, saída", "Como [quem], quero [o quê], para [por quê]", "Início, meio e fim"], 2],
      ["Qual pergunta a validação responde?", null, ["Estamos construindo o produto certo?", "O código está bem indentado?", "Quantas linhas o programa tem?", "Quem escreveu o código?"], 0],
      ["O que um teste funcional confere?", null, ["A velocidade da internet", "A beleza da tela", "O tamanho do arquivo", "Se o sistema faz o que o requisito pede"], 3],
      ["O que é um critério de aceitação?", null, ["O preço do sistema", "A condição que diz quando uma história está pronta", "O nome do cliente", "A linguagem de programação usada"], 1]
    ],
    desafios: [
      { n: 1, t: "Documento de requisitos de um aplicativo",
        missao: "Escolha um problema real da escola ou do bairro e escreva os requisitos de um aplicativo que o resolva.",
        req: ["8 requisitos funcionais e 4 não funcionais, numerados.", "Quem pediu cada requisito e por qual técnica ele foi descoberto.", "Pelo menos uma entrevista de verdade, com as perguntas e as respostas."],
        fogo: ["Um colega lê cada requisito e entende a mesma coisa que você.", "Nenhum requisito usa palavras vagas como rápido ou fácil sem um número ou exemplo.", "Cada requisito pode ser testado."],
        bonus: "Desenhe a tela principal do aplicativo no draw.io." },
      { n: 2, t: "Histórias de usuário priorizadas",
        missao: "Transforme os requisitos do desafio 1 em histórias de usuário, com critérios de aceitação e ordem de prioridade.",
        req: ["Pelo menos 8 histórias no formato Como, quero, para.", "2 ou 3 critérios de aceitação por história.", "Prioridade em quatro grupos: indispensável, importante, desejável e fica para depois."],
        fogo: ["Cada história entrega algo que o usuário percebe.", "O grupo indispensável, sozinho, já forma um aplicativo que funciona.", "Outra pessoa consegue dizer se uma história está pronta lendo os critérios."],
        bonus: "Apresente o backlog a um colega no papel de cliente e ajuste a ordem conforme o retorno dele." },
      { n: 3, t: "Plano de testes de uma tela",
        missao: "Escreva o plano de testes da tela de cadastro do seu aplicativo.",
        req: ["Pelo menos 8 casos de teste com identificação, pré-condição, passos e resultado esperado.", "Testes de valores no limite e fora do limite.", "Uma coluna para marcar se o teste passou ou falhou."],
        fogo: ["Há pelo menos um teste para campo vazio.", "Há pelo menos um teste para valor inválido (por exemplo, e-mail sem arroba).", "Um colega consegue executar os testes sem pedir explicação."],
        bonus: "Aplique o plano em um site ou aplicativo de verdade e registre os defeitos encontrados." }
    ] },
  { id: "n2", nome: "Nível 2 — Scrum na prática", sub: "Planejar, executar e avaliar uma sprint de verdade, em equipe.",
    onde: "Trabalho em grupo de 3 a 5 pessoas.",
    quiz: [
      ["Quem ordena o Product Backlog no Scrum?", null, ["O Scrum Master", "O cliente final", "O Product Owner", "O desenvolvedor mais experiente"], 2],
      ["Qual é a duração máxima da reunião diária?", null, ["15 minutos", "1 hora", "30 minutos", "O tempo que for preciso"], 0],
      ["O que o gráfico de burndown mostra?", null, ["O salário do time", "Quantas pessoas faltaram", "O número de reuniões", "O trabalho que falta ao longo da sprint"], 3],
      ["O que é velocity?", null, ["A velocidade da internet do time", "A quantidade de pontos concluídos por sprint", "O tempo de uma reunião", "O número de defeitos"], 1],
      ["Para que serve a retrospectiva?", null, ["Mostrar o produto ao cliente", "Escolher as histórias da sprint", "Melhorar a forma de trabalhar do time", "Calcular o custo do projeto"], 2]
    ],
    desafios: [
      { n: 4, t: "Backlog estimado com Planning Poker",
        missao: "Em grupo, estime as histórias do backlog em story points.",
        req: ["Cartas com a sequência 1, 2, 3, 5, 8 e 13.", "Todos revelam a carta ao mesmo tempo.", "Registro das histórias em que houve diferença e do que o grupo conversou."],
        fogo: ["Nenhuma história ficou sem estimativa.", "Histórias com 13 pontos foram divididas em menores.", "Qualquer integrante consegue explicar por que uma história vale mais que outra."],
        bonus: "Calcule em quantas sprints o backlog cabe, supondo uma velocity e explicando a suposição." },
      { n: 5, t: "Uma sprint de uma semana",
        missao: "Execute uma sprint de 5 dias para construir uma parte do projeto (pode ser um protótipo ou um documento).",
        req: ["Meta da sprint escrita em uma frase.", "Quadro com as colunas A fazer, Fazendo e Feito, atualizado todo dia.", "Registro de 3 reuniões diárias de até 15 minutos.", "Gráfico de burndown desenhado dia a dia."],
        fogo: ["O quadro do último dia confere com o que foi entregue.", "O burndown foi atualizado nos 5 dias, mesmo quando a linha não desceu.", "Cada reunião diária registrou o que foi feito, o que será feito e os impedimentos."],
        bonus: "Faça a revisão da sprint apresentando o resultado a outra equipe e anote o retorno." },
      { n: 6, t: "Retrospectiva com plano de ação",
        missao: "Conduza a retrospectiva da sprint do desafio 5.",
        req: ["Três listas: o que foi bem, o que pode melhorar e o que faremos diferente.", "Todos os integrantes contribuem com pelo menos um item.", "Uma ou duas ações de melhoria com responsável e prazo."],
        fogo: ["As ações são coisas que o próprio time pode fazer.", "Nenhum item culpa uma pessoa: todos falam do processo.", "Na sprint seguinte, o time confere se a ação foi cumprida."],
        bonus: "Experimente outro formato de retrospectiva e compare os dois." }
    ] },
  { id: "n3", nome: "Nível 3 — Fluxo e entrega", sub: "Enxergar o processo inteiro, medir e melhorar.",
    onde: "Usa o draw.io e um quadro de tarefas (pode ser o GitHub Projects ou papel).",
    quiz: [
      ["O que é o limite de WIP?", null, ["O prazo final do projeto", "O máximo de itens em andamento ao mesmo tempo", "O número de pessoas do time", "O tamanho do backlog"], 1],
      ["O que é lead time?", null, ["O tempo de uma reunião", "A duração da sprint", "O tempo de estudo do time", "O tempo desde o pedido até a entrega"], 3],
      ["O que a Integração Contínua (CI) faz?", null, ["Junta e testa automaticamente cada mudança no código", "Substitui o Product Owner", "Aumenta o prazo do projeto", "Apaga os testes antigos"], 0],
      ["Como funciona o modelo cascata?", null, ["Tudo é feito ao mesmo tempo", "Não existe planejamento", "As fases acontecem em sequência, uma depois da outra", "O cliente participa todos os dias"], 2],
      ["O que um story point mede?", null, ["As horas trabalhadas", "O tamanho relativo de uma história", "O número de linhas de código", "O salário do desenvolvedor"], 1]
    ],
    desafios: [
      { n: 7, t: "Quadro Kanban com limite de WIP",
        missao: "Monte um quadro Kanban para um trabalho de verdade e use-o por duas semanas.",
        req: ["Pelo menos 4 colunas, com limite de WIP em Fazendo.", "Data de entrada e de saída anotada em cada cartão.", "Cálculo do lead time de pelo menos 5 cartões."],
        fogo: ["O limite de WIP foi respeitado, ou cada quebra foi registrada com o motivo.", "O lead time médio foi calculado corretamente.", "O grupo apontou o gargalo do processo usando o quadro."],
        bonus: "Mude um limite de WIP, use por mais uma semana e compare o lead time." },
      { n: 8, t: "O processo em um diagrama",
        missao: "Desenhe no draw.io o caminho de uma funcionalidade, da ideia até a entrega, incluindo o pipeline de CI/CD.",
        req: ["As etapas: ideia, requisito, desenvolvimento, teste, revisão e entrega.", "O pipeline com compilar, testar e publicar.", "O caminho de volta quando um teste falha."],
        fogo: ["Uma pessoa de fora entende o processo só olhando o diagrama.", "Toda seta tem origem e destino claros.", "O diagrama mostra quem é responsável por cada etapa."],
        bonus: "Marque no diagrama onde o processo costuma atrasar e proponha uma melhoria." },
      { n: 9, t: "Projeto integrador: um mini produto em duas sprints",
        missao: "Em equipe, planeje e entregue um mini produto em duas sprints, usando tudo o que foi estudado.",
        req: ["Requisitos, backlog priorizado e estimado.", "Plano de testes executado.", "Quadro, burndown das duas sprints e velocity.", "Retrospectiva de cada sprint com ação de melhoria."],
        fogo: ["A segunda sprint aplicou a ação de melhoria da primeira.", "O que foi entregue confere com o que estava marcado como feito.", "Cada integrante explica o seu papel e uma decisão que o time tomou."],
        bonus: "Apresente o resultado para a turma como uma revisão de sprint, com perguntas da plateia." }
    ] }
];
