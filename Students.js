const prompt = require('prompt-sync')( {sigint: true});

let totalStudents = 5;

let  students = [];
for (let i = 1; i <= totalStudents ; i++)
{

   let studentName = prompt(`Enter name of student number ${i}:`);
   let studentAge = prompt(`Enter age of student number ${i}:`);
   let studentMark = prompt(`Enter mark of student number ${i}:`);
   let studentModule = prompt(`Enter module of student number ${i}:`);


   let student = {
       name: studentName,
       age: Number(studentAge),
       mark: Number(studentMark),
       module : studentModule,
   }

   students.push(student);

}

function displayNameAndMark (students)
{
    let details = '';

    for (student of students)
    {
        details += `Name: ${student.name} and Mark: ${student.mark}`

    }

    console.log(details)
}

displayNameAndMark(students);


function average(students)
{
    let no = students.length;
    let mark = 0;
    for (student of students)
    {
        mark += student.mark;

    }

    let avg = mark/no;
    console.log(`Average is ${avg.toFixed(2)}`);

}

average(students)


function topStudent(students)
{
    let top = 0;
    let topStudents = [];
    for(student of students)
    {
        if(top <= student.mark)
        {
            top = student.mark;

        }


    }




    console.log(results);
}

topStudent(students);