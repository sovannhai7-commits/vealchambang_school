// === ១. មុខងារបញ្ជារូបភាពស្លាយស្វ័យប្រវត្តិ (Hero Slider) ===
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  currentSlide = index;
  
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  
  slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

setInterval(() => {
  changeSlide(1);
}, 5000);


// === ២. កូដដូរពណ៌ម៉ឺនុយពេល Scroll (Active Link State) ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= (sectionTop - 150)) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});


// === ៣. កូដបង្កើតក្រាបស្ថិតិសិស្ស (Chart.js) ===
document.addEventListener("DOMContentLoaded", function() {
  const ctx = document.getElementById('studentChart').getContext('2d');
  
  const years = ['2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025', '2025-2026'];
  const totalStudents = [357, 394, 381, 383, 390, 363];
  const femaleStudents = [184, 213, 221, 222, 201, 177];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'សិស្សសរុប (នាក់)',
          data: totalStudents,
          backgroundColor: '#0f4c3a', 
          borderColor: '#082b21',
          borderWidth: 1
        },
        {
          label: 'ក្នុងនោះស្រី (នាក់)',
          data: femaleStudents,
          backgroundColor: '#e8a87c', 
          borderColor: '#c58b63',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: { 
          beginAtZero: true,
          ticks: { font: { family: 'Kantumruy Pro', size: 11 } }
        },
        x: {
          ticks: { font: { family: 'Kantumruy Pro', size: 11 } }
        }
      },
      plugins: {
        legend: { 
          labels: { font: { family: 'Kantumruy Pro', size: 12 } } 
        }
      }
    }
  });
});


// === ៤. មុខងារបញ្ជាប៊ូតុងត្រេបី និង ប៊ូតុងជូនដំណឹង ===
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const notifToggle = document.getElementById('notifToggle');
  const notifDropdown = document.getElementById('notifDropdown');

  // ចុចបើក/បិទ ម៉ឺនុយត្រេបីលើទូរស័ព្ទ
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    mainNav.classList.toggle('active');
    notifDropdown.classList.remove('show');
    
    const icon = menuToggle.querySelector('i');
    if (mainNav.classList.contains('active')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });

  // ចុចបើក/បិទ ប្រអប់សារជូនដំណឹង (Notification Dropdown)
  notifToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    notifDropdown.classList.toggle('show');
    mainNav.classList.remove('active');
    menuToggle.querySelector('i').className = 'fa-solid fa-bars';
  });

  // ចុចលើ Link ម៉ឺនុយណាមួយ ឱ្យវាលាក់ខ្លួនវិញស្វ័យប្រវត្ត
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  // ចុចលើផ្ទៃខាងក្រៅផ្សេងៗ ឱ្យវាបិទ Dropdown និងម៉ឺនុយទៅវិញទាំងអស់
  document.addEventListener('click', function(e) {
    if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
      mainNav.classList.remove('active');
      menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    }
    if (!notifDropdown.contains(e.target) && !notifToggle.contains(e.target)) {
      notifDropdown.classList.remove('show');
    }
  });
});
