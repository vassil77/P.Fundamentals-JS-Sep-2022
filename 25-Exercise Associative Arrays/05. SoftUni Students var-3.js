function f2(params) {
    let list = {};

    for (let line of params) {
        //add Course
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

            if (list.hasOwnProperty(course) && list[course].capacity > 0) {

                if (!list[course].hasOwnProperty(userEmail)) {
                    list[course][userEmail] = credits; //test
                    list[course].capacity--;
                } else {
                    list[course][userEmail] = credits; //test
                }
            }
            continue;
        }
    }

    // let sortedArr = Object.entries(list).sort((a, b) => Object.entries(b[1]).length - Object.entries(a[1]).length);
    let sortedArr = Object.entries(list).sort(([keyA,valueA], [keyB,valueB]) => Object.entries(valueB).length - Object.entries(valueA).length);

    //PRINT
    for (let course of sortedArr) {
        console.log(`${course[0]}: ${course[1].capacity} places left`);

        let sorted = Object.entries(course[1]).sort(([keyA,valueA], [keyB,valueB]) => valueB - valueA);//test

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
        'JavaBasics: 2',
        'user1[25] with email user1@user.com joins C#Basics',
        'C#Advanced: 3',
        'JSCore: 4',
        'user2[30] with email user2@user.com joins C#Basics',
        'user13[50] with email user13@user.com joins JSCore',
        'user1[25] with email user1@user.com joins JSCore',
        'user8[18] with email user8@user.com joins C#Advanced',
        'user6[85] with email user6@user.com joins JSCore',
        'JSCore: 2',
        'user11[3] with email user11@user.com joins JavaBasics',
        'user45[105] with email user45@user.com joins JSCore',
        'user007[20] with email user007@user.com joins JSCore',
        'user700[29] with email user700@user.com joins JSCore',
        'user900[88] with email user900@user.com joins JSCore',
    ]
);



//console.log(`-----------------`);