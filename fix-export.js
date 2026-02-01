import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("./out");

function flatten(dir, root = dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const indexHtml = path.join(fullPath, "index.html");

      if (fs.existsSync(indexHtml)) {
        const relative = path.relative(root, fullPath);
        const fileName = relative.replace(/[\\/]/g, "-") + ".html";
        const dest = path.join(root, fileName);

        fs.renameSync(indexHtml, dest);
        fs.rmSync(fullPath, { recursive: true, force: true });

        console.log(`✔ ${relative} → ${fileName}`);
      } else {
        flatten(fullPath, root);
      }
    }
  }
}

flatten(OUT_DIR);
console.log("✅ Static export flattened fully (NO folders remain)");
