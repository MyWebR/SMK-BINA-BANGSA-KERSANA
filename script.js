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
let currentImageIndex = 0;
const images = [
  'img/content-home/1lebar.jpg',
  'img/content-home/2lebar.jpg',
  'img/content-home/3lebar.jpg'
];
const sliderImage = document.getElementById('slider-image');

document.getElementById('prev-btn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
  sliderImage.src = images[currentImageIndex];
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
  sliderImage.src = images[currentImageIndex];
});
