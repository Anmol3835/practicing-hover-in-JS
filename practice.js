const locations = ["Kathmandu", "Pokhara", "Mustang"];

locations.forEach((location) => {
    const element = document.querySelector(`#${location}`);
    const relatedElement = document.querySelector(`#${location}1`);

    element.addEventListener("mouseover", () => {
        relatedElement.style.display = "block";
    });

    element.addEventListener("mouseout", () => {
        relatedElement.style.display = "none";
    });
});
