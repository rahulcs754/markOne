//Importing libraries
var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.green('What is your name ?  '));

console.log('Welcome '+chalk.blue(userName)+',\n');
console.log(chalk.green('******************'));
console.log(chalk.green('Do You Know Rahul ?'));
console.log('\n'+chalk.blue('Let me ask some questions about rahul')+'\n');

var score = 0;

function question(ques, ans){
  var userAns = readlineSync.question(chalk.green(ques));

  if( userAns == ans){
    score = score + 1 ;
    console.log(chalk.green('Correct'));
    console.log('current score : '+chalk.blue(score));
    console.log(chalk.green('******************'));
  } else{
    if( score > 0  ) { score = score - 1 ;}
    console.log(chalk.red('Wrong!'));
    console.log('current score : '+chalk.blue(score));
    console.log(chalk.green('******************'));
  } 

}

const quesList = [{question:'Where do i live? \n 1.Bangalore \n 2.Gwalior \n 3.Home \n What is your answer 1,2,3 \n ',ans:'home'},
          {question:'what type movie do i like? \n 1. Action \n 2.Horror \n 3.Comedy  \n What is your answer 1,2,3 \n ',ans:1},
          {question:'what is my favorite color? \n 1.Blue \n 2.Red  \n What is your answer 1,2,3 \n ',ans: 2},
          {question:'what is my favorite number? \n 1. 1 \n 2. 2 \n 3. 3    \n What is your answer 1,2,3 \n ',ans:3},
          {question:'what season do i like? \n 1. summer   \n 2. winter  \n What is your answer 1,2 \n ',ans:2},
          ];


for (let i = 0 ; i< quesList.length ; i++){
  question(quesList[i].question,quesList[i].ans);
}
  

console.log(chalk.blue('------------------'));
console.log(chalk.yellow('Your Last Score :'+score));
console.log(chalk.blue('------------------'));





