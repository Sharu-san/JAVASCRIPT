function getuserroles(name,roles){
    switch (roles) {
        case "admin":
            return`${name} is admin user hass all access`;
            break;
        case "subadmin":
            return`${name} is subadmin user with access to craete and delete courses`;
            break;
        case "testprep":
            return`${name} is testprep with access to create and delete test`;
            break;    
    
        default:
            return`${name} is a trail user`;
            break;
    }
}

// console.log(getuserroles("Sharu", "admin"));

var getuser = getuserroles("Sharu" , "subadmin");
console.log(getuser);