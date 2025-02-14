import '../styles/global.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    // Enable automatic checks
    element: '#root',
    manual: false,
    // Configure which elements to check
    config: {
      rules: [
        {
          // Ensure sufficient color contrast
          id: 'color-contrast',
          enabled: true
        },
        {
          // Check for proper ARIA attributes
          id: 'aria-valid-attr',
          enabled: true
        },
        {
          // Ensure images have alt text
          id: 'image-alt',
          enabled: true
        },
        {
          // Check for proper heading structure
          id: 'heading-order',
          enabled: true
        },
        {
          // Ensure form elements have labels
          id: 'label',
          enabled: true
        }
      ]
    },
    // Options for the checks
    options: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
      }
    }
  }
};
