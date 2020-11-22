function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (targetElement == parent.lastChild) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}