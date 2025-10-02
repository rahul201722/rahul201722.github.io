// Dynamically populate CV sections from Rahulranjan_CV.json
fetch('Rahulranjan_CV.json')
  .then(response => response.json())
  .then(data => {
    // Helper to get text by label
    function getTexts(label) {
      return data.texts.filter(t => t.label === label).map(t => t.text);
    }
    // Helper to get section headers
    function getSectionHeaders() {
      return data.texts.filter(t => t.label === 'section_header').map(t => t.text);
    }
    // About
    document.querySelector('#about p').textContent = getTexts('section_header')[1] + ' | ' + getTexts('text')[0];
    // Education (example: add your logic for education extraction)
    document.querySelector('#education ul').innerHTML = '<li>Department of Physics, BITS Pilani</li>';
    // Experience
    document.querySelector('#experience ul').innerHTML =
      '<li>Research Intern, Centre for Railway Information Systems (CRIS), New Delhi (Jan - May 2022)<ul>' +
      '<li>' + getTexts('list_item')[0] + '</li>' +
      '<li>' + getTexts('list_item')[1] + '</li>' +
      '</ul></li>' +
      '<li>Information Technology Officer, Aglow Engineers, Kolkata<ul>' +
      '<li>' + getTexts('list_item')[2] + '</li>' +
      '<li>' + getTexts('list_item')[3] + '</li>' +
      '</ul></li>' +
      '<li>Software Development Intern, Xilinx (now AMD), Hyderabad<ul>' +
      '<li>' + getTexts('list_item')[4] + '</li>' +
      '<li>' + getTexts('list_item')[5] + '</li>' +
      '</ul></li>';
    // Publications
    document.querySelector('#publications ul').innerHTML =
      '<li>' + getTexts('text')[1] + '</li>' +
      '<li>' + getTexts('text')[2] + '</li>' +
      '<li>' + getTexts('text')[3] + '</li>';
    // Projects
    document.querySelector('#projects ul').innerHTML =
      '<li>LLM-based Civic Engagement Platform, Monash University (2024)<ul>' +
      '<li>' + getTexts('list_item')[6] + '</li>' +
      '<li>' + getTexts('list_item')[7] + '</li>' +
      '</ul></li>';
    // Awards
    document.querySelector('#awards ul').innerHTML =
      '<li>The Duke of Edinburgh\'s International Award - Silver 2015</li>';
    // Contact
    document.querySelector('#contact ul').innerHTML =
      '<li>Email: <a href="mailto:rahulrkm0038@gmail.com">rahulrkm0038@gmail.com</a></li>' +
      '<li>LinkedIn: <a href="https://linkedin.com/in/rahul-ranjan-b595891b1">linkedin.com/in/rahul-ranjan-b595891b1</a></li>' +
      '<li>GitHub: <a href="#">GitHub Profile</a></li>';
  });
