// Select all elements with class 'show-image-button'
const showImageButtons = document.querySelectorAll(".show-image-button");

// Iterate over each button to add event listener
showImageButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Get the ID of the image to show/hide from the button's 'data-target' attribute
        const imageId = button.getAttribute("data-target");
        const image = document.getElementById(imageId);

        // Toggle the 'hidden' attribute of the image
        if (image) {
            image.hidden = !image.hidden;
        }
    });
});
