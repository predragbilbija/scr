import lozad from 'lozad';

const observer = lozad();
observer.observe();

function open() {
  document.getElementById('mySidenav').style.width = '70%';
  document.getElementById('overlay').style.display = 'block';
}
document.getElementById('openBtn').addEventListener('click', open);

function close() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('overlay').style.display = 'none';
}
document.getElementById('closeBtn').addEventListener('click', close);

function closeOverlay() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('overlay').style.display = 'none';
}
document.getElementById('overlay').addEventListener('click', closeOverlay);

const showMoreBtn = document.querySelector('.button-show-more');
const show = document.querySelector('.show-more-pictures');

if (showMoreBtn !== null) {
  showMoreBtn.addEventListener('click', () => {
    show.classList.toggle('more-pictures-show-more');
    if (showMoreBtn.innerHTML === 'View More') {
      showMoreBtn.innerHTML = 'View Less';
    } else {
      showMoreBtn.innerHTML = 'View More';
    }
  });
}
