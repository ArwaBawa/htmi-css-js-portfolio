function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

  // 2. Use the `markdown-it` package in your JavaScript file
  const MarkdownIt = require('markdown-it');
  const md = new MarkdownIt();
  
  // 3. Create a function that converts Markdown to HTML
  function convertMarkdownToHtml(markdown) {
   return md.render(markdown);
  }
  
  // 4. Use the function to convert the bolded text to HTML
  const boldText = "**This is bold text**";
  const boldHtml = convertMarkdownToHtml(boldText);
  
  console.log(boldHtml); // <p><strong>This is bold text</strong></p>  