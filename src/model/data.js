const userAccounts = [
    {
        username: 'lephong',
        password: 123456,
    },
    {
        username: 'duykhanh',
        password: 123456,
    },
    {
        username: 'maihoang',
        password: 123456,
    },
]

const popularImages = {

};

const popularUsers = {

};

const contest = {
    name: "Phối đồ ABC",
    description: "Sân chơi cho các bạn. Cùng nhau tham gia các bạn êi",
    startdate: "01/12/2020",
    enddate: "31/12/2020",
    reward: "100.000.000 đ",
};

const ranking = [
    {
        rank: 1,
        name: "Khánh",
        votes: 1500,
        posts: 2
    },
    {
        rank: 2,
        name: "Hoàng",
        votes: 1400,
        posts: 2
    },
    {
        rank: 3,
        name: "Tâm",
        votes: 1200,
        posts: 4
    },
    {
        rank: 4,
        name: "My",
        votes: 1000,
        posts: 1
    },
    {
        rank: 5,
        name: "Phong",
        votes: 1,
        posts: 1
    },
]

const posts = [
    {
        owner: 'Phong',
        time: '05/07/2020',
        image: 'img/wall.jpg',
        content: 'Up cái ảnh cho người ta biết mình còn sống',
        upvotes: 1500,
        comments: [
            {
                owner: 'Hoàng',
                time: '05/07/2020',
                content: 'Tui là H <3'
            },
            {
                owner: 'My',
                time: '05/07/2020',
                content: 'Tui là M (y)'
            }
        ]
    },
    {
        owner: 'Phong',
        time: '05/07/2020',
        image: 'img/photo5.jpg',
        content: 'Xin chào, tôi tên là Phong',
        upvotes: 1500,
        comments: [
            {
                owner: 'Hoàng',
                time: '05/07/2020',
                content: 'Xin chào'
            },
            {
                owner: 'My',
                time: '05/07/2020',
                content: 'Yahalo'
            }
        ]
    },
];

module.exports = {
    userAccounts,
    popularImages,
    popularUsers,
    contest,
    ranking,
    posts
};