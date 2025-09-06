document.addEventListener('DOMContentLoaded', () => {

  // Función para cargar un SVG y manejar errores
  const fetchSvg = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al cargar ${url}: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error(error);
      return null; // Devuelve null si hay un error
    }
  };

  // Cargar el SVG principal una sola vez
  fetchSvg("dulce.svg").then(svgContent => {
    if (svgContent) {
      const headerContainer = document.getElementById("svg-container");
      const footerContainer = document.getElementById("svg-container-footer");

      if (headerContainer) {
        headerContainer.innerHTML = svgContent;
        
        // Animación para el SVG del header
        const parte = headerContainer.querySelector(".cuerpo");
        if (parte) {
          let scale = 1;
          let creciendo = true;
          setInterval(() => {
              scale = creciendo ? 1.15 : 1;
              parte.style.transform = `scale(${scale})`;
              parte.style.transformOrigin = 'center'; // Asegura que escale desde el centro
              parte.style.transition = 'transform 0.5s ease'; // Hace la animación más suave
              creciendo = !creciendo;
          }, 1200);
        }
      }

      if (footerContainer) {
        footerContainer.innerHTML = svgContent;
      }
    }
  });

  // Cargar la rosa
  fetchSvg("rosa.svg").then(svgContent => {
    if (svgContent) {
      const rosaContainer = document.getElementById("rosa-container");
      if (rosaContainer) {
        rosaContainer.innerHTML = svgContent;
      }
    }
  });

});