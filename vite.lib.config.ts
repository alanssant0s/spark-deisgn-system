import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/lib/index.ts"),
            name: "SparkDesignSystem",
            formats: ["es"],
            fileName: "index"
        },
        cssCodeSplit: false,
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "@radix-ui/react-accordion",
                "@radix-ui/react-alert-dialog",
                "@radix-ui/react-aspect-ratio",
                "@radix-ui/react-avatar",
                "@radix-ui/react-checkbox",
                "@radix-ui/react-collapsible",
                "@radix-ui/react-context-menu",
                "@radix-ui/react-dialog",
                "@radix-ui/react-dropdown-menu",
                "@radix-ui/react-hover-card",
                "@radix-ui/react-label",
                "@radix-ui/react-menubar",
                "@radix-ui/react-navigation-menu",
                "@radix-ui/react-popover",
                "@radix-ui/react-progress",
                "@radix-ui/react-radio-group",
                "@radix-ui/react-scroll-area",
                "@radix-ui/react-select",
                "@radix-ui/react-separator",
                "@radix-ui/react-slider",
                "@radix-ui/react-slot",
                "@radix-ui/react-switch",
                "@radix-ui/react-tabs",
                "@radix-ui/react-toast",
                "@radix-ui/react-toggle",
                "@radix-ui/react-toggle-group",
                "@radix-ui/react-tooltip",
                "class-variance-authority",
                "clsx",
                "cmdk",
                "date-fns",
                "embla-carousel-react",
                "input-otp",
                "lucide-react",
                "react-day-picker",
                "react-resizable-panels",
                "recharts",
                "sonner",
                "tailwind-merge",
                "tailwindcss-animate",
                "vaul"
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
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
});
