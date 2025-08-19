import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        react(),
        dts({
            tsconfigPath: "tsconfig.lib.json",
            insertTypesEntry: true,
            include: [
                "src/lib/public.ts",
                "src/components/ui/**/*",
                "src/hooks/**/*",
                "src/lib/utils.ts"
            ],
            exclude: [
                "src/components/ui/modal-examples.tsx",
                "src/components/ui/data-table.tsx",
                "src/components/ui/calendar.tsx",
                "src/components/ui/date-picker.tsx",
                "src/components/layouts/**/*",
                "src/components/saas/**/*",
                "src/components/errors/**/*",
                "src/pages/**/*",
                "src/stories/**/*"
            ],
            outDir: "dist",
            copyDtsFiles: true
        })
    ],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, "src/lib/public.ts"),
                button: resolve(__dirname, "src/components/ui/button.tsx"),
                card: resolve(__dirname, "src/components/ui/card.tsx"),
                input: resolve(__dirname, "src/components/ui/input.tsx"),
                label: resolve(__dirname, "src/components/ui/label.tsx"),
                badge: resolve(__dirname, "src/components/ui/badge.tsx"),
                avatar: resolve(__dirname, "src/components/ui/avatar.tsx"),
                skeleton: resolve(__dirname, "src/components/ui/skeleton.tsx"),
                separator: resolve(__dirname, "src/components/ui/separator.tsx"),
                progress: resolve(__dirname, "src/components/ui/progress.tsx"),
                form: resolve(__dirname, "src/components/ui/form.tsx"),
                checkbox: resolve(__dirname, "src/components/ui/checkbox.tsx"),
                "radio-group": resolve(__dirname, "src/components/ui/radio-group.tsx"),
                select: resolve(__dirname, "src/components/ui/select.tsx"),
                switch: resolve(__dirname, "src/components/ui/switch.tsx"),
                slider: resolve(__dirname, "src/components/ui/slider.tsx"),
                textarea: resolve(__dirname, "src/components/ui/textarea.tsx"),
                accordion: resolve(__dirname, "src/components/ui/accordion.tsx"),
                tabs: resolve(__dirname, "src/components/ui/tabs.tsx"),
                table: resolve(__dirname, "src/components/ui/table.tsx"),
                sheet: resolve(__dirname, "src/components/ui/sheet.tsx"),
                popover: resolve(__dirname, "src/components/ui/popover.tsx"),
                tooltip: resolve(__dirname, "src/components/ui/tooltip.tsx"),
                "dropdown-menu": resolve(__dirname, "src/components/ui/dropdown-menu.tsx"),
                breadcrumb: resolve(__dirname, "src/components/ui/breadcrumb.tsx"),
                toast: resolve(__dirname, "src/components/ui/toast.tsx"),
                toaster: resolve(__dirname, "src/components/ui/toaster.tsx"),
                alert: resolve(__dirname, "src/components/ui/alert.tsx"),
                "alert-dialog": resolve(__dirname, "src/components/ui/alert-dialog.tsx"),
                pagination: resolve(__dirname, "src/components/ui/pagination.tsx"),
                "page-header": resolve(__dirname, "src/components/ui/page-header.tsx"),
                utils: resolve(__dirname, "src/lib/utils.ts")
            },
            name: "SparkDesignSystem",
            formats: ["es"],
            fileName: (format, entryName) => `${entryName}.${format === "es" ? "esm" : format}.js`
        },
        cssCodeSplit: true,
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
                preserveModules: true,
                preserveModulesRoot: "src"
            }
        },
        sourcemap: true,
        emptyOutDir: true
    },
    resolve: {
        alias: { "@": resolve(__dirname, "./src") }
    }
});
