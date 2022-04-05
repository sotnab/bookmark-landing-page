const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const menuToggle = document.querySelector('.header_toggle');
const header = document.querySelector('.header');

const questionDropdowns = document.querySelectorAll('.questions_item');

const emailForm = document.querySelector('.newsletter_form');
const emailField = document.querySelector('.newsletter_field');

const featuresTabs = document.querySelectorAll('.features_tab');
const featuresItems = document.querySelectorAll('.features_content');

const breakpoint = window.matchMedia('(min-width: 760px)');

setupListeners()

function setupListeners() {
   menuToggle.addEventListener('click', openHeader);
   emailForm.addEventListener('submit', validateEmail);
   breakpoint.addEventListener('change', closeHeader);

   questionDropdowns.forEach((item) => {
      item.addEventListener('click', () => openDropdown(item));
   });

   featuresTabs.forEach((item, index) => {
      item.addEventListener('click', () => openTab(item, index));
   });
}

function validateEmail(e) {
   e.preventDefault();
   const { value } = e.target.elements.email;
   value.match(EMAIL_REGEX)
      ? emailField.classList.remove('newsletter_field--error')
      : emailField.classList.add('newsletter_field--error');
}

function openHeader() {
   header.classList.toggle('header--opened');
}

function closeHeader() {
   header.classList.remove('header--opened');
}

function openDropdown(item) {
   const isClosed = !item.classList.contains('questions_item--active')

   questionDropdowns.forEach((item) => {
      item.classList.remove('questions_item--active');
   });

   if (isClosed) item.classList.add('questions_item--active');
}

function openTab(item, index) {
   featuresTabs.forEach((item) => {
      item.classList.remove('features_tab--active')
   });

   item.classList.add('features_tab--active');
   featuresItems.forEach((item) => {
      item.classList.remove('features_content--visible')
   });

   featuresItems[index].classList.add('features_content--visible');
}
