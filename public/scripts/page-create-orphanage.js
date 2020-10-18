const map = L.map('mapid').setView([-27.222633, -49.6455874], 13);


// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "..//images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map);

})

// add photo
function addPhotoField() {
    // pegar container de fotos #images
    const container = document.querySelector('#images')

    // pegar container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo está vazio
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    // limpar o campo antes de adicionar
    newFieldContainer.children[0].value = ""

    // adicionar o clone ao container #image
    container.appendChild(newFieldContainer)
}

// delete photo
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

// select yes or not
function toggleSelect(event) {
    // retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'))

    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')


    // verificar se sim ou não
    input.value = button.dataset.value
    console.log(input.value)
}

// map validation
function validade(event) {

    const lat = document.querySelector('[name=lat]').value
    const lng = document.querySelector('[name=lng]').value

    if (lat && lng) {
        return
    } else {
        alert('Preencha todos os dados!!')
        event.preventDefault()
    }

}