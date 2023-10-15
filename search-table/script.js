let table = document.querySelector("#table");

Country.forEach(ele => {

    let row = document.createElement("tr");
    row.setAttribute("class", "data")
    let name = document.createElement("td");
    name.innerText = ele.name;

    let country = document.createElement("td");
    country.innerText = ele.country;

    row.appendChild(name);
    row.appendChild(country);

    table.appendChild(row);

})

let search = document.querySelector("input");
search.addEventListener("input", () => {
    let inp = search.value;

    let arr = Country.filter(check);
    checklist(arr);
})


// to get list of element 
function check(val) {
    return (val.name.toLowerCase().includes(document.querySelector("input").value) || val.country.toLowerCase().includes(document.querySelector("input").value));
}


// result to  display on screen 
function checklist(arr) {
    let div = document.createElement("div");
    arr.forEach(ele => {

        let row = document.createElement("tr");
        row.setAttribute("class", "data")
        let name = document.createElement("td");
        name.innerText = ele.name;

        let country = document.createElement("td");
        country.innerText = ele.country;

        row.appendChild(name);
        row.appendChild(country);

        div.appendChild(row);
        //    console.log(div)

    })
    table.innerHTML = `${div.innerHTML}`;
}


// sorting
function updateTable() {
    let table = document.querySelectorAll(".data");
    table.forEach((row, index) => {
        let data = row.querySelectorAll("td");

        data[0].innerText = Country[index].name;
        data[1].innerText = Country[index].country;

        // data[2].innerText = Country[index]["High Score"];

        // data[3].innerText = Country[index].score;

        // row[0].innerText=Country.name;

    })
}

function sorting() {
    let basedOn = document.querySelector("select");
    // if (basedOn.value == "score") {
    //     Country.sort((a, b) => b.score - a.score);
    //     console.log(Country);
    //     updateTable();
    // } else 
    if (basedOn.value == "name") {

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

