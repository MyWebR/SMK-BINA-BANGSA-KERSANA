// SIDEBAR MOBILE
function toggleSidebar() {
     const sidebar = document.getElementById('sidebar');
     if (sidebar.style.left === '0px') {
       sidebar.style.left = '-250px';
     } else {
       sidebar.style.left = '0px';
     }
   }
   
   function moveUsers() {
     const users = document.querySelector('.users');
     const sidebarUsers = document.querySelector('.sidebar-users');
     const width = window.innerWidth;
   
     if (width <= 768) {
       if (!sidebarUsers.contains(users)) {
         sidebarUsers.appendChild(users);
       }
     } else {
       if (!document.querySelector('header').contains(users)) {
         document.querySelector('header').appendChild(users);
       }
     }
   }
   
   window.addEventListener('resize', moveUsers);
   window.addEventListener('load', moveUsers);



// KONTROL SLIDE GAMBAR PADA HOME
const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const images = ['img/content-home/1lebar.jpg', 'img/content-home/2lebar.jpg', 'img/content-home/3lebar.jpg'];
let currentIndex = 0;

function showImage(index) {
  sliderImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

