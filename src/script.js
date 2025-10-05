import { projetos } from './projetos_data.js';

// Função que cria o HTML de um único card de projeto
function criarCardProjeto(projeto) {
    // Adicionamos 'data-attributes' ao botão de Demo para guardar a informação
    return `
        <article class="project-card">
            <img src="${projeto.imagem}" alt="Imagem do ${projeto.titulo}" class="project-image">
            <div class="card-content">
                <h5>${projeto.titulo}</h5>
                <p>${projeto.descricao}</p>
                <div class="card-buttons">
                    <a href="${projeto.demoSrc}" 
                       class="btn btn-primary btn-demo" 
                       data-tipo-demo="${projeto.tipoDemo}" 
                       data-demo-src="${projeto.demoSrc}">Ver Demo</a>
                    <a href="${projeto.linkCodigo}" class="btn btn-secondary" target="_blank">Código Fonte</a>
                </div>
            </div>
        </article>
    `;
}

// Este evento garante que o script só roda depois que todo o HTML foi carregado
document.addEventListener('DOMContentLoaded', function() {
    
// --- LÓGICA DE CARREGAMENTO DOS PROJETOS ---
    const containerProjetos = document.querySelector('.projetos-container');
    if (containerProjetos) {
        const ehPaginaDeProjetos = document.querySelector('#todos-projetos');
        const projetosParaRenderizar = ehPaginaDeProjetos ? projetos : projetos.slice(0, 3);
        
        containerProjetos.innerHTML = projetosParaRenderizar.map(criarCardProjeto).join('');
    }

    // --- LÓGICA DO MODAL ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('modal-close-btn');

    // Usamos 'Event Delegation' para ouvir cliques em botões que ainda não existem
    document.body.addEventListener('click', function(e) {
        const demoButton = e.target.closest('.btn-demo');
        
        if (demoButton) {
            e.preventDefault();
            const tipoDemo = demoButton.dataset.tipoDemo;
            const demoSrc = demoButton.dataset.demoSrc;

            if (tipoDemo === 'gif') {
                modalContent.innerHTML = `<img src="${demoSrc}" alt="Demonstração do projeto">`;
                modalOverlay.classList.add('active');
            } else {
                window.open(demoSrc, '_blank');
            }
        }
    });
    
    // Função para fechar o modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        modalContent.innerHTML = ''; // Limpa o conteúdo para não carregar na próxima vez
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) { // Fecha somente se clicar no fundo
            closeModal();
        }
    });


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