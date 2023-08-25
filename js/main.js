const renderCards = (data) => {
    console.log(data);
}

fetch("../data/cards.json").then(
    response => response.json()
).then(
    data => consolerenderCards(data)
)