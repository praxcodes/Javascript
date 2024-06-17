// parseDOM.js

// Define an array of slurs (for demonstration purposes)
const slurList = ['slur1', 'slur2', 'slur3'];

// Function to parse the DOM and identify slurs
function parseDOMForSlurs() {
    // Get all text nodes in the DOM
    const textNodes = document.evaluate("//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    
    // Iterate through each text node
    for (let i = 0; i < textNodes.snapshotLength; i++) {
        const node = textNodes.snapshotItem(i);
        const text = node.nodeValue.trim();

        // Check if text contains any slurs
        slurList.forEach(slur => {
            if (text.toLowerCase().includes(slur.toLowerCase())) {
                // If a slur is found, call injectIconNearSlur() function
                injectIconNearSlur(node, slur);
            }
        });
    }
}

// Function to inject Uli icon near slurs
function injectIconNearSlur(node, slur) {
    // Create and inject Uli icon element near the slur
    const icon = document.createElement('img');
    icon.src = 'path/to/uli-icon.png';
    icon.alt = 'Uli icon';
    icon.title = 'Click for more information';
    icon.style.cursor = 'pointer';
    
    // Attach click event listener to the icon
    icon.addEventListener('click', () => {
        // Example: Open a modal with information about the slur
        alert(`You clicked on the slur: ${slur}`);
    });

    // Wrap the slur text node with a span element
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(slur));
    node.parentNode.replaceChild(span, node);
    
    // Insert the icon after the span element
    span.parentNode.insertBefore(icon, span.nextSibling);
}

// Call parseDOMForSlurs() function when the content script is executed
parseDOMForSlurs();
