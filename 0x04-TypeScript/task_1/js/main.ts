interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; 
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): void;
}

interface Student {
    workOnHomework(): string;
    displayName(): string;
}


class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName(){
        return this.firstName;
    }
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

const student = new StudentClass('John', 'Doe');
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework());

console.log(teacher3);