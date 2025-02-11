document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-tile').forEach(tile => {
        tile.addEventListener('click', function () {
            let projectId = this.getAttribute('data-project');
            let details = document.querySelector(`.project-details[data-project="${projectId}"]`);

            // Close if already open
            if (details.classList.contains('active')) {
                details.classList.remove('active');
                this.classList.remove('active');
                return;
            }

            // Hide all other details
            document.querySelectorAll('.project-details').forEach(d => d.classList.remove('active'));
            document.querySelectorAll('.project-tile').forEach(t => t.classList.remove('active'));

            // Show the selected project details
            details.classList.add('active');
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.duch-link').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Find the DUCH project tile
        let duchTile = document.querySelector('.project-tile[data-project="2"]');

        // Trigger a click event on DUCH to open its details
        if (duchTile) {
            duchTile.click();
        }
    });
});

// Image Zoom Modal Functions
function openModal(imageSrc) {
    let modal = document.getElementById("imageModal");
    let fullImage = document.getElementById("fullImage");
    fullImage.src = imageSrc;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
