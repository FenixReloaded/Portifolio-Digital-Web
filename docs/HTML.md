### HTML: Do Básico ao Avançado

O HTML (HyperText Markup Language) não é uma linguagem de programação, mas sim uma  **linguagem de marcação** . Ela descreve a estrutura e o conteúdo de uma página web usando "tags". Pense nela como a planta baixa e o esqueleto de um site.

### **Nível Básico: A Estrutura Fundamental**

Aqui estão as tags essenciais que formam a espinha dorsal de qualquer página web.

#### **Tags de Estrutura do Documento**

* **`<!DOCTYPE html>`**
  * **Explicação:** A primeira linha de todo arquivo HTML. É uma "declaração" que informa ao navegador que o documento é do tipo HTML5. Não é uma tag, mas uma instrução obrigatória.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <!DOCTYPE html>
    ```
  * **Curiosidade:** Versões mais antigas do HTML (como o XHTML 1.0) tinham `DOCTYPEs` extremamente longos e complexos. O `<!DOCTYPE html>` do HTML5 foi uma grande simplificação.
* **`<html>`**
  * **Explicação:** A tag raiz de toda a página. Todo o conteúdo do site deve estar dentro dela. O atributo `lang` é importante para acessibilidade e SEO.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <html lang="pt-BR">
      </html>
    ```
  * **Curiosidade:** A primeira versão do HTML, criada por Tim Berners-Lee em 1991, tinha apenas 18 tags. A `<html>` já era uma delas.
* **`<head>`**
  * **Explicação:** Contém "metadados" sobre a página – informações que não são exibidas diretamente no conteúdo, como o título, links para arquivos CSS, scripts e outras configurações.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <head>
      <meta charset="UTF-8">
      <title>Título da Minha Página</title>
      <link rel="stylesheet" href="style.css">
    </head>
    ```
  * **Curiosidade:** O conteúdo da tag `<title>` é o que aparece na aba do navegador e nos resultados de busca do Google. É uma das tags mais importantes para SEO (Search Engine Optimization).
* **`<body>`**
  * **Explicação:** Contém todo o conteúdo visível da página: textos, imagens, vídeos, links, etc. Só pode existir uma tag `<body>` por documento.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <body>
      <h1>Olá, Mundo!</h1>
      <p>Este é o conteúdo visível do meu site.</p>
    </body>
    ```
  * **Curiosidade:** Em navegadores antigos, era comum usar atributos como `bgcolor` e `text` diretamente na tag `<body>` para estilizar a página. Hoje, essa prática foi completamente substituída pelo CSS.

#### **Tags de Texto e Conteúdo**

* **`<h1>` a `<h6>`**
  * **Explicação:** Títulos (Headings). `<h1>` é o mais importante (título principal da página) e `<h6>` é o menos importante. Eles criam uma hierarquia de informação.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <h1>Título Principal</h1>
    <h2>Um Subtítulo</h2>
    <h3>Outro nível de subtítulo</h3>
    ```
  * **Curiosidade:** Por questões de SEO e acessibilidade, é uma boa prática ter apenas um `<h1>` por página, representando o tópico principal do conteúdo.
* **`<p>`**
  * **Explicação:** Parágrafo. Usada para agrupar blocos de texto.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <p>Este é um parágrafo de texto. Navegadores automaticamente adicionam um espaço antes e depois dele.</p>
    ```
  * **Curiosidade:** Se você colocar múltiplos espaços ou quebras de linha no seu código HTML dentro de um `<p>`, o navegador os renderizará como um único espaço. Para preservar espaços, usa-se a tag `<pre>`.
* **`<a>`**
  * **Explicação:** Âncora (Anchor). Cria um hyperlink. O atributo `href` define o destino do link.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <a href="https://google.com" target="_blank">Visite o Google</a>

    <a href="#contato">Ir para a seção de contato</a>
    ```
  * **Curiosidade:** O atributo `target="_blank"` é usado para abrir o link em uma nova aba. Por segurança, é recomendado sempre usá-lo junto com `rel="noopener noreferrer"`.
* **`<img>`**
  * **Explicação:** Imagem. Insere uma imagem na página. É uma tag "vazia" (não tem fechamento). `src` é o caminho da imagem e `alt` é um texto alternativo essencial para acessibilidade.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <img src="assets/minha-foto.jpg" alt="Descrição da imagem para leitores de tela">
    ```
  * **Curiosidade:** O atributo `alt` não é apenas para acessibilidade. Se a imagem falhar ao carregar, o texto do `alt` será exibido em seu lugar.
