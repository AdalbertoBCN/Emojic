function random(arr){
   return (arr[Math.floor(Math.random() * arr.length)]);
}
const svg = '.svg'

var emojis = ['alien','ninja','astronaut','office','bat','panda','bear','parrot','bomb','penguin','bride','pig','cat','pilot','chicken','pixel','clown','police','cold','poop','construction','prince','cook','rabbit','cow','robot','cowboy','saint','deamon','sauropod','student','scientist','detective','singer','disguised','skull','earth','tiger','elf','tooth','fairy','troll','farmer','unicorn','fireman','vampire','fox','wolf','genie','zombie','ghost','guard','happen','headscarf','hero','inlove','lion','mage','mask','mechanic','merman','monkey','nausea','nerd'].sort(() => Math.random() - 0.5);

const count = document.querySelector('.count');

var restart = document.querySelectorAll('.restart');

const A = document.querySelectorAll('.A .circle img');
const B = document.querySelectorAll('.B .circle img');
const C = document.querySelectorAll('.C .circle img');
const D = document.querySelectorAll('.D .circle img');

var x = 3;
var groups = document.querySelectorAll('#groups .squad');

restart.forEach((element)=>{
    element.addEventListener('click',()=>{
        document.location.reload();
    })
})

function divide(emojis) {
    var i = emojis.length - 1;
    var mod3 = [[], [], [], []];
    while (i >= 0) {
        mod3[0].push(emojis[i]);
        i--;
        mod3[1].push(emojis[i]);
        i--;
        mod3[2].push(emojis[i]);
        i--;
        mod3[3].push(emojis[i]);
        i--;
    }
    return mod3;
}

function joinA(S0, S1, S2, S3) {
    return S1.concat(S3, S0, S2);
}
function joinB(S0, S1, S2, S3) {
    return S0.concat(S2, S1, S3);
}
function joinC(S0, S1, S2, S3) {
    return S0.concat(S1, S2, S3);
}
function joinD(S0, S1, S2, S3) {
    return S0.concat(S1, S3, S2);
}

function show(x) {
    A.forEach((element,i)=>{
        element.setAttribute('src',`emojis/${mod3[0][i] + svg}`);
    });
    B.forEach((element,i)=>{
        element.setAttribute('src',`emojis/${mod3[1][i] + svg}`);
    });
    C.forEach((element,i)=>{
        element.setAttribute('src',`emojis/${mod3[2][i] + svg}`);
    });
    D.forEach((element,i)=>{
        element.setAttribute('src',`emojis/${mod3[3][i] + svg}`);
    });
    if(x < 1){
        win();
        startConfetti();
    }
    count.dataset.content = x;
}

groups[0].addEventListener("click", function () {
    emojis = joinA(mod3[0], mod3[1], mod3[2], mod3[3]);
    mod3 = divide(emojis);
    x--;
    show(x);
});
groups[1].addEventListener("click", function () {
    emojis = joinB(mod3[0], mod3[1], mod3[2], mod3[3]);
    mod3 = divide(emojis);
    x--;
    show(x);
});
groups[2].addEventListener("click", function () {
    emojis = joinC(mod3[0], mod3[1], mod3[2], mod3[3]);
    mod3 = divide(emojis);
    x--;
    show(x);
});
groups[3].addEventListener("click", function () {
    emojis = joinD(mod3[0], mod3[1], mod3[2], mod3[3]);
    mod3 = divide(emojis);
    x--;
    show(x);
});

function win(){
    const win = document.querySelector('#win');
    const img = win.querySelector('img');
    const main = document.querySelector('main');
    main.style.display = 'none';
    win.style.display = 'flex'
    img.setAttribute('src',`emojis/${emojis[38]+svg}`); 
}

var mod3 = divide(emojis);
show(3);

