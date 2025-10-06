### **JavaScript: Do Básico ao Avançado**

JavaScript (JS) é a **linguagem de programação** que dá vida às páginas web. Enquanto HTML estrutura e CSS estiliza, JS controla o comportamento, a interatividade, a manipulação de dados e a comunicação com servidores.

---

### **Nível Básico: Fundamentos da Linguagem**

* **Variáveis e Tipos de Dados**
  * **Explicação:** Variáveis são "contêineres" para armazenar dados. Use `let` para variáveis que podem mudar e `const` para constantes. Os tipos primitivos são `string` (texto), `number` (números), `boolean` (true/false), `null` e `undefined`.
  * **Exemplo de Aplicação:**
    **JavaScript**

    ```
    const nome = "Maria"; // String
    let idade = 30; // Number
    const estaAprovada = true; // Boolean

    idade = 31; // 'let' pode ser reatribuído
    // nome = "Joana"; // Erro! 'const' não pode ser reatribuído.
    ```
  * **Curiosidade:** JavaScript foi notoriamente criado por Brendan Eich em apenas 10 dias em 1995. Seu nome original era "Mocha", depois "LiveScript", e foi renomeado para "JavaScript" como uma jogada de marketing para se associar à popularidade do Java na época, embora as linguagens sejam completamente diferentes.
* **Funções**
  * **Explicação:** Blocos de código reutilizáveis que realizam uma tarefa específica. Elas podem receber "parâmetros" (entradas) e "retornar" um valor (saída).
  * **Exemplo de Aplicação:**
    **JavaScript**

    ```
    function somar(a, b) {
      return a + b;
    }

    const resultado = somar(5, 3); // resultado será 8
    console.log(resultado);
    ```
  * **Curiosidade:** Funções em JavaScript são "cidadãs de primeira classe", o que significa que podem ser tratadas como qualquer outro valor: podem ser armazenadas em variáveis, passadas como argumentos para outras funções e retornadas por outras funções.
* **Estruturas Condicionais e Loops**
  * **Explicação:** `if/else` permite que o código tome decisões. Loops como `for` e `while` permitem repetir uma ação várias vezes.
  * **Exemplo de Aplicação:**
    **JavaScript**

    ```
    let temperatura = 25;

    if (temperatura > 30) {
      console.log("Está muito quente!");
    } else {
      console.log("Temperatura agradável.");
    }

    for (let i = 1; i <= 5; i++) {
      console.log("Contando: " + i);
    }
    ```
  * **Curiosidade:** O operador `===` (igualdade estrita) é preferível ao `==` (igualdade ampla). O `===` verifica tanto o valor quanto o tipo, evitando conversões inesperadas. Por exemplo, `7 == "7"` é `true`, mas `7 === "7"` é `false`.

---

### **Nível Intermediário: Interagindo com a Página (DOM)**

* **O DOM (Document Object Model)**
  * **Explicação:** É uma representação em árvore do seu documento HTML. O JavaScript pode usar o DOM para acessar, modificar, adicionar ou remover qualquer elemento e conteúdo da página.
  * **Exemplo de Aplicação:** Acessar o DOM é o primeiro passo para qualquer manipulação.
  * **Curiosidade:** O DOM não é parte da linguagem JavaScript em si; é uma API (Interface de Programação de Aplicação) fornecida pelos navegadores para que linguagens como o JavaScript possam interagir com a página.
* **Selecionando e Manipulando Elementos**
  * **Explicação:** Use métodos como `document.querySelector()` para selecionar um elemento (usando seletores CSS) e propriedades como `.textContent` e `.style` para manipulá-lo.
  * **Exemplo de Aplicação:**
    **JavaScript**

    ```
    // Seleciona o primeiro h1 da página
    const titulo = document.querySelector('h1');

    // Altera o texto
    titulo.textContent = "Título Alterado com JS!";

    // Altera o estilo
    titulo.style.color = 'red';
    ```
  * **Curiosidade:** `innerHTML` é uma propriedade similar a `textContent`, mas ela interpreta strings como HTML, o que a torna poderosa, mas também perigosa. Usá-la com dados inseridos por usuários pode abrir uma brecha de segurança chamada Cross-Site Scripting (XSS).