* **`<ul>`, `<ol>`, `<li>`**
  * **Explicação:** Usadas para criar listas. `<ul>` (Unordered List) para listas não ordenadas (com marcadores), `<ol>` (Ordered List) para listas ordenadas (com números) e `<li>` (List Item) para cada item da lista.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <ul>
      <li>Café</li>
      <li>Leite</li>
    </ul>
    <ol>
      <li>Primeiro passo</li>
      <li>Segundo passo</li>
    </ol>
    ```
  * **Curiosidade:** Com CSS, você pode customizar completamente os marcadores, usando imagens, mudando a numeração para algarismos romanos (`type="I"`) ou até removendo-os (`list-style: none;`).
* **`<div>` e `<span>`**
  * **Explicação:** Contêineres genéricos. `<div>` (division) é um elemento de bloco, usado para agrupar grandes seções de conteúdo. `<span>` é um elemento em linha, usado para agrupar pequenos trechos de texto dentro de um bloco. Nenhum deles tem valor semântico.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <div class="container-principal">
      <p>Este parágrafo contém uma palavra <span class="destaque">especial</span>.</p>
    </div>
    ```
  * **Curiosidade:** O uso excessivo de `<div>` é tão comum que ganhou um apelido: "divitis". O HTML5 introduziu tags semânticas (como `<section>`, `<article>`) para reduzir essa dependência.

---

### **Nível Intermediário: Semântica e Interatividade**

Estas tags dão mais significado ao seu conteúdo e permitem a interação com o usuário.

#### **HTML Semântico**

Tags que descrevem o significado do seu conteúdo para o navegador e para os mecanismos de busca.

* **`<header>`:** Define um cabeçalho para um documento ou uma seção.
* **`<footer>`:** Define um rodapé.
* **`<nav>`:** Define uma seção com links de navegação.
* **`<main>`:** Especifica o conteúdo principal e único de um documento.
* **`<article>`:** Define um conteúdo autossuficiente (ex: um post de blog, uma notícia).
* **`<section>`:** Define uma seção genérica em um documento (ex: "Sobre", "Contato").
* **`<aside>`:** Define um conteúdo lateral, relacionado ao conteúdo principal (ex: uma barra lateral).
* **Exemplo de Aplicação (Estrutura de um Blog):**
  **HTML**

  ```
  <body>
    <header>
      <h1>Meu Blog</h1>
      <nav>
        <a href="/">Home</a> <a href="/sobre">Sobre</a>
      </nav>
    </header>
    <main>
      <article>
        <h2>Título do Post</h2>
        <p>Conteúdo do post...</p>
      </article>
    </main>
    <aside>
      <h3>Posts Relacionados</h3>
    </aside>
    <footer>
      <p>© 2025 Meu Blog</p>
    </footer>
  </body>
  ```
* **Curiosidade:** Usar tags semânticas melhora drasticamente a acessibilidade. Leitores de tela podem usar essas tags para "pular" diretamente para o conteúdo principal (`<main>`) ou para a navegação (`<nav>`), melhorando a experiência de usuários com deficiência visual.

#### **Formulários e Tabelas**

* **`<form>`, `<input>`, `<label>`, `<textarea>`, `<button>`**
  * **Explicação:** Permitem a coleta de dados do usuário. `<form>` agrupa os campos. `<input>` é o campo de entrada principal (com vários `type` como `text`, `email`, `password`, `checkbox`, `radio`, `submit`). `<label>` descreve o campo. `<textarea>` é para textos longos. `<button>` é um botão.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <form action="/enviar-dados" method="post">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="usuario_nome">

      <label for="msg">Sua Mensagem:</label>
      <textarea id="msg" name="usuario_msg"></textarea>

      <button type="submit">Enviar</button>
    </form>
    ```
  * **Curiosidade:** O atributo `for` na `<label>` deve corresponder ao `id` do `<input>`. Isso não só associa os dois semanticamente, mas também melhora a usabilidade: clicar no label foca ou marca o campo de input correspondente.
* **`<table>`, `<tr>`, `<th>`, `<td>`**
  * **Explicação:** Usadas para exibir dados tabulares. `<table>` cria a tabela. `<tr>` (table row) cria uma linha. `<th>` (table header) cria uma célula de cabeçalho. `<td>` (table data) cria uma célula de dados.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <table>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
      <tr>
        <td>Maria</td>
        <td>30</td>
      </tr>
    </table>
    ```
  * **Curiosidade:** Nos anos 90 e início dos 2000, era comum usar tabelas para criar layouts de sites complexos. Essa prática é hoje considerada terrível para a semântica e acessibilidade, e foi substituída por CSS Flexbox e Grid.

---

### **Nível Avançado: APIs, Desempenho e Acessibilidade**

Tags e atributos modernos que transformam páginas em aplicações web ricas e performáticas.

