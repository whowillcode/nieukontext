const context_arr = 
    ["Time","Hope","Location","Risk","Problem","Alternatives",
    "Cost","Risk","Needs","Tools","Devices","Emotional",
    "Comfortable","Know","Habits","People","Collaborate","Ambition","Desires","Fears","Opinion"
    ];
// const colors_arr = ["red", "blue","black"];

var interval = 1;
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var body = document.body;
var state=0;
var handle;

function playpause(){
	if(state) {clearInterval(handle); state=0;}
	else {handle = setInterval(shuffle,interval); state=1;}
}


function three_random(){
  var arr = [];

  do{
    var shuffled = context_arr.sort(() => .5 - Math.random());
    var r = Math.floor(Math.random()*context_arr.length);
    if(!arr.includes(shuffled[r])){ arr.push(shuffled[r]);}
  }while(arr.length<2);

  return arr;

}

function shuffle(){

  var random = three_random();
  one.innerHTML = random[0];
  two.innerHTML = random[1]; 
  // three.innerHTML = random[2];

}; 

shuffle();

