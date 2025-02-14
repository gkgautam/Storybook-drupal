import cardTwig from '../components/molecules/card/card.twig';
import '../components/molecules/card/card.css';

export default {
  title: 'Molecules/Card',
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    buttonText: { control: 'text' },
    theme: {
      control: { type: 'select' },
      options: ['default', 'dark', 'compact'],
    },
  },
};

const Template = (args) => {
  return cardTwig(args);
};

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a sample card description that demonstrates the layout and styling of our card component.',
  imageUrl: 'https://picsum.photos/400/200',
  buttonText: 'Learn More',
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

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'No Image Card',
  description: 'This card demonstrates the layout without an image.',
  buttonText: 'Read More',
  theme: 'default',
};
