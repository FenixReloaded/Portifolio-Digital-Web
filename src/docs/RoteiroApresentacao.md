# Oficina: Criando Seu Portfólio Pessoal com HTML, CSS Flexbox e Javascript

**Objetivo:** Construir um portfólio web de uma página, moderno, responsivo e funcional, utilizando as tecnologias fundamentais do desenvolvimento frontend.

**Tecnologias:**

* **HTML5:** Para a estrutura e o conteúdo.
* **CSS3:** Para a estilização, layout e responsividade.
* **JavaScript (JS):** Para adicionar uma leve interatividade, no menu mobile e outros detalhes.

---

### **Etapa 1: Introdução, Preparação do Ambiente e Estrutura Base HTML (25 minutos)**

#### 1.1. Iniciando o projeto

* Antes de começar, precisamos organizar nosso espaço de trabalho.

1. **Crie uma pasta principal** para o projeto. Chame-a de `meu-portfolio`.
2. **Abra a pasta `meu-portfolio` no seu editor de código** (recomendamos o VS Code).

#### **1.2. Preparação do Ambiente (5 min)**

**Dentro de `meu-portfolio`**, crie os seguintes arquivos e pastas:* `index.html` (nosso arquivo principal)

* `style.css` (onde ficará nosso estilo personalizado)
* `script.js` (para nossa interatividade)
* Uma pasta chamada `assets` (para guardar imagens).

Sua estrutura de pastas deve ficar assim:

* meu-portfolio/
  ├── assets/
  │   └── (imagens aqui)
  ├── index.html
  ├── style.css
  └── script.js

#### **1.3. Estrutura Base do HTML (15 min)**

* No `index.html`, vamos criar toda a estrutura semântica, já com as nossas classes personalizadas.
* **Ponto Chave:** Explique que estamos "desenhando a planta" do site antes de começar a construir as paredes e pintar.

  Código index.html:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu Nome - Desenvolvedor Frontend</title>
  
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <nav class="main-nav">
        <div class="container">
            <a class="nav-brand" href="#">Portfólio</a>
            <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu">
                <span class="menu-icon"></span>
            </button>
            <div class="nav-menu" id="nav-menu">
                <ul class="nav-links">
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header id="inicio" class="hero-section">
        <div class="container hero-content">
            <h1>Seu Nome Completo</h1>
            <p>Desenvolvedor Frontend & Apaixonado por Tecnologia</p>
            <a href="#projetos" class="btn btn-primary">Ver Meus Projetos</a>
        </div>
    </header>

    <main>
        <section id="sobre">
            <div class="container sobre-container">
                <div class="sobre-imagem">
                    <img src="https://via.placeholder.com/300" class="profile-image" alt="Foto de [Seu Nome]">
                </div>
                <div class="sobre-texto">
                    <h2>Sobre Mim</h2>
                    <p>Olá! Eu sou [Seu Nome], um desenvolvedor de software com foco em criar experiências digitais incríveis. Tenho experiência com tecnologias modernas...</p>
                    <p>Minhas principais habilidades incluem:</p>
                    <div class="skills-icons">
                        <i class="bi bi-filetype-html" title="HTML5"></i>
                        <i class="bi bi-filetype-css" title="CSS3"></i>
                        <i class="bi bi-filetype-js" title="JavaScript"></i>
                    </div>
                </div>
            </div>
        </section>

        <section id="projetos" class="section-light">
            <div class="container">
                <h2>Meus Projetos</h2>
                <div class="projetos-container">
                    <article class="project-card">
                        <img src="https://via.placeholder.com/400x250" alt="Projeto 1">
                        <div class="card-content">
                            <h5>Projeto 1: Landing Page</h5>
                            <p>Uma landing page responsiva criada com HTML5 e CSS3 Flexbox.</p>
                            <div class="card-buttons">
                                <a href="#" class="btn btn-primary">Ver Demo</a>
                                <a href="#" class="btn btn-secondary">Código Fonte</a>
                            </div>
                        </div>
                    </article>
                    </div>
            </div>
        </section>

        <section id="contato">
            <div class="container">
                <h2>Entre em Contato</h2>
                <p>Estou disponível para novas oportunidades. Conecte-se comigo!</p>
                <div class="social-links">
                    <a href="#" target="_blank"><i class="bi bi-github"></i></a>
                    <a href="#" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a href="#"><i class="bi bi-envelope-fill"></i></a>
                </div>
            </div>
        </section>
    </main>

    <footer class="main-footer">
        <p>© 2025 [Seu Nome Completo]. Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

