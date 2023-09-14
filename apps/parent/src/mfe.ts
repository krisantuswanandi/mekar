declare global {
  interface Window {
    MFE_ENABLED: boolean;
  }
}

function parseDocument(rawDoc: string) {
  let mfeEls = [] as HTMLElement[];

  const parser = new DOMParser();
  const doc = parser.parseFromString(rawDoc, "text/html");

  const scriptEls = doc.querySelectorAll("script");
  scriptEls.forEach((el) => {
    const newEl = createNewScript(el);
    if (newEl) {
      mfeEls.push(newEl);
      document.body.appendChild(newEl);
    }
  });

  const linkEls = doc.querySelectorAll("link");
  linkEls.forEach((el) => {
    const newEl = createNewLink(el);
    if (newEl) {
      mfeEls.push(newEl);
      document.head.appendChild(newEl);
    }
  });

  return mfeEls;
}

function createNewScript(el: HTMLScriptElement) {
  const newEl = document.createElement("script");
  el.getAttributeNames().forEach((attr) => {
    const attrValue = el.getAttribute(attr);
    if (attrValue === null) return;

    // skip if it's from vite
    if (attr === "src" && !attrValue.includes("/@")) {
      // avoid cache
      newEl.setAttribute(attr, attrValue + `?id=${Date.now()}`);
      return;
    }

    newEl.setAttribute(attr, attrValue);
  });

  return newEl;
}

function createNewLink(el: HTMLLinkElement) {
  const rel = el.getAttribute("rel") || "";
  const skippedRels = ["icon"];

  if (skippedRels.includes(rel)) {
    return null;
  }

  return el;
}

export async function fetchMfeApp(url: string) {
  const res = await fetch(url);
  const doc = await res.text();
  return parseDocument(doc);
}
