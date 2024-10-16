// content.js
let cursorSize = '30px'; // Adjust size as needed
let originalCursor = '';

document.addEventListener('scroll', () => {
  originalCursor = document.body.style.cursor; // Store original cursor style
  document.body.style.cursor = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAADQyF7uAAAAOXRFWHRTb2Z0d2FyZQBNYXRLABYbYXRhX2V4YW1wbGUucGF0dG9wZm9yZSwgQ29sb3I9MCwgRGF0YT0yMDIwLTA1LTAxIDE1OjE0OjA0W3cpKZAAAABJRU5ErkJggg==') ${cursorSize} ${cursorSize}, auto`;
});

document.addEventListener('mouseout', () => {
  document.body.style.cursor = originalCursor; // Restore original cursor
});

document.addEventListener('mouseover', () => {
  document.body.style.cursor = originalCursor; // Ensure cursor is restored on mouse over
});
