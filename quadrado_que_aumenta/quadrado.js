// Captura o evento load da página
window.onload=function(){
	// Localiza o elemento
	var div = document.getElementById('minha_div');

	// O link
	var clique = document.getElementById('clique');

	// Captura o evento de clique no link
	clique.onclick=function(){
		// Verifica se getComputedStyle é suportado
		if( 'getComputedStyle' in window ){
			var largura = window.getComputedStyle(div).width;
		} else {
			// Obtém a largura para navegadores antigos
			var largura = div.currentStyle.width;
		}
		
		// Garante que temos apenas números
		largura = parseInt(largura);
		
		// Configura mais 10 na largura
		largura += 10;

		// Configura aumenta o tamanho da div a cada clique
		div.style.width = largura + 'px';
		
		// Retorna falso para não atualizar a página
		return false;
	}
}