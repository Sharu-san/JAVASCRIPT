// Create an application with following roles:
// admin  - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume contents

var user= "admin";

switch (user) {
    case "admin":
    console.log("You get full access");    
        break;
    case "subadmin":
    console.log("gets access to create/delete courses");    
        break;
    case "testprep":
        console.log("gets access to create/delete test");    
            break;
    case "user":
            console.log("gets access to consume contents");    
                break;
        
    default:
        console.log("Trail user");
        break;
}