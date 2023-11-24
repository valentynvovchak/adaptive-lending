document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class 'calculation_button'
    var openModalBtns = document.querySelectorAll('.calculation_button');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var modal = document.getElementById('myModal');

    // Add click event listeners to all calculation buttons
    openModalBtns.forEach(function (openModalBtn) {
        openModalBtn.addEventListener('click', function () {
            modal.style.display = 'block';
            document.body.style.backgroundColor = '#ccc';
        });
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.backgroundColor = '';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.backgroundColor = '';
        }
    });

    var myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Your form submission logic
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var header = document.getElementById('header');
    var scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  
    function isElementFullyOutOfView(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= window.innerHeight ||
        rect.left >= window.innerWidth ||
        rect.bottom <= 0 ||
        rect.right <= 0
      );
    }
  
    window.addEventListener('scroll', function () {
      if (isElementFullyOutOfView(header)) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: header.offsetTop,
        behavior: 'smooth'
      });
    });
  });