import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ["src/components/ui/**/*", "src/lib/**/*", "src/hooks/**/*"],
            exclude: ["src/**/*.stories.*", "src/**/*.test.*", "src/pages/**/*", "src/App.tsx", "src/main.tsx"],
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/lib/index.ts"),
            name: "SparkDesignSystem",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
        },
        cssCodeSplit: false,
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "tailwindcss",
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "jsx",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: false,
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
});
