import formTwig from '../components/molecules/form/form.twig';
import '../components/molecules/form/form.css';

export default {
  title: 'Molecules/Form',
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    fields: { control: 'object' },
    submitText: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: ['default', 'dark', 'compact'],
    },
  },
};

const Template = (args) => {
  return formTwig(args);
};

export const Default = Template.bind({});
Default.args = {
  title: 'Contact Information',
  description: 'Please fill out the form below to get in touch with us.',
  fields: [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'tel',
      required: false,
    },
    {
      label: 'Company',
      name: 'company',
      type: 'text',
      required: false,
    },
    {
      label: 'Message',
      name: 'message',
      type: 'text',
      required: true,
    },
  ],
  submitText: 'Send Message',
  theme: 'default',
};

export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  theme: 'dark',
};

export const Compact = Template.bind({});
Compact.args = {
  ...Default.args,
  theme: 'compact',
};