* **`<audio>` e `<video>`**
  * **Explicação:** Permitem embutir conteúdo de áudio e vídeo diretamente na página, sem depender de plugins como o Flash. O atributo `controls` exibe os controles padrão do navegador.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <video controls width="640">
      <source src="meu-video.mp4" type="video/mp4">
      Seu navegador não suporta a tag de vídeo.
    </video>
    ```
  * **Curiosidade:** A tag `<source>` permite fornecer múltiplos formatos de arquivo. O navegador escolherá o primeiro formato que ele conseguir reproduzir, garantindo maior compatibilidade.
* **`<canvas>` e `<svg>`**
  * **Explicação:** Para gráficos. `<canvas>` permite desenhar gráficos 2D e 3D dinamicamente via JavaScript (baseado em pixels, raster). `<svg>` (Scalable Vector Graphics) define gráficos usando XML (baseado em vetores), ideal para logotipos e ícones que precisam ser escaláveis.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <canvas id="meu-desenho" width="200" height="100"></canvas>

    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    </svg>
    ```
  * **Curiosidade:** `<canvas>` foi originalmente criado pela Apple para uso em seus widgets do Mac OS X Dashboard. Mais tarde, foi adotado como um padrão web.
* **Atributos `async` e `defer` (na tag `<script>`)**
  * **Explicação:** Otimizam o carregamento de scripts. Por padrão, quando o navegador encontra um `<script>`, ele para de renderizar a página para baixar e executar o script.

    * `async`: Baixa o script em paralelo, mas executa assim que o download termina (podendo parar a renderização).
    * `defer`: Baixa o script em paralelo e só o executa depois que toda a página for analisada. É geralmente a melhor opção.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <script src="meu-script.js" defer></script>
    ```
  * **Curiosidade:** Usar `defer` é uma das maneiras mais fáceis e eficazes de melhorar a percepção de velocidade de carregamento de um site.
* **Atributo `loading="lazy"` (na tag `<img>` e `<iframe>`)**
  * **Explicação:** Instrução nativa do navegador para adiar o carregamento de imagens e iframes que estão fora da tela inicial (abaixo da "dobra"). Eles só serão carregados quando o usuário rolar a página para perto deles.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <img src="imagem-pesada.jpg" alt="..." loading="lazy">
    ```
  * **Curiosidade:** Antes desse atributo, o "lazy loading" só era possível com bibliotecas JavaScript complexas. Implementá-lo nativamente no HTML foi um grande avanço para o desempenho da web.
* **`<details>` e `<summary>`**
  * **Explicação:** Criam um widget "sanfona" (accordion) nativo, que o usuário pode abrir e fechar para ver mais informações.
  * **Exemplo de Aplicação:**
    **HTML**

    ```
    <details>
      <summary>Clique para ver os detalhes</summary>
      <p>Aqui está o conteúdo escondido que aparece ao clicar.</p>
    </details>
    ```
  * **Curiosidade:** É uma tag puramente de HTML que cria interatividade sem precisar de uma única linha de JavaScript.

---

### **Ferramentas Essenciais do Ecossistema HTML**

* **Validador da W3C**
  * **O que é:** Uma ferramenta online oficial para verificar se seu código HTML tem erros e está de acordo com os padrões da web.
  * **Como usar:** Acesse [validator.w3.org](https://validator.w3.org/) e cole seu código, envie o arquivo ou insira a URL do site.
  * **Por que é importante:** Garante que sua página será interpretada corretamente pela maioria dos navegadores e ajuda a encontrar erros difíceis de ver.
* **MDN Web Docs (Mozilla Developer Network)**
  * **O que é:** A documentação mais completa e confiável para todas as tecnologias web, incluindo HTML, CSS e JavaScript.
  * **Como usar:** Quando tiver dúvida sobre uma tag ou atributo, pesquise no Google "mdn `<nome-da-tag>`".
  * **Por que é importante:** É a fonte de verdade para desenvolvedores web, com explicações detalhadas, exemplos e informações de compatibilidade entre navegadores.
* **Emmet**
  * **O que é:** Um plugin presente na maioria dos editores de código (como o VS Code) que permite escrever HTML muito mais rápido usando abreviações.
  * **Como usar:** Em um arquivo `.html`, digite uma abreviação e pressione `Tab`.
  * **Exemplos de Aplicação:**
    * `!` ou `html:5` + `Tab` cria a estrutura básica do HTML5.
    * `ul>li*5` + `Tab` cria uma lista não ordenada com 5 itens.
    * `div.container>h1+p` + `Tab` cria uma div com a classe "container" contendo um `h1` e um `p`.
  * **Por que é importante:** Aumenta drasticamente a produtividade e reduz o esforço de digitação.

---

---
