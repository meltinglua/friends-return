document.body.childNodes.forEach(function walk(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        text = text.replace(/\bConnections\b/g, "Friends");
        text = text.replace(/\bConnection\b/g, "Friend");
        text = text.replace(/\bConnect\b/g, "Friends");
        node.textContent = text;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        node.childNodes.forEach(walk);
    }
});

new MutationObserver(() => {
    document.body.childNodes.forEach(function walk(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.textContent;
            text = text.replace(/\bConnections\b/g, "Friends");
            text = text.replace(/\bConnection\b/g, "Friend");
            text = text.replace(/\bConnect\b/g, "Friends");
            node.textContent = text;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            node.childNodes.forEach(walk);
        }
    });
}).observe(document.body, { childList: true, subtree: true });
