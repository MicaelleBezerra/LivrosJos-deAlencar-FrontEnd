import React from 'react';

function LivroItem({ livro, toggleLido }) {
  const handleToggle = () => {
    toggleLido(livro.id); // Aciona o EVENTO no componente pai
  };

  return (
    // RENDERIZAÇÃO CONDICIONAL: Aplica a classe 'lido' se livro.lido for true
    <div
      className={`livro-item ${livro.lido ? 'lido' : ''}`}
      onClick={handleToggle} 
    >
      <div className="livro-info">
        <span className="livro-titulo">**{livro.titulo}**</span>
        <span className="livro-genero">Gênero: *{livro.genero}*</span>
      </div>
      <span className="status-badge">
        {livro.lido ? '✅ Lido' : '... A ler'}
      </span>
    </div>
  );
}

export default LivroItem;