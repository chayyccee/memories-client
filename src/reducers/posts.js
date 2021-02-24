export default (posts = [], action) => {
    // usually you use if statements but you could have multiple if statements for alot of things.
    // so i used the switch and case instead

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}