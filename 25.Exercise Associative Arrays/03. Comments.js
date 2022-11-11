function f2(params) {
    let listUsers = [];
    let articleList = [];
    let commentList = {};

    for (let line of params) {
        if (line.search("user ") === 0) {
            let userName = line.split("user ").pop();
            listUsers.push(userName);
            continue;
        }

        if (line.search("article ") === 0) {
            let articleName = line.split("article ").pop();
            articleList.push(articleName);
            continue;
        }

        if (line.search(" posts on ") >= 0) {
            let userName = line.split(" posts on ").shift();
            line = line.split(" posts on ").pop();
            line = line.split(': ');
            let article = line.shift();
            let [title, content] = line.shift().split(', ');

            if (listUsers.includes(userName) && articleList.includes(article)) {
                if (!commentList.hasOwnProperty(article)) {
                    commentList[article] = {};
                    // commentList[article].countComments = 0;
                }
                commentList[article][userName] = [title, content];
                // commentList[article].countComments++;
            }
            continue;
        }
    }
    //Sorting
    for (let article in commentList) {
        let sortedUsers = Object.entries(commentList[article]).sort((a, b) => a[0].localeCompare(b[0]));
        commentList[article] = Object.fromEntries(sortedUsers);
    }

    let sortedArr = Object.entries(commentList).sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length);
    commentList = Object.fromEntries(sortedArr);

    //PRINT
    for (const article in commentList) {
        console.log(`Comments on ${article}`);

        for (const user in commentList[article]) {
            if (user !== 'countComments') {
                console.log(`--- From user ${user}: ${commentList[article][user][0]} - ${commentList[article][user][1]}`);
            }
        }
    }
}

//-----------------
f2(
    [
        'user aUser123',
        'someUser posts on someArticle: NoTitle, stupidComment',
        'article Books',
        'article Movies',
        'article Shopping',
        'user someUser',
        'user auSeR4',
        'user lastUser',
        'auSeR4 posts on Books: I like books, I do really like them',
        'auSeR4 posts on Movies: I also like movies, I really do',
        'someUser posts on Movies: title, I go shopping every day',
        'someUser posts on Movies: Like, I also like movies very much'
    ]
);



//console.log(`-----------------`);