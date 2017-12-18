const app = new Vue({
    el: "#app",
    data: {
      bobby: {
        first: "Bobby",
        last: "Boone",
        age: 25
      },
      john: {
        first: "John",
        last: "Boby",
        age: 35,
      }
    },
    computed: {
        bobbyFullName(){
            return `${this.bobby.first} ${this.bobby.last}`
        },
        johnFullName(){
            return `${this.john.first} ${this.john.last}`
        },
        johnAgeInOneYear(){
            return this.john.age + 1;
        }
    },
    filters:{
        fullName(value){
            return `${value.first} ${value.last}`;
        },
        ageInOneYear(age){
            return age + 1;
        }
    },
    template: `
      <div>
        <h2>Name: {{john | fullName}}</h2>
        <h2>Age: {{john.age | ageInOneYear}}</h2>
        <h2>Name: {{bobby | fullName}}</h2>
        <h2>Age: {{bobby.age | ageInOneYear}}</h2>
      </div>
    `
  })