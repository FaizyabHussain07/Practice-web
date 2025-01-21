// Open Modal login and sign up btn in home page 
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

// ended

// Close Modal login and sign up btn in home page with the help of X sign 
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// ended

// Toggle Password Visibility password ki eye show and hide 
function togglePassword(id) {
    const input = document.getElementById(id);
    const icon = input.nextElementSibling;
    if (input.type === "password") {
        input.type = "text";
        icon.classList.add('fa-eye-slash');
        icon.classList.remove('fa-eye');
    } else {
        input.type = "password";
        icon.classList.add('fa-eye');
        icon.classList.remove('fa-eye-slash');
    }
}

// ended

// search bar function in courses page

const searchBar = document.getElementById("searchBar");
const courseCards = document.querySelectorAll(".course-card");
const searchForm = document.querySelector("form.search-bar-cont");


searchForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload on form submission
  filterCourses();
});

function filterCourses() {
  const searchText = searchBar.value.toLowerCase();

  courseCards.forEach(card => {
    const courseName = card.getAttribute("data-name").toLowerCase();
    if (courseName.includes(searchText)) {
      card.style.display = "block"; // Show matching card
    } else {
      card.style.display = "none"; // Hide non-matching card
    }
  });
} 

// ended   