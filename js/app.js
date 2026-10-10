// Point this at your spec. Add more entries to get a spec dropdown.
const SPECS = [
  { name: "Example API", url: "openapi/openapi.yaml" },
  // { name: "Payments API", url: "openapi/payments.yaml" },
];

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const selected = SPECS.find((s) => s.name === params.get("spec")) || SPECS[0];

  document.getElementById("spec-link").href = selected.url;

  window.ui = SwaggerUIBundle({
    ...(SPECS.length > 1
      ? { urls: SPECS, "urls.primaryName": selected.name }
      : { url: selected.url }),
    dom_id: "#swagger-ui",
    deepLinking: true,          // shareable links to a specific endpoint
    docExpansion: "list",
    displayRequestDuration: true,
    filter: true,               // search box
    onComplete: () => {
      const title = window.ui.specSelectors.info().get("title");
      if (title) {
        document.getElementById("api-title").textContent = title;
        document.title = title + " - API Docs";
      }
    },
  });
});
