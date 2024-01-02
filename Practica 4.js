function <link>productoInterno</link>(a, b) {
    let producto = 0;
    for (let i = 0; i < a.length; i++) {
      producto += a[i] * b[i];
    }
    return producto;
  }
  
  function <link>sonOrtogonales</link>(a, b) {
    return <link>productoInterno</link>(a, b) === 0 ? "a y b son ortogonales" : "a y b no son ortogonales";
  }
  
  let vectorA = [5, 1, 6];
  let vectorB = [1, -2, 8];
  
  console.log("producto interno entre a y b:");
  console.log(<link>productoInterno</link>(vectorA, vectorB));
  console.log(<link>sonOrtogonales</link>(vectorA, vectorB));