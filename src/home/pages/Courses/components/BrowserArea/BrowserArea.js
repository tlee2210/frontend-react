import React from 'react';
import './BrowserArea.css';

const categories = [
  { name: 'Applied Innovation', icon: '🔍' },
  { name: 'Arts, Humanities and Social Sciences', icon: '🎨' },
  { name: 'Arts, Humanities and Social Sciences', icon: '🎨' },
  { name: 'Arts, Humanities and Social Sciences', icon: '🎨' },
  { name: 'Arts, Humanities and Social Sciences', icon: '🎨' },
  { name: 'Arts, Humanities and Social Sciences', icon: '🎨' },
  
];

function Category({ name, icon }) {
  return (
    
    <button className="category">
      <span className="icon">{icon}</span>
      <span className="name">{name}</span>
      <span className="arrow">→</span>
    </button>
  );
}

function BrowserArea() {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <Category key={category.name} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
}

export default BrowserArea;