const container = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
    container.innerHTML = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const users = await response.json();

        container.innerHTML = "";

        users.forEach(user => {
            const card = document.createElement("div");
            card.className = "user-card";

            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> 
                ${user.address.street}, 
                ${user.address.city}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

// Load data initially
fetchUsers();

// Reload button
reloadBtn.addEventListener("click", fetchUsers);
