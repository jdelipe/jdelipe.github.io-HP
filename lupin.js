const song = document.getElementById('HP');
document.getElementById('mybtn').onclick = function() {
    // Substituir apenas o conteúdo do corpo, exceto o elemento <audio>
    document.body.innerHTML = `
        <div id="magic-container">
            <div id="magic-text">Agora o Lupin aniversariante 
            é seu protetor Bruxo.</div>
            <img src="lupindog.jpg" alt="Magic Image">
        </div>
        <audio id="HP" src="temaHP.mp3"></audio>
    `;
    
    // Recuperar o elemento de áudio após substituir innerHTML
    const newSong = document.getElementById('HP');
    
    // Tocar a música
    newSong.play().catch(error => {
        console.error("Ocorreu um erro ao tentar tocar a música:", error);
    });
};
