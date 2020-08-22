// TODO: Actually init everything

init();

async function init() {
    //TODO: Load all data
    const fileRead = await fetch("./projects.json");
    const json = await fileRead.json();
    let finalHTML = '';
    json.forEach(project => {
        finalHTML += getParsedHTML(project);
    });
    document.getElementById("projects").innerHTML = finalHTML;
}

function getParsedHTML(project) {
    return `
    <a href="${project.href}">
                <div id="project">
                    <p id="title">${project.title}</p>
                    <p id="description">${project.description}</p>
                </div>
            </a>`
}

