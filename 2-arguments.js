/*const args = process.arg.lenght-2;
if (args === 0) {
    console.log("No argument");
} else if (args === 1) {
    console.log("Argument found");
} else{
    console.log("Argument found");
}*/

const args = process.argv.length - 2;

if (args === 0) {
  console.log('No argument');
} else if (args === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
