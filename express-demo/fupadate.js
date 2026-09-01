const fs = require("fs");
fs.appendFile("student.txt", "\nMarks: 98", (err) => {
    if (err) {
        console.log("Error upadating file : ", err);
        return;
    }
    console.log("File upadated Successfully!");
});
