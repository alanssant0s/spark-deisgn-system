# ⚡ Spark Design System

A modern, accessible React component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **40+ Components** - Comprehensive set of UI components
- 🔒 **Type Safe** - Built with TypeScript for better developer experience
- 🎯 **Accessible** - WCAG compliant components built on Radix UI
- 🌙 **Dark Mode** - Built-in theme switching support
- 📱 **Responsive** - Mobile-first design approach
- 🎨 **Customizable** - Easy theming with CSS variables
- 📦 **Tree Shakable** - Import only what you need
- ⚡ **Fast** - Optimized for performance

## 🚀 Quick Start

### Installation

```bash
npm install alansantos-spark-ds
# or
yarn add alansantos-spark-ds
# or
pnpm add alansantos-spark-ds
```

### Setup

1. **Import styles** in your main CSS file:
```css
@import 'alansantos-spark-ds/dist/style.css';
```

2. **Configure Tailwind** (optional, for custom styling):
```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/alansantos-spark-ds/dist/**/*.{js,ts,jsx,tsx}"
  ],
  // ... rest of config
}
```

### Basic Usage

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from 'alansantos-spark-ds';

function App() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Welcome to Spark DS</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## 📚 Components

### Core Components
- **Button** - Multiple variants and sizes
- **Card** - Flexible content containers
- **Input** - Form input fields with validation
- **Label** - Accessible form labels
- **Badge** - Status and category indicators
- **Avatar** - User profile images with fallbacks

### Form Components
- **Checkbox** - Selection controls
- **RadioGroup** - Single selection from options
- **Select** - Dropdown selection
- **Switch** - Toggle controls
- **Slider** - Range input controls
- **Textarea** - Multi-line text input

### Layout Components
- **Accordion** - Collapsible content sections
- **Tabs** - Tabbed navigation
- **Table** - Data tables with sorting
- **Separator** - Visual content dividers

### Overlay Components
- **Dialog** - Modal dialogs
- **Sheet** - Slide-out panels
- **Popover** - Contextual overlays
- **Tooltip** - Helpful hints and information

### Feedback Components
- **Toast** - Temporary notifications
- **Alert** - Important messages
- **Progress** - Progress indicators
- **Skeleton** - Loading placeholders

## 🎨 Theming

Customize the design system using CSS variables:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  /* ... more variables */
}

.dark {
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* ... dark mode variables */
}
```

## 🌙 Dark Mode

Dark mode is supported out of the box. Simply add the `dark` class to your root element:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

## 📖 Documentation & Examples

- **Live Playground**: Run `npm run dev` and visit `/playground`
- **Component Showcase**: Visit `/showcase` for detailed examples
- **API Reference**: TypeScript definitions included

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/alansantos/spark-design-system.git
cd spark-design-system

# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build

# Run tests
npm test
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with these amazing technologies:

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible Primitives
- [Vite](https://vitejs.dev/) - Build Tool

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/alansantos/spark-design-system?style=social)
![GitHub forks](https://img.shields.io/github/forks/alansantos/spark-design-system?style=social)
![GitHub issues](https://img.shields.io/github/issues/alansantos/spark-design-system)
![GitHub pull requests](https://img.shields.io/github/issues-pr/alansantos/spark-design-system)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/alansantos">Alan Santos</a></p>
  <p>⭐ Star this repo if you find it useful!</p>
</div>