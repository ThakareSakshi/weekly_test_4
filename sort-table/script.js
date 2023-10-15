let table = document.querySelector("table");

createTable();
// console.log(Country);

function createTable() {
    Country.forEach(rowData => {

        let row = document.createElement("tr");
        row.setAttribute("class", "data")

        let name1 = document.createElement("td");
        name1.innerText = rowData["name"];

        let country = document.createElement("td");
        country.innerText = rowData["country"];

        let flag = document.createElement("td");
        flag.innerText = rowData["High Score"];

        let score = document.createElement("td");
        score.innerText = rowData["score"];
        row.appendChild(name1);
        row.appendChild(country);
        row.appendChild(flag);
        row.appendChild(score);

        table.appendChild(row);

    })
}

function updateTable() {
    let table = document.querySelectorAll(".data");
    table.forEach((row, index) => {
        let data = row.querySelectorAll("td");

        data[0].innerText = Country[index].name;
        data[1].innerText = Country[index].country;

        data[2].innerText = Country[index]["High Score"];

        data[3].innerText = Country[index].score;

        // row[0].innerText=Country.name;

    })
}

function sorting() {
    let basedOn = document.querySelector("select");
    if (basedOn.value == "score") {
        Country.sort((a, b) => b.score - a.score);
        console.log(Country);
        updateTable();
    } else if (basedOn.value == "name") {

        Country.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }


            return 0;
        });
        updateTable();
    }
    else {
        Country.sort((a, b) => {
            const nameA = a.country.toUpperCase();
            const nameB = b.country.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }


            return 0;
        });
    }
    updateTable();

}


let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    sorting();
});



