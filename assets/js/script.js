// Importa a lista de projetos do nosso arquivo de dados
// Usar 'import' transforma este arquivo em um "módulo" JavaScript
import { projetos } from './projetos_data.js';

// Função que cria o HTML de um único card de projeto
// Recebe um objeto 'projeto' e retorna uma string HTML
function criarCardProjeto(projeto) {
    // Usamos Template Literals (crases ``) para construir o HTML de forma mais legível
    // Os atributos 'data-*' no botão "Ver Demo" guardam informações que o JavaScript usará depois
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

//Ponto de entrada do script. Este evento garante que o script só roda depois que todo o HTML foi carregado
document.addEventListener('DOMContentLoaded', function() {
    
//Lógica de carregamento dos projetos
    const containerProjetos = document.querySelector('.projetos-container');
    
    // O código só roda se um container de projetos for encontrado na página atual
    if (containerProjetos) {
        const ehPaginaDeProjetos = document.querySelector('#todos-projetos');

        // Operador ternário: se for a página de projetos, usa o array completo
        // Se não (estamos na home), usa '.slice(0, 3)' para pegar apenas os 3 primeiros.
        const projetosParaRenderizar = ehPaginaDeProjetos ? projetos : projetos.slice(0, 3);
        
        // '.map()' transforma cada objeto do array em uma string HTML
        // '.join('')' junta todas as strings HTML em uma única string gigante
        // 'innerHTML' injeta essa string gigante de HTML dentro do nosso container na página
        containerProjetos.innerHTML = projetosParaRenderizar.map(criarCardProjeto).join('');
    }

    // Lógica do menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // Adiciona ou remove a classe 'active' no menu de navegação para mostrar ou esconder o menu mobile
            navMenu.classList.toggle('active');
        });
    }

    // Lógica Modal. Seleciona os elementos do modal
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('modal-close-btn');

    // Usamos 'Event Delegation' para ouvir cliques em botões que ainda não existem.
    // Em vez de adicionar um "ouvinte" a cada botão , adicionamos um único "ouvinte" 
    // ao 'body'. Ele "escuta" todos os cliques.
    document.body.addEventListener('click', function(e) {
        // Verifica se o elemento clicado é um botão de demo
        const demoButton = e.target.closest('.btn-demo');
        
        if (demoButton) {
            e.preventDefault(); // Previne que o link <a> navegue para outra página

            // Lê as informações guardadas nos atributos 'data-*' do botão
            const tipoDemo = demoButton.dataset.tipoDemo;
            const demoSrc = demoButton.dataset.demoSrc;

            // Se a demo for do tipo 'gif', preenche e exibe o modal
            if (tipoDemo === 'gif') {
                modalContent.innerHTML = `<img src="${demoSrc}" alt="Demonstração do projeto">`;
                modalOverlay.classList.add('active'); // A classe 'active' faz o modal aparecer através do CSS
            } else {
                if(demoSrc === '#'){
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }else{
                    // Se for outro tipo 'link', abre o link em uma nova aba
                    window.open(demoSrc, '_blank');
                }
                
            }
        }
    });
    
    // Função para fechar o modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        modalContent.innerHTML = ''; // Limpa o conteúdo para não carregar na próxima vez
    }
    
    // Adiciona os eventos que fecham o modal
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', function(e) {
        // Fecha o modal somente se o clique for no fundo escuro (overlay), e não no conteúdo branco
        if (e.target === modalOverlay) { 
            closeModal();
        }
    });

    // Lógica de rolagem suave na página principal
    const smoothScrollLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o "pulo" padrão

            const targetId = this.getAttribute('href');

            //Se o href(link) for apenas "#", não faz nada
            if (targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // O 'scrollIntoView' com 'behavior: smooth' executa a animação de rolagem
                targetElement.scrollIntoView({ 
                    behavior: 'smooth'
                });
            } 

            // Fecha o menu mobile (se estiver aberto) após o clique
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});