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
  baseAtividades: "https://olisam2303-ux.github.io/atividades-interativas-processos/",
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
          registros: [["Simulando o ciclo completo", "processos-01.html"]], aula: "" },
        { s: 2, tema: "Técnicas de elicitação de requisitos", tarefaSP: true,
          registros: [["Mini sprint de elicitação", "processos-02.html"]], aula: "" },
        { s: 3, tema: "Manifesto Ágil e seus princípios", tarefaSP: true,
          registros: [["Clínica dos princípios", "processos-03.html"]], aula: "" },
        { s: 4, tema: "Introdução aos testes de software", tarefaSP: true,
          registros: [["Arquiteto de testes do app de mensagens", "processos-04.html"]], aula: "" },
        { s: 5, tema: "Testes funcionais", tarefaSP: true,
          registros: [["Testando um app de quiz", "processos-05.html"]], aula: "" },
        { s: 6, tema: "Validação e verificação de requisitos", tarefaSP: true,
          registros: [["Responder um e-mail sobre requisitos", "processos-06.html"]], aula: "" },
        { s: 7, tema: "Gerenciamento de mudanças em requisitos", tarefaSP: true,
          registros: [["Guardiões do livro de receitas da vovó", "processos-07.html"]], aula: "" }
      ]
    },
    {
      n: 2, titulo: "2º bimestre", semanas: "semanas 8 a 14",
      prova: "", provaPaulista: "",
      itens: [
        { s: 8, tema: "Casos de teste funcional e automação básica", tarefaSP: true,
          registros: [["Escrevendo a receita perfeita para encontrar bugs", "processos-08.html"]], aula: "" },
        { s: 9, tema: "Métricas de qualidade e priorização de testes", tarefaSP: true,
          registros: [["Investigação digital: qualidade dos testes como um detetive", "processos-09.html"]], aula: "" },
        { s: 10, tema: "Cultura ágil e mudança de mentalidade", tarefaSP: true,
          registros: [["O dilema do contrato: traduzindo valores em ações", "processos-10.html"]], aula: "" },
        { s: 11, tema: "Planejamento de release e iterações", tarefaSP: true,
          registros: [["Montando um Sprint backlog viável", "processos-11.html"]], aula: "" },
        { s: 12, tema: "Papéis no Scrum: o Product Owner", tarefaSP: true,
          registros: [["Product Owner: a voz do negócio", "processos-12.html"]], aula: "" },
        { s: 13, tema: "Métricas ágeis: Velocity, Burndown e CFD", tarefaSP: true,
          registros: [["Análise de Cumulative Flow Diagrams (CFD)", "processos-13.html"]], aula: "" },
        { s: 14, tema: "Retrospectiva e melhoria contínua", tarefaSP: true,
          registros: [["Laboratório de retrospectiva e melhoria contínua", "processos-14.html"]], aula: "" }
      ]
    },
    {
      n: 3, titulo: "3º bimestre", semanas: "semanas 15 a 20",
      prova: "", provaPaulista: "",
      itens: [
        { s: 15, tema: "Modelos de processo: cascata, incremental e evolutivo", tarefaSP: true,
          registros: [["Atividade 1 — Modelo em cascata na prática", "processos-15a.html"], ["Atividade 2 — Modelos incremental e evolutivo", "processos-15b.html"]], aula: "" },
        { s: 16, tema: "Manifesto Ágil e papéis do Scrum", tarefaSP: true,
          registros: [["Atividade 1 — Papéis do Scrum: PO, SM e Dev Team", "processos-16a.html"], ["Atividade 2 — Dinâmica “Construindo um produto em papel” (Sprint Zero)", "processos-16b.html"]], aula: "" },
        { s: 17, tema: "Eventos e artefatos do Scrum", tarefaSP: true,
          registros: [["Atividade 1 — Daily Scrum e gestão de impedimentos", "processos-17a.html"], ["Atividade 2 — Sprint Review e Sprint Retrospective", "processos-17b.html"]], aula: "" },
        { s: 18, tema: "Kanban: fluxo contínuo e limites de WIP", tarefaSP: true,
          registros: [["O contrato da equipe", "processos-18.html"]], aula: "" },
        { s: 19, tema: "Estimativas ágeis: story points, velocity e release plan", tarefaSP: true,
          registros: [["Estimando o backlog do nosso aplicativo", "processos-19.html"]], aula: "" },
        { s: 20, tema: "Integração Contínua (CI) e Entrega Contínua (CD)", tarefaSP: true,
          registros: [["Lendo um workflow", "processos-20.html"]], aula: "" }
      ]
    },
    {
      n: 4, titulo: "4º bimestre", semanas: "semana 21 em diante",
      prova: "", provaPaulista: "",
      itens: [
        { s: 21, tema: "Cultura DevOps e feedback contínuo", tarefaSP: true,
          registros: [["Consultoria DevOps: de CALMS ao diagnóstico DORA", "processos-21.html"]],
          aula: "2026-10-09" },
        { s: 22, tema: "Infraestrutura como Código (IaC) com Terraform", tarefaSP: true,
          registros: [["Terraform: de um arquivo simples a uma stack completa", "processos-22.html"]],
          aula: "" },
        { s: 23, tema: "Docker Fundamentals", tarefaSP: true,
          registros: [["Namespaces, cgroups, multi-stage e Compose", "processos-23.html"]],
          aula: "" },
        { s: 24, tema: "Kubernetes Essentials", tarefaSP: true,
          registros: [["Montando a lógica de uma aplicação no Kubernetes", "processos-24.html"]],
          aula: "" },
        { s: 25, tema: "SRE, SLI/SLO e Error Budget", tarefaSP: true,
          registros: [["Calculando SLI, SLO e error budget", "processos-25.html"]],
          aula: "" },
        { s: 26, tema: "DevSecOps - segurança integrada ao pipeline", tarefaSP: true,
          registros: [["SAST, scan de imagem, ZAP e Checkov", "processos-26.html"]],
          aula: "" }
        // Para incluir a próxima semana, copie o bloco acima, cole aqui
        // (separado por vírgula) e troque o número, o tema e o arquivo.
      ]
    }
  ]
};
