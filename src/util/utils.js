
function getCanvasRecommendedSize(window) {
  let canvasSize = 256
  if(window.innerWidth < 600) { // XS screen
    canvasSize = 256
  } else if (window.innerWidth < 960) { // SM screen
    canvasSize = 512
  } else if (window.innerWidth < 1280) { // MD screen
    canvasSize = 768
  } else if (window.innerWidth < 1920) { // LG screen
    canvasSize = 768
  } else { // XL screen
    canvasSize = 768
  }
  return canvasSize
}

export { getCanvasRecommendedSize }
