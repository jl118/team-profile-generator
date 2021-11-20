const fs = require('fs');

const bootstrap = "<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\" crossorigin=\"anonymous\">";

const localStylesheet = "<link rel=\"stylesheet\" href=\"./style.css\">";

// beginning of HTML document
const HTMLhead = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        ${bootstrap}
        ${localStylesheet}
    </head>
    <body>
        <header style="height: 100px" class="text-center fs-2 bg-purple-800 text-white">
            My Team
        </header>
        <main class="d-flex flex-row justify-content-evenly">
`

class Card {
    constructor(name, role, id, email, other, value) {
    
    this.body =`<ul class="list-group shadow m-2">
    <li class="list-group-item active" aria-current="true">${name}<br>${role}</li>
    <div class="p-4 bg-purple-600 bg-gradient">
    <li class="list-group-item">ID: ${id}</li>
    <li class="list-group-item">Email: ${email}</li>
    <li class="list-group-item">${other}: ${value}</li>
    </div>
    </ul>`
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