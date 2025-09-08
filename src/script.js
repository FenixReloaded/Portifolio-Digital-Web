// Este evento garante que o script só roda depois que todo o HTML foi carregado
document.addEventListener('DOMContentLoaded', function() {
    
    console.log("-> Script.js iniciado e DOM carregado!");

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
                window.scrollTo({ top: 0, behavior: 'smooth' });
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