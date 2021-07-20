const quotes = [
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다",
        author: "파울로 코엘료"
    },

    {
        quote: "신은 용기있는자를 결코 버리지 않는다",
        author: "켄러"
    },

    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        author: "사무엘 존슨"
    },

    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
        author: "F.스콧 핏제랄드"
    },

    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
        author: "괴테"
    },

    {
        quote: "겨울이 오면 봄이 멀지 않으리",
        author: "셸리"
    },

    {
        quote: "절대 어제를 후회하지 마라, 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        author: "L.론허바드"
    },

    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: "볼드윈"
    },

    {
        quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라",
        author: "탈무드"
    },

    {
        quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
        author: "톰 모나건"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;