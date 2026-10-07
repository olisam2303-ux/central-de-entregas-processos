/* ============================================================
   CENTRAL DE ENTREGAS — PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE
   Este é o ÚNICO arquivo que o professor precisa editar.

   COMO COLOCAR O PRAZO DE UMA SEMANA
   Escreva a data da AULA da semana no formato "AAAA-MM-DD".
   Exemplo:  aula: "2026-10-16"
   A central soma sozinha os dias de prazo (diasPrazo, logo abaixo) e
   mostra ao aluno até quando a entrega vale nota cheia.
   Deixe "" quando ainda não houver data: a central mostra "prazo a definir".

   COMO CADASTRAR O TEMA DE UMA SEMANA NOVA
   Troque o texto de  tema: "..."  e, quando a atividade estiver publicada,
   coloque o título e o arquivo dentro de  registros: [["Título", "arquivo.html"]].

   COMO DESLIGAR A TAREFA SP DE UMA SEMANA
   Troque  tarefaSP: true  por  tarefaSP: false  na linha da semana.
   ============================================================ */

const CENTRAL = {
  disciplina: "Processos de Desenvolvimento de Software",

  // Endereço das atividades interativas já publicadas (não precisa mexer).
  baseAtividades: "https://olisam2303-ux.github.io/apostila-processos-interativa/",
  apostila: "https://olisam2303-ux.github.io/apostila-processos-interativa/",
  apostilaDrawio: "https://olisam2303-ux.github.io/apostila-drawio-iniciantes/",

  // Regra de prazo: dias corridos, contados a partir da data da aula.
  // Dentro do prazo vale nota cheia; depois vale metade; não entregue vale zero.
  diasPrazo: 5,

  // Como a nota do bimestre é fechada (os pesos precisam somar 100).
  pesos: [
    { id: "tarefa",   nome: "Tarefas SP",              peso: 20 },
    { id: "paulista", nome: "Prova Paulista Técnica",  peso: 30 },
    { id: "ava",      nome: "AVA (Pause e Responda + Registro de Aula)", peso: 25 },
    { id: "escrita",  nome: "Prova escrita",           peso: 25 }
  ],

  // Ferramenta de estudo para a prova escrita.
  notebookLM: "https://notebooklm.google.com/",

  // Qual bimestre abre primeiro quando o aluno entra na central (1 a 4).
  bimestreAtual: 4,

  bimestres: [
    {
      n: 1, titulo: "1º bimestre", semanas: "semanas 1 a 7",
      prova: "", provaPaulista: "",
      itens: [
        { s: 1, tema: "Requisitos: o ciclo de um requisito", tarefaSP: true,
          registros: [["Atividades da Semana 1", "semana-01-requisitos.html"]], aula: "" },
        { s: 2, tema: "Técnicas de elicitação de requisitos", tarefaSP: true,
          registros: [["Atividades da Semana 2", "semana-02-elicitacao.html"]], aula: "" },
        { s: 3, tema: "Manifesto Ágil e seus princípios", tarefaSP: true,
          registros: [["Atividades da Semana 3", "semana-03-manifesto-agil.html"]], aula: "" },
        { s: 4, tema: "Introdução aos testes de software", tarefaSP: true,
          registros: [["Atividades da Semana 4", "semana-04-introducao-testes.html"]], aula: "" },
        { s: 5, tema: "Testes funcionais", tarefaSP: true,
          registros: [["Atividades da Semana 5", "semana-05-testes-funcionais.html"]], aula: "" },
        { s: 6, tema: "Validação e verificação de requisitos", tarefaSP: true,
          registros: [["Atividades da Semana 6", "semana-06-validacao-verificacao.html"]], aula: "" },
        { s: 7, tema: "Gerenciamento de mudanças em requisitos", tarefaSP: true,
          registros: [["Atividades da Semana 7", "semana-07-gerenciamento-mudancas.html"]], aula: "" }
      ]
    },
    {
      n: 2, titulo: "2º bimestre", semanas: "semanas 8 a 14",
      prova: "", provaPaulista: "",
      itens: [
        { s: 8, tema: "Casos de teste funcional e automação básica", tarefaSP: true,
          registros: [["Atividades da Semana 8", "semana-08-casos-de-teste.html"]], aula: "" },
        { s: 9, tema: "Métricas de qualidade e priorização de testes", tarefaSP: true,
          registros: [["Atividades da Semana 9", "semana-09-metricas-qualidade.html"]], aula: "" },
        { s: 10, tema: "Cultura ágil e mudança de mentalidade", tarefaSP: true,
          registros: [["Atividades da Semana 10", "semana-10-cultura-agil.html"]], aula: "" },
        { s: 11, tema: "Planejamento de release e iterações", tarefaSP: true,
          registros: [["Atividades da Semana 11", "semana-11-release-iteracoes.html"]], aula: "" },
        { s: 12, tema: "Papéis no Scrum: o Product Owner", tarefaSP: true,
          registros: [["Atividades da Semana 12", "semana-12-papeis-scrum-po.html"]], aula: "" },
        { s: 13, tema: "Métricas ágeis: Velocity, Burndown e CFD", tarefaSP: true,
          registros: [["Atividades da Semana 13", "semana-13-metricas-ageis.html"]], aula: "" },
        { s: 14, tema: "Retrospectiva e melhoria contínua", tarefaSP: true,
          registros: [["Atividades da Semana 14", "semana-14-retrospectiva.html"]], aula: "" }
      ]
    },
    {
      n: 3, titulo: "3º bimestre", semanas: "semanas 15 a 20",
      prova: "", provaPaulista: "",
      itens: [
        { s: 15, tema: "Modelos de processo: cascata, incremental e evolutivo", tarefaSP: true,
          registros: [["Atividades da Semana 15", "semana-15-modelos-processo.html"]], aula: "" },
        { s: 16, tema: "Manifesto Ágil e papéis do Scrum", tarefaSP: true,
          registros: [["Atividades da Semana 16", "semana-16-manifesto-papeis-scrum.html"]], aula: "" },
        { s: 17, tema: "Eventos e artefatos do Scrum", tarefaSP: true,
          registros: [["Atividades da Semana 17", "semana-17-eventos-artefatos-scrum.html"]], aula: "" },
        { s: 18, tema: "Kanban: fluxo contínuo e limites de WIP", tarefaSP: true,
          registros: [["Atividades da Semana 18", "semana-18-kanban-wip.html"]], aula: "" },
        { s: 19, tema: "Estimativas ágeis: story points, velocity e release plan", tarefaSP: true,
          registros: [["Atividades da Semana 19", "semana-19-estimativas-ageis.html"]], aula: "" },
        { s: 20, tema: "Integração Contínua (CI) e Entrega Contínua (CD)", tarefaSP: true,
          registros: [["Atividades da Semana 20", "semana-20-ci-cd.html"]], aula: "" }
      ]
    },
    {
      n: 4, titulo: "4º bimestre", semanas: "semana 21 em diante",
      prova: "", provaPaulista: "",
      itens: [
        { s: 21, tema: "Tema a cadastrar pelo professor", tarefaSP: true,
          registros: [],
          aula: "2026-10-09" }
        // Para incluir a próxima semana, copie o bloco acima, cole aqui
        // (separado por vírgula) e troque o número, o tema e o arquivo.
      ]
    }
  ]
};