## **Etapa 2: Estilização e Layout com CSS Flexbox (60 minutos)**

Nosso site já é funcional, mas agora vamos deixá-lo sofisticado. Abra o arquivo **`style.css`** e adicione o seguinte código para dar nosso toque pessoal.

Esta é a parte principal. Construiremos todo o visual do zero no arquivo `style.css`.

#### **2.1. Reset, Variáveis e Estilos Globais (10 min)**

* **Explicação:** Todo projeto CSS começa com um "reset" para remover estilos padrão do navegador e a definição de variáveis de cor e fonte para manter a consistência.
* **Código:** Adicionar o bloco de "RESET E VARIÁVEIS GLOBAIS" e os estilos do `body`, `.container` e `.btn`.

#### **2.2. Construindo a Navbar com Flexbox (15 min)**

* **Explicação:** Vamos usar `display: flex`, `justify-content: space-between` e `align-items: center` para alinhar a marca e os links de navegação.
* **Código:** Adicionar o bloco de "BARRA DE NAVEGAÇÃO".

#### **2.3. Estilizando o Hero e a Seção "Sobre" (15 min)**

* **Explicação:** Na seção "Sobre", vamos aplicar Flexbox novamente para colocar a imagem ao lado do texto. Usaremos a propriedade `gap` para criar o espaçamento.
* **Código:** Adicionar os blocos "SEÇÃO HERO" e "SEÇÃO SOBRE".

#### **2.4. O Poder do Flexbox na Galeria de Projetos (15 min)**

* **Explicação:** Este é o momento "aha!" do Flexbox. Mostraremos como `flex-wrap: wrap` cria uma galeria responsiva quase que magicamente.
* **Código:** Adicionar o bloco "SEÇÃO PROJETOS" e recriar o estilo do `.project-card`.

#### **2.5. Finalizando o Estilo (5 min)**

* **Código:** Adicionar os estilos para "SEÇÃO CONTATO" e "RODAPÉ".

Código style.css:

