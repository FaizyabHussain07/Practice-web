// Open Modal
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

// Close Modal
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Toggle Password Visibility
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
