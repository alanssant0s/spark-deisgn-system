# Contributing to Spark Design System

Thank you for your interest in contributing to Spark Design System! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/YOUR_USERNAME/spark-design-system.git
cd spark-design-system
```

3. Install dependencies:
```bash
npm install
```

4. Create a branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

5. Start the development server:
```bash
npm run dev
```

## 📝 Development Guidelines

### Code Style

- We use TypeScript for type safety
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Component Development

1. **Create new components** in `src/components/ui/`
2. **Export components** from `src/lib/index.ts`
3. **Follow naming conventions**: PascalCase for components
4. **Include TypeScript interfaces** for all props
5. **Use Radix UI primitives** when available
6. **Ensure accessibility** (ARIA labels, keyboard navigation)

### Example Component Structure

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "default-classes",
        secondary: "secondary-classes",
      },
      size: {
        default: "default-size-classes",
        sm: "small-size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Additional props
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(componentVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"

export { Component, componentVariants }
```

### Testing

- Test your components manually in the playground (`/playground`)
- Ensure components work in both light and dark modes
- Test responsive behavior
- Verify accessibility with screen readers

### Documentation

- Add examples to the playground if creating new components
- Update the main README.md if adding significant features
- Include JSDoc comments for complex functions

## 🐛 Bug Reports

When filing a bug report, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the bug
3. **Expected vs actual behavior**
4. **Screenshots** if applicable
5. **Environment details** (OS, browser, Node version)
6. **Minimal reproduction** example

## ✨ Feature Requests

For new features:

1. **Check existing issues** to avoid duplicates
2. **Describe the use case** and why it's needed
3. **Provide examples** of how it would be used
4. **Consider implementation** complexity and maintenance

## 📋 Pull Request Process

1. **Update documentation** as needed
2. **Test your changes** thoroughly
3. **Follow the existing code style**
4. **Write clear commit messages**
5. **Reference related issues** in your PR description

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tooling changes

Examples:
- `feat(button): add loading state variant`
- `fix(dialog): resolve focus trap issue`
- `docs(readme): update installation instructions`

## 🔍 Review Process

1. All PRs require review before merging
2. Maintainers will provide feedback within a few days
3. Address review comments promptly
4. PRs may be merged once approved

## 📦 Release Process

Releases are handled by maintainers:

1. Version bumping follows semantic versioning
2. Changelog is automatically generated
3. NPM packages are published automatically
4. GitHub releases include detailed notes

## 🤔 Questions?

- Check existing [issues](https://github.com/alansantos/spark-design-system/issues)
- Start a [discussion](https://github.com/alansantos/spark-design-system/discussions)
- Reach out to maintainers

## 📜 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the golden rule: treat others as you'd like to be treated

## 🙏 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Given credit for their contributions

Thank you for contributing to Spark Design System! 🚀
