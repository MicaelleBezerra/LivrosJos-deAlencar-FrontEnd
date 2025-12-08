<<<<<<< HEAD
// src/components/LivroForm.js

import React, { useState } from 'react';

// Recebe 'addLivro' como PROP
function LivroForm({ addLivro }) {
  // 1. STATE: Gerencia os campos do formulário
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');

  // 2. EVENTO: Lida com a submissão
  const handleSubmit = (e) => {
    e.preventDefault();
    addLivro(titulo, genero); // Chama a função do App.js
    setTitulo(''); // Limpa os campos
    setGenero(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="livro-form">
      <input
        type="text"
        placeholder="Título do Livro (O Sertanejo, etc.)"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="livro-input"
        required
      />
      <input
        type="text"
        placeholder="Gênero (Indianista, Urbano, etc.)"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        className="genero-input"
      />
      <button type="submit" className="livro-button">Adicionar Livro</button>
    </form>
  );
}

=======
// src/components/LivroForm.js

import React, { useState } from 'react';

// Recebe 'addLivro' como PROP
function LivroForm({ addLivro }) {
  // 1. STATE: Gerencia os campos do formulário
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');

  // 2. EVENTO: Lida com a submissão
  const handleSubmit = (e) => {
    e.preventDefault();
    addLivro(titulo, genero); // Chama a função do App.js
    setTitulo(''); // Limpa os campos
    setGenero(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="livro-form">
      <input
        type="text"
        placeholder="Título do Livro (O Sertanejo, etc.)"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="livro-input"
        required
      />
      <input
        type="text"
        placeholder="Gênero (Indianista, Urbano, etc.)"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        className="genero-input"
      />
      <button type="submit" className="livro-button">Adicionar Livro</button>
    </form>
  );
}

>>>>>>> 36047ef0eb1a3530862551145dfa2709f4baadec
export default LivroForm;