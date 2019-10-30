function writedate() {
var mName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
now.setDate(1);
var month = now.getMonth();
var year = now.getFullYear();
var firstDay = now.getDay();
var firstWed = 1 + (3 - firstDay + 7) % 7 + 21;
var monthName = mName[now.getMonth()];
var writeout = monthName;
writeout+=" ";
writeout+=firstWed;
writeout+=", ";
writeout+=year;
document.write(writeout);
}
