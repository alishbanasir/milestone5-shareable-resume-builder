document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById("toggleButton");
    var skillsSection = document.getElementById("skillsSection");
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
