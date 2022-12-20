// Helper utility to generate css code
const css = `
/* Styling Variables */
:root {
    --color-primary: #1cb9b3;
    --color-on-primary: #FEFAED;
    --color-secondary: #badf9c;
    --color-on-secondary: #000;
    --color-bg: #fff;
    --color-bg-secondary: #FEFAED;
}

/* Universal Styling */
* {
    font-family: "Montserrat", serif;
}

/* Header/Navbar Styling */
header {
    background-color: var(--color-primary);
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    color: var(--color-on-primary);
    font-size: xx-large;
}

/* Main Content Styling */
body {
    background-color: var(--color-bg-secondary);
    min-width: 23.5rem;
}

main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

/* Card Styling */
.container-card {
    width: 15rem;
    margin: 1.5rem;
    border: .1rem solid #000;
    border-radius: .5rem;
    background-color: var(--color-bg);
}

/* Card Header Styling */   
.card-title {
    background-color: var(--color-secondary);
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    text-align: center;
}

/* Card Body Styling */
.card-body {
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    height: fit-content;
    padding: .5rem;
    display: flex;
    justify-content: center;
}

.card-field {
    background-color: var(--color-bg-secondary);
    margin: .15rem;
    width: 14rem;
    display: flex;
    flex-wrap: wrap;
}

.card-field h3, .card-field span, .card-field a {
    padding: 0 .25rem;
}
`;

// Reset css file content
const reset = `
/* My personal CSS Reset file */
/* Reset styling for all elements */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Set height for document */
html {
    height: 100%;
}

/* Set scroll-behavior for page */
html:focus-within {
    scroll-behavior: smooth;
}

/* Default body styles */
body {
    /*min-height: 100vh;*/
    line-height: 1.5;
    text-rendering: optimizeSpeed;
}

h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
}

/* Set input and button type elements to inherit fonts */
button, code, input, optgroup, pre, select, textarea {
    font: inherit;
    font-size: 100%;
}

/* Set default decoration for anchor tags */
a {
    text-decoration-skip-ink: auto;
}

/* Remove list element styles */
ol, ul {
    list-style: none;
}

/* Make images a bit easier to work with */
img {
    display: block;
    max-width: 100%;
}

/* Change animations, transitions, and scroll behavior 
for users that prefer reduced motion */
/* Recommended by https://piccalil.li/ in a blog */
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    }
}
`;

module.exports = {
    css,
    reset
};