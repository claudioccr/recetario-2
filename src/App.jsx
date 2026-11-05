import React from 'react';
import { recipes } from './data/recipes';
import './App.css';

function App() {
  return (
    <div className="notebook-container">
      <header className="notebook-header">
        <h1>RECETAS DE CLAUDIO</h1>
      </header>

      <main className="recipes-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-sheet">
            {/* Columna Izquierda: Imagen y Título */}
            <div className="recipe-image-side">
              <div className="image-frame">
                <img 
                  src={recipe.id === 1 
                    ? "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500" 
                    : "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500"
                  } 
                  alt={recipe.title} 
                />
              </div>
              <h2 className="recipe-title">{recipe.title}</h2>
            </div>

            {/* Columna Derecha: Información, Ingredientes e Instrucciones */}
            <div className="recipe-content-side">
              <p className="recipe-meta">
                <strong>TIEMPO DE PREPARACIÓN:</strong> {recipe.prepTime} <br />
                <strong>PORCIONES:</strong> {recipe.servings}
              </p>
              
              <p className="recipe-desc">
                <strong>DESCRIPCIÓN:</strong> {recipe.description}
              </p>

              <h3>INGREDIENTES:</h3>
              <ul>
                {recipe.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>

              <h3>INSTRUCCIONES:</h3>
              <ol>
                {recipe.instructions.map((inst, index) => (
                  <li key={index}>{inst}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;