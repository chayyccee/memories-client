export default (posts = [], action) => {
    // usually you use if statements but you could have multiple if statements for alot of things.
    // so i used the switch and case instead

    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload); // keep all the post except the one where post id is not same as the action.payload
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}