* **Eventos**
  * **Explicação:** Eventos são ações que acontecem na página (um clique de mouse, o envio de um formulário, o pressionar de uma tecla). Você pode "ouvir" esses eventos e executar uma função quando eles ocorrerem.
  * **Exemplo de Aplicação:**
    **JavaScript**

    ```
    const botao = document.querySelector('#meu-botao');

    botao.addEventListener('click', function() {
      alert('Você clicou no botão!');
    });
    ```
  * **Curiosidade:** O método `addEventListener` pode ter um terceiro argumento, um objeto de opções. Uma opção útil é `{ once: true }`, que faz com que o evento seja acionado apenas uma vez e depois se remova automaticamente.

---

### **Nível Avançado: Padrões Modernos e Assincronismo**

* **JavaScript Assíncrono (Promises, async/await)**
  * **Explicação:** JavaScript é "single-threaded" (só faz uma coisa de cada vez). Operações demoradas, como buscar dados de um servidor, bloqueariam a página inteira. O código assíncrono permite que essas operações ocorram em segundo plano. `Promises` representam um valor que pode estar disponível agora, no futuro ou nunca. `async/await` é uma sintaxe mais moderna e legível para trabalhar com Promises.
  * **Exemplo de Aplicação (usando a Fetch API):**
    **JavaScript**

    ```
    async function buscarDadosDoGitHub() {
      try {
        const resposta = await fetch('https://api.github.com/users/google');
        const dados = await resposta.json();
        console.log(dados.name); // Exibe "Google"
      } catch (erro) {
        console.error("Falha ao buscar dados:", erro);
      }
    }

    buscarDadosDoGitHub();
    ```
  * **Curiosidade:** O conceito de "Callback Hell" (Inferno dos Callbacks) descreve o código aninhado e difícil de ler que era comum antes da introdução das Promises. Cada função assíncrona recebia outra função (o callback) como argumento, levando a uma estrutura de código em "pirâmide".
* **ES6+ (ECMAScript 2015 e além)**
  * **Explicação:** ECMAScript é o padrão no qual o JavaScript se baseia. A partir de 2015 (ES6), a linguagem começou a receber atualizações anuais com muitas melhorias, como `let`/`const`, Arrow Functions, Template Literals, e muito mais.
  * **Exemplo de Aplicação (Arrow Function e Template Literals):**
    **JavaScript**

    ```
    const nomes = ["Ana", "Bia", "Carlos"];

    // Arrow function no método map
    const saudacoes = nomes.map(nome => `Olá, ${nome}!`);

    console.log(saudacoes); // ['Olá, Ana!', 'Olá, Bia!', 'Olá, Carlos!']
    ```
  * **Curiosidade:** Arrow functions (`=>`) não apenas têm uma sintaxe mais curta, mas também se comportam de maneira diferente em relação à palavra-chave `this`, o que resolve uma das fontes mais comuns de bugs e confusão no JavaScript "clássico".
* **Módulos (Import/Export)**
  * **Explicação:** Permitem dividir seu código em arquivos menores e reutilizáveis. Você pode `export`ar funções, variáveis ou classes de um arquivo e `import`á-las em outro.
  * **Exemplo de Aplicação:**
    **JavaScript**

    ```
    // Em um arquivo helpers.js
    export function somar(a, b) {
      return a + b;
    }

    // Em outro arquivo main.js
    import { somar } from './helpers.js';
    console.log(somar(10, 5)); // 15
    ```
  * **Curiosidade:** Por razões de segurança, os módulos JS no navegador só funcionam se o HTML que os chama for carregado com o atributo `type="module"` na tag `<script>`.
