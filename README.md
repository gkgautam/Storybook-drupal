# Drupal Storybook Project

This project implements a component library using Drupal, Storybook, and Twig, following atomic design principles.

## Project Structure

```
.
├── components/
│   ├── atoms/
│   │   ├── button/
│   │   ├── heading/
│   │   └── paragraph/
│   ├── molecules/
│   │   └── card/
│   └── organisms/
│       └── card-grid/
├── stories/
└── web/
    └── themes/
        └── custom/
            └── atomic_theme/
```

## Prerequisites

- PHP 8.1 or higher
- Composer
- Node.js 16 or higher
- npm or yarn
- Drupal 10.x

## Installation

1. Install Drupal dependencies:
```bash
composer create-project drupal/recommended-project .
composer require drupal/components drupal/ui_patterns drupal/twig_field_value
```

2. Install Node.js dependencies:
```bash
npm init -y
npm install --save-dev @storybook/html @storybook/addon-essentials @babel/core babel-loader
```

3. Install theme dependencies:
```bash
cd web/themes/custom/atomic_theme
npm install
```

## Running the Project

1. Start Drupal server:
```bash
php -S localhost:8000
```

2. Start Storybook:
```bash
npm run storybook
```

## Component Structure

### Atoms
- Buttons (Primary, Secondary, Disabled)
- Headings (H1, H2, H3)
- Paragraphs

### Molecules
- Cards (Image, Title, Description, Button)

### Organisms
- Card Grid Layout

## Development Guidelines

1. Follow atomic design principles
2. Use BEM naming convention for CSS classes
3. Maintain component documentation
4. Write stories for all component variations

## Contributing

1. Create a new branch for each feature
2. Follow coding standards
3. Update documentation as needed
4. Test components in Storybook before committing
# Storybook-drupal
