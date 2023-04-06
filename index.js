/*let cnt = 0;
while(cnt < 10){
console.log(cnt)
 cnt +=2
}

let password = '';
let cnt = 0;
while (password !== '123' && cnt < 3){
    password = prompt('Password')
}
if (cnt === 3){
    console.log('Incorect password')
}
else{
    console.log('corect password')
}
console.log('Correct password')


const marks = [2,1,3,5,5]
let cnt = 0;
while(cnt < marks.length) {
    let mark = marks[cnt];
    cnt++
}

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i]
    console.log(mark)
}

const marks1 = [2, 4, 1, 3, 6, 4, 3, 7]

for (let i = 0; i < marks1.length; i++) {
  const mark = marks1[i];
  if (mark < 6) {
    console.log(mark);
  } else {
    console.log('Invalid mark');
    break;
  }
  console.log('next iteration');
}*/

// cvičení

console.log ('prvnicyklus')
let i = 1
while (i <= 100){
    console.log(i)
    i +=1
}

console.log ('druhycyklus')
let i2 = 2
while (i2 <= 100){
    console.log(i2)
    i2 +=2
}
console.log ('treticyklus')
let i3 = 100
while (i3 <= 0){
    console.log(i3)
    i3 -=2
}