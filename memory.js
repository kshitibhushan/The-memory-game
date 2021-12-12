document.addEventListener('DOMContentLoaded', () => {
    const cardarray = [{
            name: 'user1',
            img: 'images/user-1.png'
        },
        {
            name: 'user2',
            img: 'images/user-2.png'
        },
        {
            name: 'user3',
            img: 'images/user-3.png'
        },
        {
            name: 'cat1',
            img: 'images/category-1.jpg'
        },
        {
            name: 'cat2',
            img: 'images/category-2.jpg'
        },
        {
            name: 'cat3',
            img: 'images/category-3.jpg'
        },
        {
            name: 'user1',
            img: 'images/user-1.png'
        },
        {
            name: 'user2',
            img: 'images/user-2.png'
        },
        {
            name: 'user3',
            img: 'images/user-3.png'
        },
        {
            name: 'cat1',
            img: 'images/category-1.jpg'
        },
        {
            name: 'cat2',
            img: 'images/category-2.jpg'
        },
        {
            name: 'cat3',
            img: 'images/category-3.jpg'
        }

    ]
    cardarray.sort(() => Math.random() - 0.5);
    const grid = document.querySelector('.grid');
    const resultdisplay = document.getElementById('result');
    let cardschosen = [];
    let cardschosenid = [];
    let cardswon = [];

    function create() {
        var i;
        for (i = 0; i < 12; i++) {
            var card = document.createElement('img');
            card.src = 'memory.jpg';
            card.setAttribute('data-id', i);

            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    function checkforMatch() {
        const cards = document.querySelectorAll('img');
        const option1 = cardschosenid[0];
        const option2 = cardschosenid[1];

        if (option1 == option2) {
            cards[option1].setAttribute('src', 'memory.jpg');
            alert('!!!!!!same images');
        } else if (cardschosen[0] === cardschosen[1]) {
            cards[option2].setAttribute('src', '');
            cards[option1].setAttribute('src', '');
            cards[option1].removeEventListener('click', flipcard);
            cards[option2].removeEventListener('click', flipcard);
            cardswon.push(cardschosen);
        } else {
            cards[option2].setAttribute('src', 'memory.jpg');
            cards[option1].setAttribute('src', 'memory.jpg');
        }
        cardschosen = [];
        cardschosenid = [];
        resultdisplay.textContent = cardswon.length;
        if (cardswon.length === cardarray.length / 2) {
            resultdisplay.textContent = 'congrats!!';
            alert('congratulations!!!!!!!!!!!!!!!')
        }
    }

    function flipcard() {
        let cardId = this.getAttribute('data-id');
        cardschosen.push(cardarray[cardId].name);
        cardschosenid.push(cardId);
        this.setAttribute('src', cardarray[cardId].img);
        if (cardschosen.length === 2) {
            setTimeout(checkforMatch, 200)
        }
    }
    create();
})