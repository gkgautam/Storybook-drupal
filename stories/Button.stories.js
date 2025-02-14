import buttonTwig from '../components/atoms/button/button.twig';

export default {
  title: 'Atoms/Button',
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: { control: 'boolean' },
  },
};

const Template = ({ label, variant, disabled }) => {
  // Render the Twig template with the provided args
  return buttonTwig({
    label,
    variant,
    disabled,
  });
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  variant: 'primary',
  disabled: true,
};
