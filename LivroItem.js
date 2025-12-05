// src/components/LivroItem.js

import React from 'react';

// Recebe 'livro' e 'toggleLido' como PROPS
function LivroItem({ livro, toggleLido }) {
  // 1. EVENTO: Aciona a função do App.js
  const handleToggle = () => {
    toggleLido(livro.id);
  };

  // 2. RENDERIZAÇÃO CONDICIONAL: Adiciona a classe 'lido' se o livro tiver sido lido
  return (
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