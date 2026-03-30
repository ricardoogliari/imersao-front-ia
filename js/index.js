document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profiles a[data-profile-name][data-profile-image]');

    profileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nomePerfil = link.dataset.profileName?.trim();
            const imagemPerfil = link.dataset.profileImage?.trim();

            if (nomePerfil) {
                localStorage.setItem('perfilAtivoNome', nomePerfil);
            }

            if (imagemPerfil) {
                localStorage.setItem('perfilAtivoImagem', imagemPerfil);
            }
        });
    });
});