{/* <article class="cleanCard">
    <header class="cleanCard__header">
        <h1 class="cleanCard__heading">Elke dag</h1>
    </header>
    <ul class="cleanCard__activities">
        <li class="cleanCard_activity cleanCard_activity--done">Eten</li>
        <li class="cleanCard_activity">Trainen</li>
        <li class="cleanCard_activity">Programmeren</li>
    </ul>
</article> */}


const renderCards = (data) => {
    for (let i = 0; i < data.length; i++) {
        //Maak een article viajavascript
        let article = document.createElement("article");
        //Geef dezede class cleanCard
        article.classList = "cleanCard";
        //Stop deze in de body
        document.querySelector("body").appendChild(article);

        let header = document.createElement("header");
        header.classList = "cleanCard__header";
        article.appendChild(header);

        let heading = document.createElement("h1");
        heading.classList = "cleanCard__heading";
        header.appendChild(heading);

        heading.innerText = data[i].title;

        let activities = document.createElement("ul");
        activities.classList = "cleanCard__activities";
        article.appendChild(activities);

        for (let j = 0; j < data[i].activities.length; j++) {
            let activity = document.createElement("li");
            activity.classList = "cleanCard_activity";
            activity.innerText = data[i].activities[j].title;
            activities.append(activity);
        }

    }
}

fetch("../data/cards.json").then(
    response => response.json()
).then(
    data => renderCards(data)
)