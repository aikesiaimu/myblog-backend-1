const getList = (author, keyword) => {
    //先返回格式正确的假数据
    return [
        {
            id: 1,
            titile: '标题A',
            content: '内容A',
            createTime: 1577146805170,
            author: 'Ryan'
        },
        {
            id: 2,
            titile: '标题B',
            content: '内容B',
            createTime: 1577146876883,
            author: 'Holly'
        }
    ]
}

module.exports = {
    getList
}