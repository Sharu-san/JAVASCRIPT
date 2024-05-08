var user= {
    FirstName : "Sharu",
    LastName : "san",
    Role : "admin",
    LoggeInFromGoogle : true,
    LoginCount : 20,
    Courselist: [],
    BuyCourse : function(CourseName){
        this.Courselist.push(this.CourseName);

    },
    getCourseCount : function(){
        return`${this.FirstName + this.LastName} is enrolled in total of ${this.Courselist.length} courses`;
    },
    Information : function(){
        return`${this.FirstName + this.LastName} is a ${this.Role} user with logincount  ${this.LoginCount}, the user holds the courseCount of ${this.Courselist.length }`;
    }
}
// console.log(user);
// console.log(user.getCourseCount());
user.BuyCourse("React js");
user.BuyCourse("JavaScript")
console.log(user.getCourseCount());
console.log(user.Information());
