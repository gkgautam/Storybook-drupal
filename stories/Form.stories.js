import '../components/molecules/form/form.css';

export default {
  title: 'Molecules/Form',
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
    theme: {
      control: { type: 'select', options: ['default', 'dark'] }
    },
    size: {
      control: { type: 'select', options: ['default', 'compact'] }
    }
  }
};

const Template = ({ title, description, buttonLabel, theme, size }) => {
  const formWrapper = document.createElement('div');
  formWrapper.className = `marteko-form marteko-form--${theme} marteko-form--${size}`;

  // Title
  const titleEl = document.createElement('h1');
  titleEl.className = 'marteko-form__title';
  titleEl.textContent = title;
  formWrapper.appendChild(titleEl);

  // Description
  const descEl = document.createElement('p');
  descEl.className = 'marteko-form__description';
  descEl.textContent = description;
  formWrapper.appendChild(descEl);

  // Form
  const form = document.createElement('form');
  form.className = 'marteko-form__container';

  // Name Row
  const nameRow = document.createElement('div');
  nameRow.className = 'marteko-form__row';
  
  const firstNameGroup = document.createElement('div');
  firstNameGroup.className = 'marteko-form__field-group';
  const firstNameInput = document.createElement('input');
  firstNameInput.type = 'text';
  firstNameInput.name = 'firstName';
  firstNameInput.placeholder = 'First Name';
  firstNameInput.className = 'marteko-form__input';
  firstNameGroup.appendChild(firstNameInput);
  
  const lastNameGroup = document.createElement('div');
  lastNameGroup.className = 'marteko-form__field-group';
  const lastNameInput = document.createElement('input');
  lastNameInput.type = 'text';
  lastNameInput.name = 'lastName';
  lastNameInput.placeholder = 'Last Name';
  lastNameInput.className = 'marteko-form__input';
  lastNameGroup.appendChild(lastNameInput);
  
  nameRow.appendChild(firstNameGroup);
  nameRow.appendChild(lastNameGroup);
  form.appendChild(nameRow);

  // Email
  const emailGroup = document.createElement('div');
  emailGroup.className = 'marteko-form__field-group';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Your Email Address';
  emailInput.className = 'marteko-form__input';
  emailGroup.appendChild(emailInput);
  form.appendChild(emailGroup);

  // Company
  const companyGroup = document.createElement('div');
  companyGroup.className = 'marteko-form__field-group';
  const companyInput = document.createElement('input');
  companyInput.type = 'text';
  companyInput.name = 'companyName';
  companyInput.placeholder = 'Company Name';
  companyInput.className = 'marteko-form__input';
  companyGroup.appendChild(companyInput);
  form.appendChild(companyGroup);

  // Job Title
  const jobGroup = document.createElement('div');
  jobGroup.className = 'marteko-form__field-group';
  const jobInput = document.createElement('input');
  jobInput.type = 'text';
  jobInput.name = 'jobTitle';
  jobInput.placeholder = 'Job Title';
  jobInput.className = 'marteko-form__input';
  jobGroup.appendChild(jobInput);
  form.appendChild(jobGroup);

  // Phone and City Row
  const contactRow = document.createElement('div');
  contactRow.className = 'marteko-form__row';
  
  const phoneGroup = document.createElement('div');
  phoneGroup.className = 'marteko-form__field-group';
  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.name = 'phone';
  phoneInput.placeholder = 'Phone Number';
  phoneInput.className = 'marteko-form__input';
  phoneGroup.appendChild(phoneInput);
  
  const cityGroup = document.createElement('div');
  cityGroup.className = 'marteko-form__field-group';
  const cityInput = document.createElement('input');
  cityInput.type = 'text';
  cityInput.name = 'city';
  cityInput.placeholder = 'City';
  cityInput.className = 'marteko-form__input';
  cityGroup.appendChild(cityInput);
  
  contactRow.appendChild(phoneGroup);
  contactRow.appendChild(cityGroup);
  form.appendChild(contactRow);

  // Submit Button
  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'marteko-form__field-group';
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'marteko-form__submit';
  submitButton.textContent = buttonLabel;
  buttonGroup.appendChild(submitButton);
  form.appendChild(buttonGroup);

  formWrapper.appendChild(form);
  return formWrapper;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Contact Us',
  description: 'Fill out the form below and we\'ll get back to you as soon as possible.',
  buttonLabel: 'Submit',
  theme: 'default',
  size: 'default'
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Get in Touch',
  description: 'Have a question? We\'d love to hear from you.',
  buttonLabel: 'Send Message',
  theme: 'dark',
  size: 'default'
};

export const Compact = Template.bind({});
Compact.args = {
  title: 'Quick Contact',
  description: 'Reach out to our team',
  buttonLabel: 'Submit Request',
  theme: 'default',
  size: 'compact'
};
