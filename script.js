// Function to toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    // Toggle the 'open' class to show or hide the sidebar
    sidebar.classList.toggle('open');
    
    // Toggle the 'open' class to show or hide the overlay
    overlay.classList.toggle('open');
}



