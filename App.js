// src/App.js

import React, { useState } from 'react';
import LivroForm from './components/LivroForm';
import LivroList from './components/LivroList';
import './App.css'; 

function App() {
  const [livros, setLivros] = useState([
    { id: 1, titulo: 'O Guarani', genero: 'Romance indianista', lido: false },
    { id: 2, titulo: 'Iracema', genero: 'Romance indianista', lido: true },
    { id: 3, titulo: 'Senhora', genero: 'Romance urbano', lido: false },
  ]);

  // FUNÇÃO: Adiciona um novo livro (recebe título e gênero do formulário)
  const addLivro = (titulo, genero) => {
    if (titulo.trim() === '') return;

    const novoLivro = {
      id: Date.now(),
      titulo: titulo,
      genero: genero || 'Não Especificado', // Garante que o gênero não é vazio
      lido: false,
    };
    // Atualiza o STATE
    setLivros([...livros, novoLivro]);
  };

  // FUNÇÃO: Alterna o estado de leitura (lido) de um livro
  const toggleLido = (id) => {
    // 3. EVENTOS: Função acionada pelo clique no item
    const updatedLivros = livros.map(livro =>
      livro.id === id
        ? { ...livro, lido: !livro.lido } // Altera o isCompleted (lido)
        : livro
    );
    setLivros(updatedLivros); // Atualiza o STATE com o novo array
  };

  return (
    <div className="App">
      <h1>📖 Obras de José de Alencar</h1>
      
      {/* 1. Componente de Formulário (Entrada) */}
      <LivroForm addLivro={addLivro} />

      {/* 2. Componente de Lista (Exibição) */}
      {/* 4. PROPS: Passando a lista e a função de manipulação */}
      <LivroList livros={livros} toggleLido={toggleLido} />

      {/* 5. RENDERIZAÇÃO CONDICIONAL: Mensagem se a lista está vazia */}
      {livros.length === 0 && (
        <p className="empty-message">Nenhum livro na lista. Adicione um!</p>
      )}
    </div>
  );
}

export default App;