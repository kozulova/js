function openModal(message){
        let modal = document.getElementById("modal");
        let title = document.querySelector("h2");
        title.innerHTML = message;
        modal.style.display = "block";
    }
function closeModal(){
        let modal = document.getElementById("modal");
        modal.style.display = "none";
}

export {openModal, closeModal};