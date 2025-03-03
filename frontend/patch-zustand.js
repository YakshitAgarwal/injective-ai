import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const zustandPath = path.resolve(
  __dirname,
  "./node_modules/zustand/esm/traditional.mjs"
);

if (fs.existsSync(zustandPath)) {
  let content = fs.readFileSync(zustandPath, "utf8");

  // Replace the problematic import
  content = content.replace(
    "import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector.js';",
    "import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';"
  );

  fs.writeFileSync(zustandPath, content);
  console.log("Successfully patched Zustand");
} else {
  console.error("Could not find Zustand at the expected path");
}
