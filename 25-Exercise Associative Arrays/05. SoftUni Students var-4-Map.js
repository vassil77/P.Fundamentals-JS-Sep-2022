function f2(params) {
    let list = new Map();

    for (let line of params) {
        //add Course
        if (line.includes(': ')) {
            let [course, capacity] = line.split(': ');
            capacity = Number(capacity);
            let userList = new Map();

            if (!list.has(course)) {
                userList.set('capacity', 0);
                list.set(course, userList);
            }
            capacity += list.get(course).get('capacity');
            list.get(course).set('capacity', capacity);
            // console.log(list.get(course).get('capacity'));
            continue;
        }


        //User Join
        if (line.includes('with email')) {
            line = line
                .replace('[', '&')
                .replace(']', '&')
                .replace(' with email ', '&')
                .replace(' joins ', '&')
                .split('&');
            let user = line.shift();
            let credits = Number(line.shift());
            let course = line.pop();
            let email = line.pop();
            let userEmail = user + ", " + email;
            userList = list.get(course);
            // console.log(userList);

            if (list.has(course) && list.get(course).get('capacity') > 0) {

                if (!list.get(course).has(userEmail)) {
                    list.get(course).set(userEmail, credits); //test
                    capacity = list.get(course).get('capacity') - 1;
                    list.get(course).set('capacity', capacity);
                }
            }

            // console.log(list.get(course)(userEmail));
            continue;
        }
    }

    let sortedArr = Array.from(list).sort(([keyA, valueA], [keyB, valueB]) => valueB.size - valueA.size);
    // console.log(...sortedArr); //test
    //PRINT
    for (let course of sortedArr) {
        console.log(`${course[0]}: ${course[1].get('capacity')} places left`);

        let sorted = Array.from(course[1]).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA); //test

        for (let [userEmail, credits] of sorted) {
            if (userEmail !== 'capacity') {
                console.log(`--- ${credits}: ${userEmail}`);
            }
        }
    }
}

//Copy to Judge__________________
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