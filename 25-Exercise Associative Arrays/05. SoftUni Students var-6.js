function f2(params) {
    let list = {};

    for (let line of params) {

        //Add Course
        if (line.includes(': ')) {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity);

            if (!list.hasOwnProperty(course)) {
                list[course] = {
                    capacity: 0,
                    numUsers: 0

                };
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
            credits = Number(credits);
            // let userEmail = user + ", " + email;

            if (list.hasOwnProperty(course) && list[course].capacity > 0) {

                // if (!list[course].hasOwnProperty(user)) {
                    list[course][user] = {
                        credits,
                        email
                    };
                    list[course].capacity--;
                    list[course].numUsers++;
                // } else {
                //     list[course][user] = {
                //         credits,
                //         email
                //     };
                // }
            }
            continue;
        }
    }


    //Sorting

    let sortedArr = Object.entries(list).sort((a, b) => b[1].numUsers - a[1].numUsers);

    //PRINT
    for (let course of sortedArr) {
        console.log(`${course[0]}: ${course[1].capacity} places left`);

        let sorted = Object.entries(course[1]).sort((a, b) => b[1].credits - a[1].credits);

        if (sorted.length > 2) {
            for (let user of sorted) {
                if (user[0] !== 'capacity' && user[0] !== 'numUsers') {
                    console.log(`--- ${user[1].credits}: ${user[0]}, ${user[1].email}`);
                }
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
        'user2[201] with email user201@user.com joins C#Advanced',
        'user3[6] with email user3@user.com joins C#Advanced',
        'C#Advanced: 1',
        'JSCore: 8',
        'user23[62] with email user23@user.com joins JSCore'
    ]
);



//console.log(`-----------------`);