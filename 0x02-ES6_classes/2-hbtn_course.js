export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Name Getter And Setter

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // length Getter And Setter

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // students Getter And Setter

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students) && students.every((item) => typeof item === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
