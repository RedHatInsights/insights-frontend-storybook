export function fetchHTML (source) {
    return fetch(source)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP request failed ${res.status}`);
        }

        return res.text();
    });
}

export function parseHTML (text) {
    const range = document.createRange();
    const fragment = range.createContextualFragment(text);
    return Array.from(fragment.children);
}

export function appendChildren(target, children) {
    children.forEach(child => target.appendChild(child));
}

export function injectToDom(source, target) {
    return fetchHTML(source)
    .then(parseHTML)
    .then(children => appendChildren(target, children));
}

export function waitForScript (script) {
    return new Promise(resolve => script.onload = resolve);
}
