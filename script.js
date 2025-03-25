// Add this code to your script.js file

document.getElementById('certificateFile').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;

    const certificatesScroll = document.querySelector('.certificates-scroll');

    Array.from(files).forEach(file => {
        const reader = new FileReader();

        reader.onload = function (e) {
            const certificateItem = document.createElement('div');
            certificateItem.classList.add('certificate-item');

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Certificate';
            certificateItem.appendChild(img);

            certificatesScroll.appendChild(certificateItem);
        };

        reader.readAsDataURL(file);
    });
}

document.querySelectorAll('.certificate-item').forEach(item => {
    item.addEventListener('click', openModal);
});

function openModal() {
    const modal = document.getElementById('certificateModal');
    const certificateImage = document.getElementById('certificateImage');

    // Set the clicked image source to the modal
    certificateImage.src = this.querySelector('img').src;

    // Show the modal
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('certificateModal');
    
    // Hide the modal
    modal.style.display = 'none';
}
