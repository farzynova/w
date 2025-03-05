// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

// Disable keyboard shortcuts for developer tools
document.addEventListener('keydown', function(e) {
  // Disable F12 key
  if(e.key === 'F12') {
    e.preventDefault();
    return false;
  }

  // Disable Ctrl+Shift+I / Cmd+Opt+I (Inspect Element)
  if((e.ctrlKey && e.shiftKey && e.key === 'I') || 
     (e.metaKey && e.altKey && e.key === 'i')) {
    e.preventDefault();
    return false;
  }

  // Disable Ctrl+Shift+J / Cmd+Opt+J (Console)
  if((e.ctrlKey && e.shiftKey && e.key === 'J') || 
     (e.metaKey && e.altKey && e.key === 'j')) {
    e.preventDefault();
    return false;
  }

  // Disable Ctrl+Shift+C / Cmd+Opt+C (Inspector)
  if((e.ctrlKey && e.shiftKey && e.key === 'C') || 
     (e.metaKey && e.altKey && e.key === 'c')) {
    e.preventDefault();
    return false;
  }

  // Disable Ctrl+U / Cmd+U (View Source)
  if((e.ctrlKey && e.key === 'u') || 
     (e.metaKey && e.key === 'u')) {
    e.preventDefault();
    return false;
  }
});

// Additional protections
// Detect DevTools opening
let devToolsDetected = false;

// Method 1: Console clearing technique
setInterval(() => {
  const widthThreshold = window.outerWidth - window.innerWidth > 160;
  const heightThreshold = window.outerHeight - window.innerHeight > 160;
  
  if (widthThreshold || heightThreshold) {
    if (!devToolsDetected) {
      devToolsDetected = true;
      // You could add a message or redirect here if desired
    }
  } else {
    devToolsDetected = false;
  }
}, 1000);

// Disable drag and drop for images
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
  return false;
});

// Disable cut, copy, paste
document.addEventListener('cut', function(e) {
  e.preventDefault();
  return false;
});

document.addEventListener('copy', function(e) {
  e.preventDefault();
  return false;
});

document.addEventListener('paste', function(e) {
  e.preventDefault();
  return false;
});