import { execSync } from 'child_process';
import fs from 'fs';

console.log('🔧 Gerando tipos TypeScript...');

try {
    // Criar um tsconfig temporário apenas para os componentes básicos
    const tempTsConfig = {
        "extends": "./tsconfig.json",
        "compilerOptions": {
            "target": "ES2020",
            "lib": ["ES2020", "DOM", "DOM.Iterable"],
            "module": "ESNext",
            "skipLibCheck": true,
            "moduleResolution": "bundler",
            "allowImportingTsExtensions": true,
            "resolveJsonModule": true,
            "isolatedModules": true,
            "noEmit": false,
            "declaration": true,
            "declarationMap": true,
            "emitDeclarationOnly": true,
            "outDir": "dist",
            "strict": false,
            "noUnusedLocals": false,
            "noUnusedParameters": false,
            "noFallthroughCasesInSwitch": true,
            "allowSyntheticDefaultImports": true,
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,
            "jsx": "react-jsx",
            "baseUrl": ".",
            "paths": {
                "@/*": ["./src/*"]
            }
        },
        "include": [
            "src/lib/index.ts",
            "src/components/ui/button.tsx",
            "src/components/ui/card.tsx",
            "src/components/ui/input.tsx",
            "src/components/ui/label.tsx",
            "src/components/ui/badge.tsx",
            "src/components/ui/avatar.tsx",
            "src/components/ui/skeleton.tsx",
            "src/components/ui/separator.tsx",
            "src/components/ui/progress.tsx",
            "src/components/ui/form.tsx",
            "src/components/ui/checkbox.tsx",
            "src/components/ui/radio-group.tsx",
            "src/components/ui/select.tsx",
            "src/components/ui/switch.tsx",
            "src/components/ui/slider.tsx",
            "src/components/ui/textarea.tsx",
            "src/components/ui/accordion.tsx",
            "src/components/ui/tabs.tsx",
            "src/components/ui/table.tsx",
            "src/components/ui/sheet.tsx",
            "src/components/ui/popover.tsx",
            "src/components/ui/tooltip.tsx",
            "src/components/ui/dropdown-menu.tsx",
            "src/components/ui/breadcrumb.tsx",
            "src/components/ui/toast.tsx",
            "src/components/ui/toaster.tsx",
            "src/components/ui/alert.tsx",
            "src/components/ui/alert-dialog.tsx",
            "src/components/ui/pagination.tsx",
            "src/components/ui/page-header.tsx",
            "src/hooks/use-toast.ts",
            "src/hooks/use-mobile.tsx",
            "src/contexts/AuthContext.tsx",
            "src/contexts/LayoutContext.tsx",
            "src/contexts/NotificationContext.tsx",
            "src/lib/utils.ts"
        ],
        "exclude": [
            "node_modules",
            "dist",
            "src/components/ui/calendar.tsx",
            "src/components/ui/date-picker.tsx",
            "src/components/ui/carousel.tsx",
            "src/components/ui/dialog.tsx",
            "src/components/layouts/**/*",
            "src/components/saas/**/*",
            "src/components/auth/**/*",
            "src/components/errors/**/*",
            "src/components/forms/**/*",
            "src/components/notifications/**/*"
        ]
    };

    // Escrever o tsconfig temporário
    fs.writeFileSync('tsconfig.temp.json', JSON.stringify(tempTsConfig, null, 2));

    // Gerar tipos usando o tsconfig temporário
    execSync('npx tsc --project tsconfig.temp.json --declaration --emitDeclarationOnly --outDir dist', {
        stdio: 'inherit'
    });

    // Remover o tsconfig temporário
    fs.unlinkSync('tsconfig.temp.json');

    console.log('✅ Tipos gerados com sucesso!');
} catch (error) {
    console.error('❌ Erro ao gerar tipos:', error.message);
    process.exit(1);
}
