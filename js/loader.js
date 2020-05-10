(function() {

    //global variables
    let data = []


    const fetchData = function(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(xhr.responseText)
                return callback()
            }
        }

        xhr.send()
    }



    const showData = function() {
        const mainContainer = document.querySelector('.main-container')
        mainContainer.innerHTML = ""

        for (let i = 0; i < data.length; i++) {
            const { photo, name, price, property_type } = data[i]

            mainContainer.innerHTML += `
                <article class="home-post">                
                    <img src="${photo}" class="post-image">
                    <p class="post-name">${name}</p>
                    <p class="post-type">${property_type}</p>
                    <span class="post-price">R$ ${price},00</span>
                    <button class="btn-orcamento" data-hotel="${i}">ver mais</button>
                </article>
            `
        }
    }

    fetchData(function() {
        //loading data
        showData()
    })

})();