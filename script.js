function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}


    // // Remove the 'active' class from all nav links
    // const navLinks = document.querySelectorAll('nav ul li a');
    // navLinks.forEach(link => {
    //     link.classList.remove('active');
    // });

    // // Add the 'active' class to the clicked link
    // const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    // activeLink.classList.add('active');

