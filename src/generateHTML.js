const fs = require('fs');

const bootstrap = "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'/>";
const fontAwesome = "<link rel='stylesheet' href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'/>"


// beginning of HTML document
const HTMLhead = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        ${bootstrap}
        ${fontAwesome}
    </head>
    <body>
        <header class="text-center align-middle fs-2 bg-secondary text-white">
            My Team
        </header>
        <main class="d-flex flex-row justify-content-evenly">
`

class Card {
    constructor(name, role, id, email, other, value) {
    let title = "";
    let icon = "";
    let gitLink = "";
    if (other === "officeNumber") {
        title = "Office Number";
        icon = "<i class='fas fa-glasses'></i>"
    } else {
        icon = other.charAt(0) === "s" ? "<i class='fas fa-graduation-cap'></i>" : "<i class='fab fa-git-alt'></i>";
        title = other.charAt(0).toUpperCase() + other.slice(1);
    };
    
    this.body = `
        <ul class="list-group shadow m-2">
            <li class="list-group-item bg-secondary text-white font-weight-bold" aria-current="true">${name}<br>${icon} ${role}</li>
            <div class="p-4 bg-gradient">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item list-group-item-action">Email: <a href="mailto:${email}" class="text-dark">${email}</a></li>
            <li class="list-group-item gitLink">${title}: <a href="https://github.com/${value}" class="text-dark" style="text-decoration: none">${value}</a></li>
            </div>
        </ul>
    `
    }

    getBody() {
      return this.body;
    };
};

// end of HTML document
const HTMLfoot = `
    </main>
</body>
</html>
`

module.exports = {
    HTMLhead,
    Card,
    HTMLfoot
}