
// Profile Boxes Sticky

var profileBoxes = document.getElementsByClassName("profile-box");

function setClicked() {
    // console.log(this.id)
    let childBox1 = this.firstElementChild;
    let butBox1 = childBox1.firstElementChild;
    this.classList.toggle("content-zone-clicked")
    childBox1.classList.toggle("zoom-text-clicked")
    butBox1.classList.toggle("leather-button-clicked")
    // console.log("Stuck!")
}

for (var i = 0; i < profileBoxes.length; i++) {
    profileBoxes[i].addEventListener("click", setClicked);
}


