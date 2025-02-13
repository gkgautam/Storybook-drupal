import '../components/organisms/header-banner/header-banner.css';
import '../components/molecules/form/form.css';

export default {
  title: 'Organisms/HeaderBanner',
  argTypes: {
    imageUrl: { control: 'text' },
    backgroundStyle: {
      control: { 
        type: 'select', 
        options: [
          'header-banner--gradient-1',  // #006AE1 to #049F7C
          'header-banner--gradient-2',  // #006AE1 to #8457D9
          'header-banner--gradient-3',  // #003673 to #0050ab
          'header-banner--gradient-4',  // #049F7C to #8457D9
        ]
      }
    },
    headingTitle: { control: 'text' },
    showForm: { control: 'boolean' }
  }
};

const Template = ({ imageUrl, backgroundStyle, headingTitle, showForm }) => {
  const banner = document.createElement('div');
  banner.className = `header-banner ${backgroundStyle}`;

  // Content Section
  const content = document.createElement('div');
  content.className = 'header-banner__content';

  const title = document.createElement('p');
  title.className = 'header-banner__title';
  title.textContent = headingTitle;
  content.appendChild(title);

  const description = document.createElement('p');
  description.className = 'header-banner__description';
  description.textContent = 'A collaborative venue diagramming tool that allows you to create, update, and scale custom layouts and objects. View and showcase your events in Photo-Realistic 3D, and make sure your team is on the same page by sharing.';
  content.appendChild(description);

  // Buttons container
  const buttons = document.createElement('div');
  buttons.className = 'header-banner__buttons';

  const exploreButton = document.createElement('button');
  exploreButton.className = 'header-banner__explore-button';
  exploreButton.textContent = 'Explore the platform';
  buttons.appendChild(exploreButton);

  const demoLink = document.createElement('div');
  demoLink.className = 'header-banner__demo-link';
  
  const requestDemo = document.createElement('a');
  requestDemo.href = '#';
  requestDemo.className = 'header-banner__link';
  requestDemo.textContent = 'Request demo';
  
  const arrow = document.createElement('span');
  arrow.className = 'header-banner__arrow';
  arrow.textContent = '→';
  
  demoLink.appendChild(requestDemo);
  demoLink.appendChild(arrow);
  buttons.appendChild(demoLink);
  content.appendChild(buttons);

  // Try free button
  const tryFree = document.createElement('div');
  tryFree.className = 'header-banner__try-free';
  
  const tryButton = document.createElement('a');
  tryButton.href = '#';
  tryButton.className = 'header-banner__try-button';
  tryButton.textContent = 'Try Cvent Webinar for free';
  
  tryFree.appendChild(tryButton);
  content.appendChild(tryFree);

  banner.appendChild(content);

  // Media Section
  const media = document.createElement('div');
  media.className = 'header-banner__media';

  if (!showForm && imageUrl) {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Banner image';
    image.className = 'header-banner__image';
    image.width = 520;
    image.height = 600;
    media.appendChild(image);
  } else {
    const form = document.createElement('div');
    form.className = 'marteko-form marteko-form--dark';
    
    const formTitle = document.createElement('h1');
    formTitle.className = 'marteko-form__title';
    formTitle.textContent = 'Sign Up for Updates';
    
    const formDesc = document.createElement('p');
    formDesc.className = 'marteko-form__description';
    formDesc.textContent = 'Get exclusive access to new features and promotions.';
    
    form.appendChild(formTitle);
    form.appendChild(formDesc);
    
    // Add form fields (simplified version)
    const formContainer = document.createElement('form');
    formContainer.className = 'marteko-form__container';
    
    // Add a sample input field
    const fieldGroup = document.createElement('div');
    fieldGroup.className = 'marteko-form__field-group';
    
    const label = document.createElement('label');
    label.className = 'marteko-form__label';
    label.textContent = 'Email';
    
    const input = document.createElement('input');
    input.type = 'email';
    input.className = 'marteko-form__input';
    
    fieldGroup.appendChild(label);
    fieldGroup.appendChild(input);
    formContainer.appendChild(fieldGroup);
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'marteko-form__submit';
    submitButton.textContent = 'Request demo';
    
    formContainer.appendChild(submitButton);
    form.appendChild(formContainer);
    
    media.appendChild(form);
  }

  banner.appendChild(media);
  return banner;
};

export const HeaderBannerFull = Template.bind({});
HeaderBannerFull.args = {
  imageUrl: 'https://www.cvent.com/sites/default/files/styles/max_1170w/public/image/2024-08/Hp2024.webp?itok=eNPdq5_M',
  backgroundStyle: 'header-banner--gradient-2',
  headingTitle: 'Your all-in-one platform for every event',
  showForm: false
};

export const HeaderBannerMedia = Template.bind({});
HeaderBannerMedia.args = {
  imageUrl: 'https://www.cvent.com/sites/default/files/styles/max_1600w/public/image/2024-01/Higher%20Education%20Value%20Prop%201.webp?itok=LZPeUzJf',
  backgroundStyle: 'header-banner--gradient-4',
  headingTitle: 'An easy, powerful webinar platform',
  showForm: false
};

export const HeaderBannerModernForm = Template.bind({});
HeaderBannerModernForm.args = {
  imageUrl: '',
  backgroundStyle: 'header-banner--gradient-3',
  headingTitle: 'Connect, captivate, and build lifelong relationships',
  showForm: true
};
