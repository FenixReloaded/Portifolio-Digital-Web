import { projetos } from './projetos_data.js';

// Função que cria o HTML de um único card de projeto
function criarCardProjeto(projeto) {
    return `
        <article class="project-card">
            <img src="${projeto.imagem}" alt="Imagem do ${projeto.titulo}">
            <div class="card-content">
                <h5>${projeto.titulo}</h5>
                <p>${projeto.descricao}</p>
                <div class="card-buttons">
                    <a href="${projeto.linkDemo}" class="btn btn-primary" target="_blank">Ver Demo</a>
                    <a href="${projeto.linkCodigo}" class="btn btn-secondary" target="_blank">Código Fonte</a>
                </div>
            </div>
        </article>
    `;
}

// Função que carrega os projetos na página
function carregarProjetos() {
    // Encontra o container de projetos na página atual
    const containerProjetos = document.querySelector('.projetos-container');
    
    // Se não encontrar o container, não faz nada
    if (!containerProjetos) return;

    // Verifica se estamos na página principal (index.html)
    // O body do index.html pode ter um ID específico para isso, ou podemos checar o título, etc.
    // Uma forma simples é checar se existe a seção #todos-projetos
    const ehPaginaDeProjetos = document.querySelector('#todos-projetos');

    if (ehPaginaDeProjetos) {
        // Se estamos na página de projetos, carrega TODOS os projetos
        projetos.forEach(projeto => {
            containerProjetos.innerHTML += criarCardProjeto(projeto);
        });
    } else {
        // Se estamos na home, carrega apenas os 3 primeiros (principais)
        const projetosPrincipais = projetos.slice(0, 3);
        projetosPrincipais.forEach(projeto => {
            containerProjetos.innerHTML += criarCardProjeto(projeto);
        });
    }
}

// Este evento garante que o script só roda depois que todo o HTML foi carregado
document.addEventListener('DOMContentLoaded', function() {
    
    console.log("-> Script.js iniciado e DOM carregado!");

    carregarProjetos();

    // --- LÓGICA DO MENU MOBILE ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    console.log("Procurando pelo botão do menu:", menuToggle);
    console.log("Procurando pelo container do menu:", navMenu);

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            console.log("Botão do menu clicado!");
            navMenu.classList.toggle('active');
        });
    }

    // --- LÓGICA DA ROLAGEM SUAVE ---
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    console.log(`Encontrados ${smoothScrollLinks.length} links para rolagem suave.`);

    smoothScrollLinks.forEach(link => {
        console.log(`Adicionando 'listener' de clique para: ${link.href}`);

        link.addEventListener('click', function(e) {
            // Previne o "pulo" padrão
            e.preventDefault();
            console.log(`Clique interceptado em ${link.href}. O 'pulo' padrão foi prevenido.`);

            const targetId = this.getAttribute('href');
            console.log(`Buscando elemento com o ID: ${targetId}`);
            
            // Tratamento de erro para href="#"
            if (targetId === "#") {
                console.log("Link aponta para '#', rolando para o topo.");
                window.scrollTo({ top: 0, behavior: 'smooth' }, behavior = 'smooth');
                return;
            }

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                console.log("Elemento alvo encontrado!", targetElement);
                console.log("Iniciando rolagem suave...");
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error(`ERRO: Elemento alvo com ID '${targetId}' não foi encontrado na página.`);
            }

            // Fecha o menu mobile (se estiver aberto) após o clique
            if (navMenu && navMenu.classList.contains('active')) {
                console.log("Fechando menu mobile.");
                navMenu.classList.remove('active');
            }
        });
    });
});