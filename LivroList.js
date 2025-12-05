// src/components/LivroList.js

import React from 'react';
import LivroItem from './LivroItem';

// Recebe a lista e a função de alternar como PROPS
function LivroList({ livros, toggleLido }) {
  // 3. LISTAS: O método .map() itera sobre o array de livros
  return (
    <div className="livro-list">
      <h2>Meus Livros ({livros.filter(l => l.lido).length} lidos)</h2>
      {livros.map(livro => (
        // 4. COMPONENTE REUTILIZÁVEL: LivroItem
        <LivroItem
          key={livro.id} // Chave única
          livro={livro} // Objeto completo como PROP
          toggleLido={toggleLido} // Função de evento como PROP
        />
      ))}
    </div>
  );
}

export default LivroList;