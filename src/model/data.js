const userAccounts = [
    {
        username: 'lephong',
        password: '123456',
    },
    {
        username: 'duykhanh',
        password: '123456',
    },
    {
        username: 'maihoang',
        password: '123456',
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
        name: "Phong",
        votes: 3010,
        posts: 3
    },
    {
        rank: 2,
        name: "Alexander",
        votes: 2400,
        posts: 3
    },
    {
        rank: 3,
        name: "Napoleon",
        votes: 1955,
        posts: 5
    },
    {
        rank: 4,
        name: "Meiji the Great",
        votes: 1000,
        posts: 1
    },
    {
        rank: 5,
        name: "Khánh",
        votes: 500,
        posts: 1
    },
]

const posts = [
    {
        owner: 'Phong',
        time: '05/12/2020',
        image: 'img/zara-003.jpg',
        content: 'Up cái ảnh cho người ta biết mình còn sống',
        upvotes: 1500,
        comments: [
            {
                owner: 'Hoàng',
                time: '05/12/2020',
                content: 'Nice <3'
            },
            {
                owner: 'My',
                time: '05/12/2020',
                content: 'LULW'
            }
        ]
    },
    {
        owner: 'Phong',
        time: '04/12/2020',
        image: 'img/photo5.jpg',
        content: 'Xin chào, tôi tên là Phong',
        upvotes: 1500,
        comments: [
            {
                owner: 'Tâm',
                time: '04/12/2020',
                content: 'Xin chào'
            },
            {
                owner: 'Khánh',
                time: '05/12/2020',
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