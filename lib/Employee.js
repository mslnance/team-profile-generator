class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        if (this.name) {
        return `${this.name}`;
        }
        return `Please enter a name`;
    };

    getId () {
        if (this.id) {
            return this.id;
            }
            return `Please enter the employee ID`;
    };

    getEmail () {
        if (this.email) {
        return `${this.email}`;
        }
        return `Please enter a email`;
    };

    getRole () {
        return `Employee`;
    };

}
console.log(new Employee().getRole());
module.exports = Employee;