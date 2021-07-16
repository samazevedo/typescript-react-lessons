function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 16) {
        console.log("allow to drive");
    }
    else {
        console.log("do not allow ot drive");
    }
}
var sam = {
    name: "sam",
    age: 30
};
canDrive(sam);
