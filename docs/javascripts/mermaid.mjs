import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  securityLevel: "loose",
  flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
  sequence: { useMaxWidth: true, wrap: true }
});

document$.subscribe(async () => {
  const diagrams = document.querySelectorAll(".mermaid");
  if (diagrams.length > 0) {
    await mermaid.run({ nodes: diagrams });
  }
});
