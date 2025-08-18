# Guia de Publicação - Spark Design System

## 📋 Pré-requisitos

1. **Conta no NPM**: Certifique-se de ter uma conta no [npmjs.com](https://www.npmjs.com)
2. **NPM CLI**: Tenha o npm instalado e configurado
3. **Permissões**: Acesso para publicar no escopo desejado

## 🔧 Preparação para Publicação

### 1. Configure o NPM

```bash
# Login no NPM
npm login

# Verificar usuário logado
npm whoami
```

### 2. Atualize as Informações do Pacote

Edite o `package.json` conforme necessário:

```json
{
  "name": "spark-design-system", // Mude se necessário
  "version": "1.0.0", // Versão inicial
  "author": "Seu Nome <seu.email@exemplo.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/seu-usuario/spark-design-system.git"
  }
}
```

### 3. Verifique o Build

```bash
# Limpar dist anterior (se existir)
rm -rf dist/

# Build da biblioteca
npm run build

# Verificar se os arquivos foram gerados
ls -la dist/
```

## 🚀 Processo de Publicação

### 1. Teste Local

```bash
# Criar um pacote local para teste
npm run test:local

# Isso criará um arquivo .tgz que você pode instalar localmente em outro projeto
# npm install /caminho/para/spark-design-system-1.0.0.tgz
```

### 2. Dry Run (Recomendado)

```bash
# Simular publicação sem realmente publicar
npm run publish:dry

# Verificar se tudo está correto
```

### 3. Publicação Real

```bash
# Primeira publicação
npm publish

# Para publicações subsequentes, atualize a versão primeiro
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Depois publique
npm publish
```

### 4. Publicação com Escopo (Opcional)

Se quiser publicar com escopo organizacional:

```bash
# Altere o nome no package.json para:
# "@seu-org/spark-design-system"

# Publique com escopo público
npm publish --access public
```

## 📦 Estrutura do Pacote Publicado

O pacote incluirá:

```
dist/
├── index.esm.js      # Módulo ES6
├── index.cjs.js      # CommonJS
├── index.d.ts        # Definições TypeScript
└── style.css         # Estilos CSS
```

## 🔍 Verificação Pós-Publicação

1. **Verifique no NPM**: https://www.npmjs.com/package/spark-design-system
2. **Teste a instalação**:
   ```bash
   mkdir test-install
   cd test-install
   npm init -y
   npm install spark-design-system
   ```

## 📋 Checklist de Publicação

- [ ] Código revisado e testado
- [ ] Build executado com sucesso
- [ ] Versão atualizada no package.json
- [ ] README.md atualizado
- [ ] Repositório Git atualizado e commitado
- [ ] Dry run executado com sucesso
- [ ] NPM login verificado
- [ ] Publicação realizada
- [ ] Pacote verificado no npmjs.com

## 🔄 Atualizações Futuras

Para publicar novas versões:

1. Faça as alterações necessárias
2. Execute os testes
3. Atualize a versão: `npm version [patch|minor|major]`
4. Faça commit das mudanças
5. Execute o build: `npm run build`
6. Publique: `npm publish`

## 🛠️ Scripts Úteis

```bash
# Build da biblioteca
npm run build

# Teste local (cria .tgz)
npm run test:local

# Dry run da publicação
npm run publish:dry

# Linting
npm run lint
```

## 📚 Uso da Biblioteca

Após publicada, os usuários poderão instalar e usar assim:

```bash
npm install spark-design-system
```

```tsx
import { Button, Card, Input } from 'spark-design-system';
import 'spark-design-system/dist/style.css';

function App() {
  return (
    <Card>
      <Input placeholder="Digite algo..." />
      <Button>Clique aqui</Button>
    </Card>
  );
}
```

## ⚠️ Notas Importantes

1. **Não é possível "despublicar"** um pacote após 24h da publicação
2. **Versões são imutáveis** - uma vez publicada, não pode ser alterada
3. **Teste sempre localmente** antes de publicar
4. **Mantenha o README atualizado** com exemplos de uso
5. **Considere usar tags** para versões beta: `npm publish --tag beta`
