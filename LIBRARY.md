# Spark Design System - NPM Library

A modern React design system built with Tailwind CSS and Radix UI components.

## 🚀 Features

- **50+ React Components** - Built with Radix UI primitives
- **TypeScript Support** - Full type safety and IntelliSense
- **Tailwind CSS** - Utility-first styling with customizable themes
- **Dark Mode Support** - Built-in theme switching
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant components
- **Tree Shaking** - Import only what you need

## 📦 Installation

```bash
npm install spark-design-system
# or
yarn add spark-design-system
# or
pnpm add spark-design-system
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom tailwindcss
```

## 🎨 Setup

### 1. Import the CSS

Import the design system styles in your main CSS file or at the root of your application:

```css
@import 'spark-design-system/styles';
```

### 2. Configure Tailwind CSS

Add the design system to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/spark-design-system/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 🔧 Usage

### Basic Components

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from 'spark-design-system';

function App() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Welcome to Spark</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

### Form Components

```tsx
import { Input, Label, Button, Form } from 'spark-design-system';

function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}
```

### Layout Components

```tsx
import { VerticalLayout, HorizontalLayout, Sidebar } from 'spark-design-system';

function Dashboard() {
  return (
    <HorizontalLayout>
      <Sidebar>
        {/* Navigation items */}
      </Sidebar>
      <main className="flex-1">
        {/* Main content */}
      </main>
    </HorizontalLayout>
  );
}
```

## 🎯 Available Components

### UI Components
- **Button** - Various button styles and sizes
- **Card** - Flexible content containers
- **Input** - Form input fields
- **Select** - Dropdown select components
- **Dialog** - Modal dialogs
- **Toast** - Notification messages
- **Table** - Data tables
- **Tabs** - Tabbed interfaces
- **Accordion** - Collapsible content
- **Avatar** - User profile pictures
- **Badge** - Status indicators
- **Progress** - Progress bars
- **Skeleton** - Loading placeholders
- And many more...

### Layout Components
- **VerticalLayout** - Vertical page layout
- **HorizontalLayout** - Horizontal page layout
- **Sidebar** - Navigation sidebar
- **LayoutProvider** - Layout context provider

### SaaS Components
- **MetricCard** - KPI display cards
- **StatCard** - Statistics cards
- **FeatureCard** - Feature showcase cards
- **StatusBadge** - Status indicators

## 🎨 Theming

The design system supports custom theming through CSS variables:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  /* ... more variables */
}
```

## 🌙 Dark Mode

Dark mode is supported out of the box. Add the `dark` class to your root element:

```tsx
import { useEffect, useState } from 'react';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={theme}>
      {children}
    </div>
  );
}
```

## 📚 Documentation

For detailed documentation and examples, visit our [documentation site](https://github.com/alansantos/spark-design-system).

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
