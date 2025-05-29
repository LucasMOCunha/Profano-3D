const fs = require("fs");
const source = "profano_lumao.html";
const target = "index.html";

console.log(`🔄 Monitorando alterações em ${source}...`);

fs.watchFile(source, { interval: 500 }, () => {
  fs.copyFile(source, target, (err) => {
    if (err) return console.error("❌ Erro ao copiar:", err);
    console.log(`✅ ${new Date().toLocaleTimeString()} - Atualizado index.html`);
  });
});