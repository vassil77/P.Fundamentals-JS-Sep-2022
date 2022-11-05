function f2(params) {

    class Grade {
        constructor(grade) {
            this.grade = grade;
            this.totalLast = 0;
            this.list = [];
        }

        addStudent(student) {
            this.list.push(student);
            this.totalLast += student.avgScore;

        }

    }

    let totalList = [];

    for (let i = 0; i < params.length; i++) {
        let line = params[i].split(', ');
        let studentName = line[0].split(': ')[1];
        let nextGrade = Number(line[1].split(': ')[1]) + 1;
        let avgScore = Number(line[2].split(': ')[1]);
        //console.log(avgScore);
        let currentStudent = {};
        currentStudent.name = studentName;
        currentStudent.grade = nextGrade;
        currentStudent.avgScore = avgScore;

        if (avgScore >= 3) {
            totalList.push(currentStudent);
        }
    }

    totalList.sort((a, b) => a.grade - b.grade);

    let grade = totalList[0].grade;
    let lastGrade = totalList[totalList.length - 1].grade;

    while (grade <= lastGrade) {

        currentGrade = new Grade(grade);
        let listOfNames = [];
        let isEmpty = true;
        for (const elem of totalList) {

            if (elem.grade === grade) {
                currentGrade.addStudent(elem);
                listOfNames.push(elem.name);
                isEmpty = false;
            }
        }

        let avgLast = currentGrade.totalLast / currentGrade.list.length;

        if (!isEmpty) {
            console.log(`${grade} Grade
List of students: ${listOfNames.join(', ')}
Average annual score from last year: ${avgLast.toFixed(2)}\n`);
        }
        grade++;
    }





    //console.log(...totalList);
}

//-----------------
f2(
    [
        'Student name: George, Grade: 5, Graduated with an average score: 2.75',
        'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
        'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
        'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
        'Student name: John, Grade: 9, Graduated with an average score: 2.90',
        'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
        'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
);



//console.log(`-----------------`);