// Simple Hotel Management System JavaScript Example

// Array to store guest names
let guests = [];

// Function to add a guest
function addGuest(name) {
    if (name && name.trim() !== "") {
        guests.push(name.trim());
        displayGuests();
    } else {
        alert("Please enter a valid guest name.");
    }
}

// Function to display guests
function displayGuests() {
    const list = document.getElementById("guest-list");
    list.innerHTML = ""; // Clear previous list
    guests.forEach((guest, idx) => {
        const li = document.createElement("li");
        li.textContent = `${idx + 1}. ${guest}`;
        list.appendChild(li);
    });
}

// Function to clear all guests
function clearGuests() {
    guests = [];
    displayGuests();
}

// Attach event listeners after DOM loads
window.onload = function() {
    document.getElementById("add-guest-btn").onclick = function() {
        const name = document.getElementById("guest-name").value;
        addGuest(name);
        document.getElementById("guest-name").value = "";
    };
    document.getElementById("clear-guests-btn").onclick = clearGuests;
    displayGuests();
};
