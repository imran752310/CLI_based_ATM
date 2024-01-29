import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright(`
__________________________________________________________________________
|: : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : |
| : : : : : : : : : : : : : : : :_________________________: : : : : : : : :|
|: : : : : : : : : : : : : : : _)                         (_ : : : : : : : |
| : : : : : : : : : : : : : : )    Welcome To Meezan Bank   ( : : : : : : :|
|: :           : : : :__________)_________________________(__________  : : |
| _____________ : _ :/ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ\: _ :|
||  _________  | /_\ '.Z.'.Z.'.Z.'.Z.'.Z.'.Z.'.Z.'.Z.'.Z.'.Z.'.Z.'.Z.' /_\ |
|| |    |    | |:=|=: |Manager  *         _________ Accountent      | :=|=:|
|| |    |    | | : : :|   ______    _  .'         '.  _    ______   |: : : |
|| |    |    | |======| .' ,|,  '. /_\ |           | /_\ .'  ,|, '. |======|
|| |    |    |:|      | | ;;;;;  | =|= |           | =|= |  ;;;;; | |      |
|| |    |    | |<---  | |_';;;'_n|     |           |     |$_';;;'_| |  --->|
|| |    |    | |      | |_|-;-|__|     |           |     |__|-;-|_| |      |
|| |    |    | |      | |________|     |           |     |________| |      |
|| |    |    | |      |                |           |                |      |
lc_|____|____|_|______|________________|           |________________|______|
`));
const userInput = await inquirer.prompt([
    {
        type: 'input',
        name: 'userID',
        message: 'Enter User ID'
    }, {
        type: 'input',
        name: 'userPin',
        message: 'Enter User Pin'
    }, {
        type: 'list',
        name: 'accountType',
        choices: ["Current", "Saving"],
        message: 'Select Your Acount Type'
    }, {
        type: 'list',
        name: 'transactionType',
        choices: ["Fast Cash", "Cash Withdraw", "Balance Inquiry"],
        message: 'Select Your Transaction'
    },
    {
        type: 'number',
        name: "amount",
        message: "Enter Your Widthraw Amount",
        when(userInput) {
            return userInput.transactionType === "Cash Withdraw";
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 5000, 10000, 20000, 25000],
        message: "Select amount  you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "Fast Cash";
        }
    }
]);
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteredAmount = userInput.amount;
if ((userID && userPin) && userInput.transactionType === "Balance Inquiry") {
    const userBalance = Math.floor(Math.random() * 100000);
    console.log(`Your Current Balance is Rs  ${userBalance}\n`);
}
else if (userID & userPin) {
    const userBalance2 = Math.floor(Math.random() * 10000);
    if (userBalance2 > enteredAmount) {
        console.log(`Your Acount has been Debited with Rs ${enteredAmount}\n And Your Remainning Balance is ${userBalance2 - enteredAmount}`);
    }
    else {
        console.log(`\n Unsufficient Balance `);
    }
}
