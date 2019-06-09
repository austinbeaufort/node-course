// Accept User Input via the Terminal.

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('What is your name? ', name => {
//     console.log(`Hi ${name}`);
//     rl.close();
// });



// Exercise using multiple terminal inputs.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', name => {
    const username = name;
    rl.question('What is your favorite color? ', color => {
        console.log(`${username}'s favorite color is ${color}`);
        rl.close();
    })
})