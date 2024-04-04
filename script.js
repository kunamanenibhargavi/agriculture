document.getElementById("home-link").addEventListener("click", function() {
    showContent("Home");
});

document.getElementById("crop-link").addEventListener("click", function() {
    showContent("Crop Management");
});

document.getElementById("weather-link").addEventListener("click", function() {
    showContent("Weather Forecast");
});

document.getElementById("inventory-link").addEventListener("click", function() {
    showContent("Inventory");
});

function showContent(content) {
    let mainSection = document.getElementById("main-section");
    switch (content) {
        case "Home":
            mainSection.innerHTML = `
                <h2>Welcome to our Agriculture Management System!</h2>
                <p>This system helps you manage your crops, monitor weather forecasts, and keep track of your inventory.</p>
            `;
            break;
        case "Crop Management":
            mainSection.innerHTML = `
                <h2>Crop Management</h2>
                <p>Add your crop management content here...</p>
            `;
            break;
        case "Weather Forecast":
            mainSection.innerHTML = `
                <h2>Weather Forecast</h2>
                <p>Add your weather forecast content here...</p>
            `;
            break;
        case "Inventory":
            mainSection.innerHTML = `
                <h2>Inventory</h2>
                <p>Add your inventory management content here...</p>
            `;
            break;
        default:
            mainSection.innerHTML = `
                <h2>Error: Content not found</h2>
            `;
            break;
    }
}
