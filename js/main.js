const renderCards = (data) => {
    for (let i = 0; i < data.length; i++) {
        //Stop deze in de body
        document.querySelector("body").appendChild(makeCard(data[i]));
    }
}

const makeCard = (cardObject) => {
    //Maak een article viajavascript
    let article = document.createElement("article");
    //Geef dezede class cleanCard
    article.classList = "cleanCard";
    article.appendChild(makeHeader(cardObject.title));
    const resultMakeActivities = makeActivities(cardObject.activities);
    article.appendChild(resultMakeActivities);
    article.appendChild(makeFooter(resultMakeActivities));

    return article;
}

const makeHeader = (title) => {
    let header = document.createElement("header");
    header.classList = "cleanCard__header";

    let heading = document.createElement("h1");
    heading.classList = "cleanCard__heading";
    heading.innerText = title;
    header.appendChild(heading);

    return header;
}

const makeActivities = (activitiesArray) => {
    let activities = document.createElement("ul");
    activities.classList = "cleanCard__activities";

    for (let i = 0; i < activitiesArray.length; i++) {
        activities.append(makeActivity(activitiesArray[i]));
    }

    return activities;
}

const makeActivity = (activityObject) => {
    let activity = document.createElement("li");
    activity.classList = "cleanCard__activity";
    if (activityObject.done === true) {
        activity.classList = "cleanCard__activity cleanCard_activity--done";
    }
    activity.innerText = activityObject.title;
    activity.addEventListener("click", function () {
        this.classList.toggle("cleanCard__activity--done")
    })
    return activity
}

const makeFooter = (resultMakeActivities) => {
    let footer = document.createElement("footer");
    footer.classList = "cleanCard__footer";

    let input = document.createElement("input");
    input.classList = "cleanCard__input";
    input.placeholder = "Voeg taak toe...";
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const activityFromFunction = makeActivity({ title: input.value, done: false });
            resultMakeActivities.appendChild(activityFromFunction);
        }
    })
    footer.appendChild(input);

    let button = document.createElement("button");
    button.classList = "cleanCard__button";
    button.innerText = "Add";

    button.addEventListener("click", function () {
        const activityFromFunction = makeActivity({ title: input.value, done: false });
        resultMakeActivities.appendChild(activityFromFunction);
    })
    footer.appendChild(button);

    return footer;
}

const init = () => {
    fetch("../data/cards.json").then(
        response => response.json()
    ).then(
        data => renderCards(data)
    )
}

init();