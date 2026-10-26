let s=document.querySelector('.para1')
let g=document.querySelector('.para2')
let st=document.querySelector('.para3')

let score=Number(prompt('enter your score'));
if (score<0){
    alert('please text the correct score')
    score=Number(prompt('enter your score'));
}
else{
    grade=""
    switch(true){
        case(score>=90):
            grade="A"
            break
        case(score>=65 && score<90):
            grade="B"
            break
        case(score>=35 && score<65):
            grade="C"
            break
        default:
            grade='F'
            break;
}
    }




stauts="";
(score>=35)? stauts='pass':stauts="fail";
console.log(`Score: ${score}`)
console.log(`Grade: ${grade}`)
console.log(`Status: ${stauts}`)

s.innerHTML=`Score: ${score}`;
g.innerHTML=`Grade: ${grade}`;
st.innerHTML=`Status: ${stauts}`;