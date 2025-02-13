import '../components/organisms/card-grid/card-grid.css';
import '../components/molecules/card/card.css';
import '../components/atoms/button/button.css';

export default {
  title: 'Organisms/CardGrid',
  argTypes: {
    columns: {
      control: { type: 'select', options: [2, 3, 4] }
    },
    gap: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  }
};

const sampleCards = [
  {
    image: {
      src: 'https://picsum.photos/400/300?random=1',
      alt: 'Sample image 1'
    },
    title: 'First Card',
    description: 'This is the first card in our grid layout.',
    button: {
      text: 'Learn More',
      type: 'primary'
    },
    backgroundColor: 'light'
  },
  {
    image: {
      src: 'https://picsum.photos/400/300?random=2',
      alt: 'Sample image 2'
    },
    title: 'Second Card',
    description: 'This is the second card in our grid layout.',
    button: {
      text: 'Explore',
      type: 'secondary'
    },
    backgroundColor: 'accent'
  },
  {
    image: {
      src: 'https://picsum.photos/400/300?random=3',
      alt: 'Sample image 3'
    },
    title: 'Third Card',
    description: 'This is the third card in our grid layout.',
    button: {
      text: 'View More',
      type: 'primary'
    },
    backgroundColor: 'dark'
  },
  {
    image: {
      src: 'https://picsum.photos/400/300?random=4',
      alt: 'Sample image 4'
    },
    title: 'Fourth Card',
    description: 'This is the fourth card in our grid layout.',
    button: {
      text: 'Get Started',
      type: 'secondary'
    },
    backgroundColor: 'light'
  }
];

const Template = ({ columns, gap }) => {
  const grid = document.createElement('div');
  grid.className = `card-grid card-grid--cols-${columns} card-grid--gap-${gap}`;

  sampleCards.forEach(cardData => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-grid__item';

    const card = document.createElement('article');
    card.className = `card card--${cardData.backgroundColor}`;

    // Image
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'card__image-wrapper';
    const img = document.createElement('img');
    img.src = cardData.image.src;
    img.alt = cardData.image.alt;
    img.className = 'card__image';
    imageWrapper.appendChild(img);
    card.appendChild(imageWrapper);

    // Content
    const content = document.createElement('div');
    content.className = 'card__content';

    // Title
    const title = document.createElement('h3');
    title.className = 'card__title';
    title.textContent = cardData.title;
    content.appendChild(title);

    // Description
    const description = document.createElement('div');
    description.className = 'card__description';
    description.textContent = cardData.description;
    content.appendChild(description);

    // Button
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'card__button';
    const button = document.createElement('button');
    button.className = `button button--${cardData.button.type}`;
    button.textContent = cardData.button.text;
    buttonWrapper.appendChild(button);
    content.appendChild(buttonWrapper);

    card.appendChild(content);
    cardContainer.appendChild(card);
    grid.appendChild(cardContainer);
  });

  return grid;
};

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: 'medium'
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  columns: 2,
  gap: 'large'
};

export const FourColumns = Template.bind({});
FourColumns.args = {
  columns: 4,
  gap: 'small'
};
