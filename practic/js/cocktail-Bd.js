const divContainerDetails = document.getElementById('div-container-details');

const searchButton = () => {
    const inputValue = document.getElementById('input').value;
    // console.log(inputValue);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data.drinks))
}

const displayData = (datas) => {
    const divContainer = document.getElementById('div-container');
    divContainer.innerHTML = '';
    divContainerDetails.innerHTML = '';
    for (const data of datas) {

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
                    <img onclick="dataDetails(${data.idDrink})" src="${data.strDrinkThumb}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.strDrink}</h5>
                        <p class="card-text">${data.strCategory}.</p>
                    </div>
                </div>
        `

        divContainer.appendChild(div);
        // console.log(data)

    }

}

const dataDetails = (id) => {

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => displayDetails(data.drinks))

}

const displayDetails = (datas) => {
    for (const data of datas) {
        // const divContainerDetails = document.getElementById('div-container-details');
        divContainerDetails.innerHTML = '';
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" w-75 shadow center">
                    <div class=" d-flex justify-content-center
                    p-3 ">
                        <img class="image-size "  src="${data.strDrinkThumb}"
                        class="card-img-top " alt="...">
                        </div>
                    <div class="card-body text-center ">
                        <h3 class="card-title"> Name : ${data.strDrink}</h3>
                        <h5 class="card-text">Catagori : ${data.strCategory}.</h5>
                        <h5 class="card-text">Glass : ${data.strGlass}.</h5>
                        <h5 class="card-text">Ingredient :${data.strIngredient1}.</h5>
                        <h5 class="card-text">Date : ${data.dateModified}.</h5>
                        <h5 class="card-text">Instruction : ${data.strInstructions}.</h5>
                    </div>
                </div>
        `

        divContainerDetails.appendChild(div);

        // console.log(data);

    }
}