```css
/* === RESET E VARIÁVEIS GLOBAIS === */
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --dark-bg: #212529;
    --light-bg: #f8f9fa;
    --text-color: #f8f9fa;
    --text-color-dark: #212529;
    --font-family: 'Poppins', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-family);
    background-color: var(--dark-bg);
    color: var(--text-color);
}

h1, h2, h5 {
    font-weight: 600;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: var(--primary-color);
}

ul {
    list-style: none;
}

.container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
}

/* === BARRA DE NAVEGAÇÃO === */
.main-nav {
    background-color: var(--dark-bg);
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.main-nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-color);
}

.nav-links {
    display: flex;
    gap: 1.5rem;
}

.nav-links a {
    color: var(--text-color);
    font-weight: 300;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary-color);
}

.menu-toggle {
    display: none; /* Escondido em telas grandes */
    background: none;
    border: none;
    cursor: pointer;
}

.menu-icon {
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--text-color);
    position: relative;
}

.menu-icon::before, .menu-icon::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--text-color);
    position: absolute;
}

.menu-icon::before { top: -8px; }
.menu-icon::after { top: 8px; }

/* === SEÇÃO HERO (INÍCIO) === */
.hero-section {
    padding-top: 56px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
}

.hero-content p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 2rem;
}

/* === ESTILOS DE BOTÃO === */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 0.3rem;
    font-weight: 400;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.btn-primary {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
    color: #fff;
}
.btn-primary:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
}
.btn-secondary {
    background-color: var(--secondary-color);
    border-color: var(--secondary-color);
    color: #fff;
}
.btn-secondary:hover {
    background-color: #5c636a;
    border-color: #565e64;
}

/* === SEÇÕES GERAIS === */
section {
    padding: 5rem 0;
    text-align: center;
}
section h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
}
.section-light {
    background-color: var(--light-bg);
    color: var(--text-color-dark);
}

/* === SEÇÃO SOBRE === */
.sobre-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-align: left;
}

.sobre-imagem {
    flex: 1 1 300px;
    display: flex;
    justify-content: center;
}

.profile-image {
    border-radius: 50%;
    width: 300px;
    height: 300px;
    object-fit: cover;
    border: 4px solid var(--primary-color);
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.sobre-texto {
    flex: 2 1 400px;
}
.skills-icons {
    font-size: 2.5rem;
    color: var(--primary-color);
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
}
.skills-icons i { color: var(--primary-color); }

/* === SEÇÃO PROJETOS === */
.projetos-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.project-card {
    flex: 1 1 350px;
    max-width: 400px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    overflow: hidden;
    text-align: left;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
.project-card img { width: 100%; }
.card-content { padding: 1.5rem; }
.card-content h5 { font-size: 1.25rem; margin-bottom: 0.75rem;}
.card-content p { margin-bottom: 1.5rem; }
.card-buttons { display: flex; gap: 0.5rem; }

/* === SEÇÃO CONTATO === */
.social-links {
    margin-top: 2rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
}
.social-links a { color: var(--text-color); transition: color 0.3s ease; }
.social-links a:hover { color: var(--primary-color); }

/* === RODAPÉ === */
.main-footer {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1.5rem 0;
    border-top: 1px solid #444;
}

/* === RESPONSIVIDADE (MOBILE) === */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--dark-bg);
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
    }
    .nav-links.active { display: flex; }
    .menu-toggle { display: block; }
    .sobre-container { flex-direction: column; text-align: center; }
    .sobre-texto { text-align: center; }
    .skills-icons { justify-content: center; }
    .hero-content h1 { font-size: 2.5rem; }
}
```

## Etapa 3: Interatividade com JavaScript (25 minutos)

#### **3.1. Criando o Menu Mobile (15 min)**

* **Explicação:** O menu que criamos só funciona em telas grandes. Vamos usar JavaScript para "escutar" o clique no botão "hambúrguer" e mostrar/esconder os links.
* **Código:** Adicionar o código ao arquivo `script.js`.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        // Adiciona ou remove a classe 'active' no menu
        navMenu.classList.toggle('active');
    });
});
```

#### **3.2. Tornando o Site Responsivo (10 min)**

* **Explicação:** O JavaScript faz o menu funcionar, mas o CSS precisa saber o que fazer. Usaremos uma Media Query para aplicar estilos específicos para telas menores que 768px.
* **Código:** Adicionar o bloco de "RESPONSIVIDADE (MOBILE)" ao final do `style.css`. Explicar como `flex-direction: column` muda o layout de linha para coluna.

### **Etapa Final: Revisão e Publicação (10 minutos)**

* **Revisão Geral:** Navegar pelo site, testar o menu mobile (usando as ferramentas de desenvolvedor do navegador).
* **Como Publicar:** Explicar rapidamente o processo de publicação no  **GitHub Pages** , para que os alunos saiam com um link real para compartilhar.(

  * Depois de personalizar seu portfólio, você pode colocá-lo no ar para que todos vejam!
  * **Crie uma conta no [GitHub](https://github.com/).**
  * **Crie um novo repositório.** É crucial que o nome do repositório seja `seu-usuario.github.io` (substitua `seu-usuario` pelo seu nome de usuário do GitHub).
  * **Envie os arquivos** (`index.html`, `style.css`, `script.js` e a pasta `assets`) para esse repositório. Você pode fazer isso via linha de comando com Git ou usando o upload de arquivos do próprio site do GitHub.
  * **Acesse o link:** Depois de alguns minutos, seu site estará no ar em `https://seu-usuario.github.io`.
    )
* **Dúvidas e Próximos Passos:** Abrir para perguntas e sugerir estudos (CSS Grid, animações, aprofundar em JS).

## Referências Bibliográficas

---
