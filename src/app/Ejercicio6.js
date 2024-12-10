import React, { useState, useEffect } from 'react';

function Ejercicio6() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())  
      .then((data) => setPosts(data))  
      .catch((error) => console.error('Error fetching posts:', error)); 
  }, []);  

  return (
    <div>
      <h1>Ejercicio 6: Consulta de una API</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>  
        ))}
      </ul>
    </div>
  );
}

export default Ejercicio6;
