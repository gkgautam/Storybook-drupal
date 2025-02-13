import '../components/atoms/button/button.css';

export default {
  title: 'Atoms/Button',
  argTypes: {
    text: { control: 'text' },
    type: {
      control: { type: 'select', options: ['primary', 'secondary'] }
    },
    disabled: { control: 'boolean' }
  }
};

const Template = ({ text, type, disabled }) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.className = `button button--${type} ${disabled ? 'button--disabled' : ''}`;
  if (disabled) {
    button.disabled = true;
  }
  return button;
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  type: 'primary',
  disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  type: 'secondary',
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  type: 'primary',
  disabled: true
};
