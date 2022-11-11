function f2(params) {
    let list = {};

    for (let line of params) {
        //Add Courses
        if (line.includes(': ')) {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity);

            if (!list.hasOwnProperty(course)) {
                list[course] = {
                    capacity: 0,
                    courseUserList: []
                };

            }

            list[course].capacity += capacity;
            continue;
        }

        //Join Users
        if (line.includes(' with email ')) {
            let [user, credits, a, email, course] = line
                .replace('[', '&')
                .replace(']', '&')
                .replace(' with email ', '&')
                .replace(' joins ', '&')
                .split('&');
            credits = Number(credits);
            let userEmail = user + ", " + email;

            if (list.hasOwnProperty(course) && list[course].capacity > 0) {

                list[course].courseUserList.push({credits,userEmail});
                list[course].capacity--;

            }
            continue;
        }
    }


    //Sorting

    let sortedArr = Object.entries(list).sort((a, b) => Object.entries(b[1].courseUserList).length - Object.entries(a[1].courseUserList).length);

    //PRINT + Deep Sorting
    for (let [course, listUsers] of sortedArr) {
        console.log(`${course}: ${listUsers.capacity} places left`);

        let sorted = listUsers.courseUserList
            .sort((a, b) => b.credits - a.credits);

        for (const user of sorted) {
            console.log(`--- ${user.credits}: ${user.userEmail}`);
        }

    }


}

//Judge-----------------
f2(
    [
        'JavaBasics: 15',
        'user1[26] with email user1@user.com joins JavaBasics',
        'user2[36] with email user11@user.com joins JavaBasics',
        'JavaBasics: 5',
        'C#Advanced: 5',
        'user1[26] with email user1@user.com joins C#Advanced',
        'user2[36] with email user11@user.com joins C#Advanced',
        'user3[6] with email user3@user.com joins C#Advanced',
        'C#Advanced: 1',
        'JSCore: 8',
        'user23[62] with email user23@user.com joins JSCore'
    ]
);



//console.log(`-----------------`);