function openForm() {
    document.getElementById("subscribe-form").style.display = "flex";
}

function closeForm() {
    document.getElementById("subscribe-form").style.display = "none";
}

document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("¡Gracias por suscribirte!");
    closeForm();
});