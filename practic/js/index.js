
// data load 
fetch("https://jsonplaceholder.typicode.com/photos/")
    .then(res => res.json())
    .then(data => displayData(data))

const displayData = (pictures) => {
    const containerDiv = document.getElementById('container-div');
    for (const picture of pictures) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `        
                <div class="card h-100">
                    <img onclick="displayId(${picture.id})" src="${picture.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${picture.title}</h5>                       
                    </div>
                </div>
            
        `
        // console.log(picture.id);
        containerDiv.appendChild(div);

    }
}

const displayId = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => displayDetails(data))

}
const displayDetails = (data) => {
    const containerDiv = document.getElementById('details-container');
    containerDiv.innerHTML = '';
    const div = document.createElement('div');
    // div.classList.add('col');
    // div.classList.add('col-md-6');
    div.innerHTML = `
                    <img src="${data.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h2> Id : ${data.id}</h2>
                    <h3>Album Id : ${data.albumId}</h3>
                        <h5 class="card-title">${data.title}</h5>                       
                    </div>

    `

    containerDiv.appendChild(div);

    console.log(data);
}