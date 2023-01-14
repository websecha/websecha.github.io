const valuesCards = [
    {
        "name": "Березанский Артём Витальевич",
        "group": "40-01",
        "link1": "https:\/\/mizz3r.github.io\/",
        "link2": "http:\/\/starosta.space\/"
    },
    {
        "name": "Докучаева Ксения Сергеевна",
        "group": "40-01"
    },
    {
        "name": "Евсюков Сергей Андреевич",
        "group": "40-01"
    },
    {
        "name": "Загретдинова Алина Наилевна",
        "group": "40-01",
        "link1": "https:\/\/alinazgd.github.io\/mysite\/"
    },
    {
        "name": "Котрунов Владимир Олегович",
        "group": "40-01",
        "link1": "https:\/\/sn4ld.github.io\/jan20203\/",
        "link2": "http:\/\/kotrunov.space\/"
    },
    {
        "name": "Кравоцва Полина Викторовна",
        "group": "40-01",
        "link1": "https:\/\/polya25.github.io\/Site1\/"
    },
    {
        "name": "Манукян Анаит Арменовна",
        "group": "40-01",
        "link1": "http:\/\/anahit.byethost22.com\/",
        "link2": "http:\/\/anahitnn.space\/"
    },
    {
        "name": "Моисейкина Валерия Витальевна",
        "group": "40-01",
        "link1": "https:\/\/leramoiseikina.github.io\/Tesla\/"
    },
    {
        "name": "Пушечкина Ангелина Андреевна",
        "group": "40-01"
    },
    {
        "name": "Савенкова Влада Владиславовна",
        "group": "40-01",
        "link1": "https:\/\/visvly.github.io\/my_site\/"
    },
    {
        "name": "Сыщиков Владислав Денисович",
        "group": "40-01"
    },
    {
        "name": "Фадев Иван Сергеевич",
        "group": "40-01",
        "link1": "http:\/\/ivanfadeev123.ru"
    },
    {
        "name": "Федорова Мария Валерьевна",
        "group": "40-01",
        "link1": "https:\/\/sperantino.github.io\/My_Site\/"
    },
    {
        "name": "Холопцева Валерия Сергеевна",
        "group": "40-01",
        "link1": " https:\/\/malissshhhkaa.github.io\/"
    },
    {
        "name": "Шаховский Тимофей Олегович",
        "group": "40-01",
        "link1": "http:\/\/shahovsky.unaux.com\/",
        "link2": "http:\/\/shakhovskiy.space\/"
    },
    {
        "name": "Блинов Кирилл Константинович",
        "group": "40-02",
        "link1": "https:\/\/killdareal.github.io\/Killdareal.githab.io\/#"
    },
    {
        "name": "Гоел Полина Сандиповна",
        "group": "40-02",
        "link1": "https:\/\/dogrealm.github.io\/MySite\/"
    },
    {
        "name": "Губина Лолита Константиновна",
        "group": "40-02"
    },
    {
        "name": "Дрожжина Анна Алексеевна",
        "group": "40-02",
        "link1": "https:\/\/kotyanya69.github.io\/My_Site\/"
    },
    {
        "name": "Евдокимов Владимир Владиславович",
        "group": "40-02",
        "link1": "https:\/\/konteenu.github.io\/My_Site\/"
    },
    {
        "name": "Зудина Анфиса Владимировна",
        "group": "40-02",
        "link1": "https:\/\/zudinaanfisa.github.io\/mySite\/index.html"
    },
    {
        "name": "Калиберда Татьяна Евгеньевна",
        "group": "40-02",
        "link1": "https:\/\/tke12.github.io\/site\/main"
    },
    {
        "name": "Крылов Константин Александрович",
        "group": "40-02",
        "link1": "https:\/\/affamen.github.io\/mySite\/#"
    },
    {
        "name": "Ресса Антонио Сесаревич",
        "group": "40-02"
    },
    {
        "name": "Рудакова Лидия Юрьевна",
        "group": "40-02",
        "link1": "https:\/\/l1dz.github.io\/mySite\/main"
    },
    {
        "name": "Телепнёв Даниил Андреевич",
        "group": "40-02",
        "link1": "https:\/\/tahaner.github.io\/MySite\/"
    },
    {
        "name": "Уткин Иван Евгеньевич",
        "group": "40-02"
    },
    {
        "name": "Чудин Артём Аскарович",
        "group": "40-02"
    },
    {
        "name": "Щербков Данила Алексеевич",
        "group": "40-02"
    }
];

const cardTemplate = document.getElementById('card-template');

const createEmptyCard = () => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);

    return card;
};

const renderCards = (inputArray) => {
    inputArray.map(element => {
        const card = createEmptyCard();
        const projectLink = card.querySelector('.project-link');
        const siteLink = card.querySelector('.site-link');

        card.querySelector('.card-header__group').textContent = element.group;
        card.querySelector('.card-title').textContent = element.name;

        if (element.link1 && element.link1 !== '') {
            projectLink.href = element.link1;
        } else {
            projectLink.style.display = 'none';
        }

        if (element.link2 && element.link2 !== '') {
            siteLink.href = element.link2;
        } else {
            siteLink.style.display = 'none';
        }

        document.querySelector('.row').append(card)
    })
}

renderCards(valuesCards);