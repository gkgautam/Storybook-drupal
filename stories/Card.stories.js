import '../components/molecules/card/card.css';
import '../components/atoms/button/button.css';

export default {
  title: 'Molecules/Card',
  argTypes: {
    image: { control: 'object' },
    title: { control: 'text' },
    description: { control: 'text' },
    button: { control: 'object' },
    backgroundColor: {
      control: { type: 'select', options: ['light', 'dark', 'accent'] }
    },
    imageSize: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  }
};

const Template = ({ image, title, description, button, backgroundColor, imageSize }) => {
  const card = document.createElement('article');
  card.className = `card card--${backgroundColor} card--image-${imageSize}`;

  // Image
  if (image) {
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'card__image-wrapper';
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.className = 'card__image';
    imageWrapper.appendChild(img);
    card.appendChild(imageWrapper);
  }

  // Content wrapper
  const content = document.createElement('div');
  content.className = 'card__content';

  // Title
  if (title) {
    const titleEl = document.createElement('h3');
    titleEl.className = 'card__title';
    titleEl.textContent = title;
    content.appendChild(titleEl);
  }

  // Description
  if (description) {
    const descEl = document.createElement('div');
    descEl.className = 'card__description';
    descEl.textContent = description;
    content.appendChild(descEl);
  }

  // Button
  if (button) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'card__button';
    const buttonEl = document.createElement('button');
    buttonEl.className = `button button--${button.type || 'primary'} ${button.disabled ? 'button--disabled' : ''}`;
    buttonEl.textContent = button.text;
    if (button.disabled) {
      buttonEl.disabled = true;
    }
    buttonWrapper.appendChild(buttonEl);
    content.appendChild(buttonWrapper);
  }

  card.appendChild(content);
  return card;
};

export const Default = Template.bind({});
Default.args = {
  image: {
    src: 'https://picsum.photos/400/300',
    alt: 'Sample image'
  },
  title: 'Card Title',
  description: 'This is a sample card description that demonstrates the layout and styling of our card component.',
  button: {
    text: 'Learn More',
    type: 'primary'
  },
  backgroundColor: 'light',
  imageSize: 'medium'
};

export const Dark = Template.bind({});
Dark.args = {
  ...Default.args,
  backgroundColor: 'dark',
  button: {
    text: 'Explore',
    type: 'secondary'
  }
};

export const Accent = Template.bind({});
Accent.args = {
  ...Default.args,
  backgroundColor: 'accent',
  imageSize: 'large'
};
