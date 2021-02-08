
// Profile Boxes Sticky

var profileBoxes = document.getElementsByClassName("leather-button");

function setClicked() {
    // console.log(this.id)
    let zoom = this.parentElement;
    let contentzone = zoom.parentElement;
    contentzone.classList.toggle("content-zone-clicked")
    zoom.classList.toggle("zoom-text-clicked")
    this.classList.toggle("leather-button-clicked")
    // console.log("Stuck!")
}

for (item of profileBoxes) {
    item.addEventListener("click", setClicked);
}