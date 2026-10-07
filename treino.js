/* Perguntas de treino para a prova escrita, por tema.
   Chave = "bimestre-passo" do arquivo conteudo.js.
   sem = semanas da SEDUC que o tema cobre; q = perguntas dissertativas. */
var TREINO = {
  "1-1": { sem: [1, 2], q: [
    "Qual é a diferença entre requisito funcional e requisito não funcional? Dê um exemplo de cada.",
    "O que é elicitação de requisitos? Cite três técnicas.",
    "Por que é importante conversar com quem vai usar o sistema antes de começar a construir?" ] },
  "1-2": { sem: [3], q: [
    "O que o Manifesto Ágil propõe? Explique com as suas palavras.",
    "Qual é a vantagem de entregar o software em partes pequenas e frequentes?",
    "Dê um exemplo de situação em que responder a uma mudança é melhor do que seguir o plano original." ] },
  "1-3": { sem: [4, 5], q: [
    "Para que servem os testes de software?",
    "Explique a diferença entre teste unitário, teste de integração e teste de aceitação.",
    "Para o requisito \"a senha deve ter de 8 a 20 caracteres\", escreva três testes funcionais com a entrada e o resultado esperado." ] },
  "1-4": { sem: [6, 7], q: [
    "Qual é a diferença entre verificação e validação?",
    "Por que uma mudança de requisito precisa ser analisada antes de ser feita?",
    "Quais informações um pedido de mudança deve conter?" ] },
  "2-1": { sem: [8, 9], q: [
    "Quais são as partes de um caso de teste?",
    "Cite duas métricas de qualidade e explique o que cada uma mostra.",
    "Sem tempo para testar tudo, como decidir o que testar primeiro?" ] },
  "2-2": { sem: [10, 11], q: [
    "O que muda na forma de trabalhar de um time que adota a cultura ágil?",
    "Qual é a diferença entre release e iteração?",
    "Como se decide o que entra na primeira iteração de um projeto?" ] },
  "2-3": { sem: [12], q: [
    "Qual é a responsabilidade do Product Owner?",
    "O que é o Product Backlog e como ele é ordenado?",
    "Escreva uma história de usuário no formato Como, quero, para." ] },
  "2-4": { sem: [13], q: [
    "O que é velocity e para que ela serve?",
    "O que o gráfico de burndown mostra? Como ele fica quando a sprint está atrasada?",
    "Um time concluiu 12, 16 e 14 pontos em três sprints. Qual é a velocity média?" ] },
  "2-5": { sem: [14], q: [
    "Para que serve a retrospectiva?",
    "Quais são as três perguntas básicas de uma retrospectiva?",
    "Por que uma ação de melhoria precisa de responsável e prazo?" ] },
  "3-1": { sem: [15], q: [
    "Explique o modelo cascata e cite uma vantagem e uma desvantagem.",
    "Qual é a diferença entre o modelo incremental e o evolutivo?",
    "Que modelo você indicaria para um projeto em que os requisitos mudam muito? Justifique." ] },
  "3-2": { sem: [16, 17], q: [
    "Quais são os três papéis do Scrum e o que cada um faz?",
    "Cite os eventos do Scrum e a finalidade de cada um.",
    "Qual é a diferença entre Product Backlog e Sprint Backlog?" ] },
  "3-3": { sem: [18], q: [
    "O que é um quadro Kanban?",
    "O que significa limitar o WIP e por que isso ajuda o time?",
    "O que uma coluna sempre cheia indica sobre o processo?" ] },
  "3-4": { sem: [19], q: [
    "O que é um story point? Por que ele não é medido em horas?",
    "Como funciona o Planning Poker?",
    "Um backlog tem 45 pontos e a velocity do time é 15. Quantas sprints são necessárias?" ] },
  "3-5": { sem: [20], q: [
    "O que é Integração Contínua (CI)?",
    "Qual é a diferença entre CI e Entrega Contínua (CD)?",
    "Descreva as etapas de um pipeline simples e o que acontece quando um teste falha." ] }
};
