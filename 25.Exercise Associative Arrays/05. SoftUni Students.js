function f2(params) {
    let list = {};

    for (let line of params) {
        //Add Course
        if (line.includes(': ')) {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity);

            if (!list.hasOwnProperty(course)) {
                list[course] = {};
                list[course].capacity = 0;
            }

            list[course].capacity += capacity;
            continue;
        }

        //Join users
        if (line.includes(' with email ')) {
            let [user, credits, a, email, course] = line
                .replace('[', '&')
                .replace(']', '&')
                .replace(' with email ', '&')
                .replace(' joins ', '&')
                .split('&');
                credits=Number(credits);
            let userEmail = user + ", " + email;

            if (list.hasOwnProperty(course) && list[course].capacity > 0) {
                if (!list[course].hasOwnProperty(userEmail)) {
                    list[course][userEmail] = credits;
                    list[course].capacity--;
                }
            }
            // console.log(userEmail);
            continue;
        }
    }


    //Sorting
    for (let course in list) {
        let sorted = Object.entries(list[course]).sort((a, b) => b[1] - a[1]);
        list[course] = Object.fromEntries(sorted);
    }

    let sortedArr = Object.entries(list).sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length);
    list = Object.fromEntries(sortedArr);



    //PRINT
    for (let course in list) {
        console.log(`${course}: ${list[course].capacity} places left`);

        

        for (let user in list[course]) {
            if (user !== 'capacity') {
                console.log(`--- ${list[course][user]}: ${user}`);
            }
        }
    }
}

//JUDGE-----------------
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