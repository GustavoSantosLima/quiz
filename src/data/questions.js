const data = [
  {
    category: "HTML",
    questions: [
      {
        question:
          "Qual é a tag HTML usada para criar um hiperlink para outra página ou para um endereço de email?",
        options: ["<link>", "<a>", "<hyperlink>", "<url>"],
        answer: "<a>"
      },
      {
        question:
          "Como você pode especificar o tipo de documento HTML sendo usado em uma página?",
        options: [
          "<doctype html>",
          '<document type="html">',
          '<html type="doctype">',
          '<type doctype="html">'
        ],
        answer: "<doctype html>"
      },
      {
        question:
          "Qual é a tag HTML usada para criar um cabeçalho de nível 1 na página?",
        options: ["<header1>", "<head1>", "<h1>", "<heading1>"],
        answer: "<h1>"
      },
      {
        question: "Como você pode adicionar uma imagem à sua página HTML?",
        options: [
          '<img src="image.jpg">',
          '<picture src="image.jpg">',
          '<image src="image.jpg">',
          '<img source="image.jpg">'
        ],
        answer: '<img src="image.jpg">'
      },
      {
        question: "Qual é a tag HTML usada para criar uma lista não ordenada?",
        options: ["<ul>", "<dl>", "<ol>", "<li>"],
        answer: "<ul>"
      }
    ]
  },
  {
    category: "CSS",
    questions: [
      {
        question:
          "Qual propriedade CSS é usada para mudar a cor de fundo de um elemento?",
        options: [
          "background-color",
          "color-background",
          "color",
          "background-fill"
        ],
        answer: "background-color"
      },
      {
        question:
          "Como você pode centralizar um elemento horizontalmente na página?",
        options: [
          "text-center",
          "center-text",
          "margin: 0 auto;",
          "align-center"
        ],
        answer: "margin: 0 auto;"
      },
      {
        question:
          "Qual é o seletor CSS que seleciona todos os elementos filhos diretos de um elemento pai específico?",
        options: [">", "+", "~", "*"],
        answer: ">"
      },
      {
        question:
          "Como você pode especificar várias regras CSS para um mesmo seletor?",
        options: [
          "Separar cada regra com um ponto e vírgula",
          "Separar cada regra com uma vírgula",
          "Escrever cada regra em uma linha diferente",
          "Envolver todas as regras em colchetes"
        ],
        answer: "Separar cada regra com um ponto e vírgula"
      },
      {
        question:
          "Como você pode tornar um elemento invisível na página, mas mantê-lo ocupando espaço na página?",
        options: [
          "visibility: hidden;",
          "display: none;",
          "opacity: 0;",
          "visibility: collapse;"
        ],
        answer: "visibility: hidden;"
      }
    ]
  },
  {
    category: "JAVASCRIPT",
    questions: [
      {
        question:
          "Como você pode exibir uma mensagem de alerta na tela usando JavaScript?",
        options: [
          'notify("Mensagem");',
          'alert("Mensagem");',
          'prompt("Mensagem");',
          'msg("Mensagem");'
        ],
        answer: 'alert("Mensagem");'
      },
      {
        question:
          "Como você pode armazenar uma string em uma variável em JavaScript?",
        options: [
          'var name = "string";',
          'name = "string";',
          'variable name = "string";',
          'string name = "variable";'
        ],
        answer: 'var name = "string";'
      },
      {
        question:
          "Como você pode adicionar dois números inteiros usando JavaScript?",
        options: ["sum(a, b);", "total(a, b);", "add(a, b);", "a + b;"],
        answer: "a + b;"
      },
      {
        question: "Qual é a sintaxe para criar uma função em JavaScript?",
        options: [
          "myFunction() {}",
          "function myFunction() {}",
          "function = myFunction() {}",
          "myFunction = function() {}"
        ],
        answer: "function myFunction() {}"
      },
      {
        question:
          "Como você pode obter o valor de um elemento de input de um formulário na página usando JavaScript?",
        options: [
          "inputValue(element);",
          "getInputValue(element);",
          "element.value;",
          "value(element);"
        ],
        answer: "element.value;"
      }
    ]
  }
];

export default data;
