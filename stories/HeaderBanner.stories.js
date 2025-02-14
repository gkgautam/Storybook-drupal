import headerBannerTwig from '../components/organisms/header-banner/header-banner.twig';
import '../components/organisms/header-banner/header-banner.css';
import '../components/molecules/form/form.css';
import '../components/molecules/form/form.css'; // Added form CSS import

export default {
  title: 'Organisms/Header Banner',
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    gradient: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4'],
    },
    buttons: { control: 'object' },
    tryFreeText: { control: 'text' },
    showForm: { control: 'boolean' },
    formTitle: { control: 'text' },
    formDescription: { control: 'text' },
    formFields: { control: 'object' },
    formSubmitText: { control: 'text' },
    formTheme: {
      control: { type: 'select' },
      options: ['default', 'dark', 'compact'],
    },
  },
};

const Template = (args) => {
  return headerBannerTwig(args);
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Transform Your Event Planning',
  description: 'A collaborative venue diagramming tool that allows you to create, update, and scale custom layouts and objects. View and showcase your events in Photo-Realistic 3D.',
  imageUrl: 'https://picsum.photos/800/600',
  gradient: '1',
  buttons: [
    {
      text: 'Explore the platform',
      variant: 'primary',
    },
    {
      text: 'Request demo',
      variant: 'secondary',
      url: '#',
    },
  ],
  tryFreeText: 'Try it free for 30 days',
  showForm: false,
};

export const WithForm = Template.bind({});
WithForm.args = {
  title: 'Get Started Today',
  description: 'Sign up now to transform your event planning experience with our innovative platform.',
  gradient: '2',
  buttons: [
    {
      text: 'Learn More',
      variant: 'primary',
    },
  ],
  showForm: true,
  formTitle: 'Request a Demo',
  formDescription: 'Fill out the form below to see our platform in action.',
  formFields: [
    {
      label: 'Full Name',
      name: 'fullName',
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
      label: 'Company',
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'tel',
      required: false,
    },
  ],
  formSubmitText: 'Request Demo',
  formTheme: 'dark',
};

export const GradientVariation = Template.bind({});
GradientVariation.args = {
  ...WithImage.args,
  gradient: '3',
  tryFreeText: 'Start your free trial',
};
