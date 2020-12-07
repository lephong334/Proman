const popularImages = {

};

const popularUsers = {

};

const posts = [
    {
        owner: 'Phong',
        time: '05/07/2020',
        image: 'img/wall.jpg',
        content: 'Xin chào, tôi tên là Phong',
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
        image: 'img/wall.jpg',
        content: 'Xin chào, tôi tên là Phong',
        upvotes: 1500,
        comments: [
            {
                owner: 'Hoàng',
                time: '05/07/2020',
                contents: 'Tui là Hoàng'
            },
            {
                owner: 'My',
                time: '05/07/2020',
                contents: 'Tui là My'
            }
        ]
    },
];

module.exports = {
    popularImages,
    popularUsers,
    posts
  };