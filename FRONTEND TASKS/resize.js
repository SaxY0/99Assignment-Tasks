// Function to resize the page based on the screen width
function adjustPageScale() {
    const width = window.innerWidth;
  
    let scaleValue = 1;
  
    if (width >= 992 && width <= 1600) {
      scaleValue = 0.9; // 90% scaling
    } else if (width >= 700 && width <= 767) {
      scaleValue = 0.8; // 80% scaling
    } else if (width >= 600 && width < 700) {
      scaleValue = 0.75; // 75% scaling
    } else if (width <= 600) {
      scaleValue = 0.5; // 50% scaling
    }
  
    // Apply the scale transform to the body element
    document.body.style.transform = `scale(${scaleValue})`;
    document.body.style.transformOrigin = 'top left'; // Ensure scaling starts from the top-left corner
  }
  
  // Call the function on initial load
  window.onload = adjustPageScale;
  
  // Call the function on window resize
  window.onresize = adjustPageScale;
  