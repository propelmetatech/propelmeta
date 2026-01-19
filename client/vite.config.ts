import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: path.resolve(__dirname, "postcss.config.js"),
    },
    build: {
        chunkSizeWarningLimit: 900,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes("node_modules")) return;
                    if (id.includes("node_modules/@tanstack/")) return "tanstack";
                    if (id.includes("node_modules/@radix-ui/")) return "radix";
                    if (id.includes("node_modules/framer-motion/")) return "motion";
                    if (id.includes("node_modules/recharts/")) return "charts";
                    if (id.includes("node_modules/lucide-react/")) return "icons";
                    return "vendor";
                },
            },
        },
    },
    resolve: {
        dedupe: ["react", "react-dom"],
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@shared": path.resolve(__dirname, "../shared"),
            "@assets": path.resolve(__dirname, "../attached_assets"),
        },
    },
});
