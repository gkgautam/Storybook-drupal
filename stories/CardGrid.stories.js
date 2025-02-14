import cardGridTwig from '../components/organisms/card-grid/card-grid.twig';
import '../components/organisms/card-grid/card-grid.css';
import '../components/molecules/card/card.css';

export default {
  title: 'Organisms/Card Grid',
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    cards: { control: 'object' },
    columns: {
      control: { type: 'select' },
      options: [2, 3, 4],
    },
    theme: {
      control: { type: 'select' },
      options: ['default', 'dark'],
    },
  },
};

const Template = (args) => {
  return cardGridTwig(args);
};

const tenCards = [
  {
    title: 'Venue Diagramming',
    description: 'Create detailed floor plans and seating arrangements with our intuitive diagramming tools.',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    buttonText: 'Learn More',
    theme: 'default',
  },
  {
    title: 'Event Registration',
    description: 'Streamline your registration process with our customizable forms and automated workflows.',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    buttonText: 'Explore Features',
    theme: 'default',
  },
  {
    title: 'Virtual Events',
    description: 'Host engaging virtual and hybrid events with our comprehensive online platform.',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    buttonText: 'Get Started',
    theme: 'default',
  },
  {
    title: 'Event Analytics',
    description: 'Track and analyze your event performance with detailed analytics and reporting.',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    buttonText: 'View Demo',
    theme: 'default',
  },
  {
    title: 'Mobile Check-in',
    description: 'Simplify event check-in with our mobile-friendly digital solutions.',
    imageUrl: 'https://picsum.photos/400/300?random=5',
    buttonText: 'Try Now',
    theme: 'default',
  },
  {
    title: 'Badge Printing',
    description: 'Create professional name badges with our customizable templates.',
    imageUrl: 'https://picsum.photos/400/300?random=6',
    buttonText: 'See Options',
    theme: 'default',
  },
  {
    title: 'Lead Retrieval',
    description: 'Capture and manage leads efficiently at your events.',
    imageUrl: 'https://picsum.photos/400/300?random=7',
    buttonText: 'Get Started',
    theme: 'default',
  },
  {
    title: 'Event Marketing',
    description: 'Promote your events with integrated marketing tools and social media features.',
    imageUrl: 'https://picsum.photos/400/300?random=8',
    buttonText: 'Explore Tools',
    theme: 'default',
  },
  {
    title: 'Budget Management',
    description: 'Keep track of event expenses and manage budgets with our financial tools.',
    imageUrl: 'https://picsum.photos/400/300?random=9',
    buttonText: 'Learn More',
    theme: 'default',
  },
  {
    title: 'Attendee Engagement',
    description: 'Enhance participant engagement with interactive features and networking tools.',
    imageUrl: 'https://picsum.photos/400/300?random=10',
    buttonText: 'See Features',
    theme: 'default',
  },
];

export const Default = Template.bind({});
Default.args = {
  title: 'Our Comprehensive Event Solutions',
  description: 'Discover our full range of event planning and management tools designed to make your events successful.',
  columns: 3,
  theme: 'default',
  cards: tenCards,
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  ...Default.args,
  columns: 4,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  ...Default.args,
  columns: 2,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  title: 'Featured Solutions',
  description: 'Explore our most popular event management tools and services.',
  columns: 3,
  theme: 'dark',
  cards: tenCards.map(card => ({
    ...card,
    theme: 'dark'
  })),
};
