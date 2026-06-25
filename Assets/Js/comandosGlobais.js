export function initTema() {
    const btnTema = document.querySelector('.btnTema');
    if (!btnTema) return;

    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        btnTema.innerText =
            document.body.classList.contains('dark')
                ? '🌙'
                : '🌞';
    });
}