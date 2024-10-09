interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Miller",
    age: 30,
    location: "Cal"
}
const student2: Student = {
    firstName: "Anna",
    lastName: "George",
    age: 25,
    location: "Texas"
}

const studentsList = [student1, student2];

const body = document.body
const table = document.createElement('table');

const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const lastNameHeader = document.createElement('th');
const ageHeader = document.createElement('th');
const locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
lastNameHeader.textContent = 'Last Name';
ageHeader.textContent = 'Age';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(lastNameHeader);
headerRow.appendChild(ageHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const lastNameCell = document.createElement('td');
    const AgeCell = document.createElement('td');
    const locationCell = document.createElement('td');
  
    firstNameCell.textContent = student.firstName;
    lastNameCell.textContent = student.lastName;
    AgeCell.textContent = student.age.toLocaleString();
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(AgeCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

body.appendChild(table);
