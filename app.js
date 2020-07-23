// Chapyer 38 to 42
//  task 1

// function power(a,b)
// {
//     var result=Math.pow(a,b);
//     document.write("the Custom power is.."+result);

// }
// power(2,3);

// task2

// function leap_year( input )
// {
//     var input=+prompt("Enter year for checking leapyear...");
//     if(input%4===0)
//     {
//         document.write("Leap year.."+input);

//     }
//     else
//     {
//         document.write("Leap year not");
//     }
// }
// leap_year();

// task 3

// function traingle()
// {
//     var a=2;
//     var b=3;
//     var c=5;
//     var s= a+b+c/2;
//     var area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     document.write("the area of a traigle is.."+area)

// }
// traingle();

// task 4
// var sub1 = 89;

// 
//

// function result() {
//     var sub1=78;
//     var sub2 = 67;
//     var sub3 = 76;

//     function averageMarks() {


//         var avg =( sub1 + sub2 + sub3);
//         document.write("The obtaining marks is ..." + avg);

//     }
//     function percentage() {
//         var p = ((sub1+sub2+sub3) / 300) * 100;
//         document.write("The percentage is.." + p);

//     }
//     averageMarks();
//     percentage();
// }
// result();


// task 5
// function indexOf(customfunction, singleChar) 
// {
//   for (var i = 0; i <= customfunction.length; i++)
//    {
//     if (customfunction[i] == singleChar)
//      {
//       document.write(customfunction + "<br>" + "index of " + customfunction[i] + "is" + i);

//     }

//   }

// }
// indexOf("Noshaba", "h");
// task 6


// alert ("The sentence is not more than 25 characters...");
// function disemvowel(str) 
// {
//     var str=prompt("Enter some string..");
//     alert(str.replace(/[aeiou]+/ig, ''));
//   }
// disemvowel();

// task 7

// function findOccurrences()
//  {
//   var str = "Pleases read this application and give me gratuity";
//   var count = 0;
//   var count2 = 0;

//   for (var i = 0; i <str.length; i++)
//   {
//     switch (str.slice(i, i + 2)) 
//     {
//       case 'ea':
//         count++;
//         break;
//       case 'ui':
//         count2++;
//         break;
//     }
//   }
//   document.write("Pleases read this application and give me gratuity" + "<br>" + count+count2 )
// }
// findOccurrences();

// task 8


// function convertor(input)
// {
//   var input=+prompt("Enter your city distance in km ..?");
//   function meter()
//   {
//     var meter=parseFloat (input)*1000;
//     document.write("Conert into meter your city distance is..."+meter);
//   }
//   function centiMeter()
//   {
//     var c_meter=parseFloat (input)*10000;
//     document.write("Conert into Centemeter your city distance is..."+c_meter);
//   }
//   function feet()
//   {
//     var feet=parseFloat (input)*	3280.839895013;
//     document.write("Conert into feet your city distance is..."+feet);
//   }
//   function inch()
//   {
//     var inch=parseFloat (input)*39370.07874015;
//     document.write("Conert into inch your city distance is..."+inch);
//   }
//   feet();
//   inch();
//   centiMeter();
//   meter();

// }
// convertor();                                                                                                                          h

// task9


// var employ,otime,opay,hours;
// var hours = prompt("Enter The Number Of Hours Worked By Employee");
// for (employ=1;employ<=10; employ++);
// {
// if(hours>40)
// {
// var otime=hours-40;
// var opay=otime*12;
// document.write( + "The Overtime Pay Of Employeee Is " + opay);
// }
// else if(hours<40){
//     document.write("There Is No Overtime Pay For Employee ");
// }
// }




























































// chapter 43to48

// task1

// function showBox(){
//   alert("Thanks for clicking...");
// }

// task2
// function showImage()
// {
//   alert("Thanks for purchasing this mobile..");
// }


// task3
// function deleteNumber(e)
// {
//     var del = e.parentNode.parentNode.rowIndex;
//     document.getElementById('mytable').deleteRow(del);

// }



// task 4

// function image1()
// {
//     var img1=document.getElementById('img1')
//     img1.src='images/mb1.jpg'
// }
// function image2()
// {
//     var img1=document.getElementById('img1')
//     img1.src='images/mb2.jpg'
// }

// task 5

// count = 0;

// function increasebtn() {
//     count++;
//     document.getElementById('counting').innerHTML = count;



// }
// function decreasebtn() {

//     count--;
//     document.getElementById('counting').innerHTML = count;


// }




// chapter 52 to 57

// task 2

// imageArray=['images/modal1.jpg','images/modal2.png','images/modal3.jpg','images/modal4.jpg','images/modal5.jpg','images/modal6.jpg','images/modal7.png','images/modal8.jpg','images/moal9.jpg','images/modal11.jpg','images/modal12.jpg','images/modal13.jpg','images/modal14.png'];
// task 3


// var img1= document.getElementById('modalimage');

// for ( var i=0; i<imageArray.length;i++)
// {

//     img1.innerHTML='<img src=\"'+imageArray[i]+'\">';

// }

//task 4

function imagesfun(e){
    var model=document.getElementById("model");
    var model_image=document.getElementById("modelImage");
    model_image.src = e.src ;
    model.style.display="inline" ;

}

// task 5
var model=document.getElementById("model");
var modelClass= model.setAttribute("class" , "model_open");
model.style.display="none" ;

//task 6
var close_btn = document.getElementById("close");
var close_class = close_btn.setAttribute("class" , "model_close");
function close_model(){
     
    model.style.display = "none"; 

}





// chpter 58 to 67

// task1

// var a= document.getElementById('main-content');
 

// task2

// var a= document.getElementById('main-content')
// var d=a.childNodes;
// console.log(d);

// task3

// var x=document.getElementsByClassName('render');
// console.log(x)


// task4

// var val= document.getElementById('firstname').value;
// var last_name=document.getElementById('last-name').value;
// var email=document.getElementById('email')bett.value;
// console.log(val,last_name,email)

// question2

// task1

// var f= document.getElementById('form-content').nodeType;
// console.log(f);

// task2

// var l=document.getElementById('last-name').nodeType;
// console.log(l);
// var a= document.getElementById('last-name')
// var d=a.childNodes;
// console.log(d);


// task3


// var textNode= document.createTextNode('hospital')
// var r=document.getElementById('lastname');
// r.childNodes[0].nodeValue = 'hospital'
// console.log(r.childNodes[0])


// task4

// 
// var sib= document.getElementById('lastname').previousSibling;
// console.log(sib);
// var sib= document.getElementById('lastname').nextSibling;
// console.log(sib);


// task5

// var em=document.getElementById('email').parentNode.nodeType;
// console.log(em)

















































// chapter 49 to 52

// task1

// function signup()
// {
//     var name=document.getElementById('name').value;
//     var password=document.getElementById('password').value;
//     // var signup=document.getElementById('signup');
//     console.log(name,password)
//     name.value="";
//     password.value=" ";


// }

// task2
// function readMore() {
//     var text = document.getElementById('text').innerHTML;
//     var paragraph = document.getElementById('para');
//     paragraph.innerHTML = text;
// }

// task3

// function deleteNumber(e)
// {
//     var del = e.parentNode.parentNode.rowIndex;
//     document.getElementById('mytable').deleteRow(del);

// }
// function editvalue()

// {

    // var edit =e.parentNode.firstChild.rowIndex
    // var edit_value=prompt("Enter edit value...",edit)
    // e.parentNode.firstChild.nodeValue=edit_value

    
// }










// Chapter#1

// question#1
// alert("welcome to my website...");

// question#2
// alert("Error!please enter a valid code...");


// question#3
// alert("welcome to JS land" +"\r" +"Happy coding");

// Question#5

// alert("Welcome to JS land");
// alert("Happy coding"+"\r"+"prevent this page from creating additional dailogue...");

// Question#5
// var a="Hello.. I can run JS through my web browser's console"
// console.log(a);

//  alert("file:///C:/Users/hair/Desktop/uber/public/work.html#");



// Chapter#2
// var username="Enter your name..!"
// alert(username);

// var myName="Noshaba Naseem";
// alert(myName);

// var message="Hello World!"
// alert(message);

// Question4

// var name="Noshaba";
// var age="20 years old"
// var qualificaiton="Certified Mobile Development App.."
// alert(name);
// alert(age);
// alert(qualificaiton);
// Question5

// var pizz = "pizza" + "\r" + "pizz" + "\r" + "piz" + "\r" + "pi" + "\r" + "p";


// alert(pizz);



// Question6
// var email=("My email address is emaple@example.com");
// alert(email);

// Question7
// var book=" I am trying to learn from the book "+"A smarter way to learn javascript ";
// alert(book);

// Question8
// document.write("yah! I can write HTML through javascript..");

// Question9
// var a=("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬" );
// alert(a);


// Chapter#3
// var age= "i am 20 years old";
// alert(age);

// var n=15;
// alert("you have visited this side"+n+" "+"times");

// var birthyear= 1999;
// document.write("My birthday year is "+birthyear+"\r"+"Data type of my declare variable is number");


// Question4
// alert( " welcome to online www.xyzClothing.com");
// var name= prompt("Enter your name...");
// var product= prompt("Enter your product name...");
// var quantity=+prompt(" how many products a visitor wants to order..?");
// alert(name+"\r"+" "+product+" "+"\r"+quantity+"\r"+"Thanks to vist our store..");



// CHAPTER4

// var num1=3;
// var num2=8;
// var num3=9;
// alert(num1+" "+num2+" "+num3);

// Legal variable
// var num;
// var number1;
// var myName;
// var father_name;
// var $nic_number;

// Illegal variable

// var 1num;
// var Myname;
// var nic number;
// var alert;
// var 1;

// CHAPTER5  

// var num1=6;
// var num2=9;
// sum=num1+num2;
// alert("The sum of .."+num1 +" "+"and"+" "+num2+" "+"is "+ " "+sum);

// var num1=6;
// var num2=9;
// sum=num1-num2;
// alert("The sum of .."+num1 +" "+"and"+" "+num2+" "+"is "+ " "+sum);

// var num1=9;
// var num2=6;
// sum=num1*num2;
// alert("The sum of .."+num1 +" "+"and"+" "+num2+" "+"is "+ " "+sum);

// var num1=4;
// var num2=2;
// sum=num1/num2;
// alert("The sum of .."+num1 +" "+"and"+" "+num2+" "+"is "+ " "+sum);

// var num1=9;
// var num2=6;
// sum=num1%num2;
// alert("The sum of .."+num1 +" "+"and"+" "+num2+" "+"is "+ " "+sum);

// var x;

// x=5;

// document.write(x +" "); 

// x++;
// document.write(x +" ");

// c=x+7;
// document.write(c +" "); 

// c--;
// document.write(c +" "); 

// y=x%x;
// document.write(y+" ");



// var movie_ticket= 600;
// var buying_items = 5;

// document.write("The total cost to buy 5 tickets to a movie is .." +movie_ticket*buying_items+"PKR");

// var n=+prompt("enter your number...");
// for(i=1;i<=10;i++)
// {
//     document.write(n+"*"+i+"="+n*i+"<br>");
// }

// var far=prompt("Enter value temperature convert in farhenhite..");
// cel=(far-32)*5/9;
// alert(cel);

// var cel=prompt("Enter value temperature convert in celcius..");
// far=(cel*9/5)+32;
// alert(far);

// var price_items1=450;
// var price_items2=500;
// var quantity1=3;
// var quantity2=3;
// var shipp=100;
// total=price_items1+quantity1+shipp+price_items2+quantity2;

// document.write("Total cost of items1 is.." +total);


// var marks_obtained=450;
// var total_num=550;
// p=marks_obtained/total_num*100;
// document.write("percentage is.."+p);

// var us_dollar=10;
// var saui_riyal=25;
// curruncy=(10*104.80)+(25*28);
// document.write("Total currency is.."+curruncy);

// var number=6;
// total=(number+5*10)/2;
// document.write("The simplfy of this question is .."+total);


// var curr_year=2020;
// var birt_year=1999;
// age=curr_year-birt_year;
// document.write( "your age is.."+age);

// var d=40;
// r=d/2;
// document.write("Radius of circle is.."+r+"<br>");
// circum=2*3.142*r;
// document.write("The circumference of circle is.."+circum+"<br>");
// area=3.142*r*r;
// document.write("The area of circle is.."+area);


// var fav_snacks="lays";
// var curr_age=21;
// var max_age=60;
// var amount=3;



// Chapter 6 to 9


// var a=8;
// document.write("The value of a is.."+a+"<br>");
// ++a;
// document.write("The value of a is.."+a+"<br>");
// document.write("Now the value of a is.."+a+"<br>");
// a++;
// document.write("The value of a is.."+a+"<br>");
// document.write("Now the value of a is.."+a+"<br>");
// --a;
// document.write("The value of a is.."+a+"<br>");
// document.write("Now the value of a is.."+a+"<br>");
// a--;
// document.write("The value of a is.."+a+"<br>");
// document.write("Now the value of a is.."+a+"<br>");



// var a=2 , b=1;
// var result= --a - --b + ++b + b--;sa
// document.write(result);

// --a; 
// the value of a is less 1,
// --a - --b (1-0 )
// --a - --b + ++b + b--, (1-0+1+1)=3


// var name=prompt("Enter your name..");
// document.write(name);

// var n = +prompt("enter your number...");
// if (n >0) {
//     for (i = 1; i <= 10; i++) {
//         document.write(n + "*" + i + "=" + n * i + "<br>");
//     }
// }
// else {

//     for (i = 1; i <= 10; i++) {
//         document.write(5 + "*" + i + "=" + 5 * i + "<br>");
//     }
// }


// var sb1=prompt("Enter name of subject 1..");
// var sb2=prompt("Enter name of subject 2..");
// var sb3=prompt("Enter name of subject 3..");
// var total_marks=300;
// var ob_marks1=+prompt("Enter your obtained mark...");
// var ob_marks2=+prompt("Enter your obtained mark..."); 
// var ob_marks3=+prompt("Enter your obtained mark..."); 
// ob_total=ob_marks1+ob_marks2+ob_marks3;
// p=ob_total/total_marks*100;
// document.write(sb1+" "+ob_marks1+"<br> "+sb2+" "+ob_marks2+" <br>" +sb3+" "+ob_marks3+"<br> "+"Percentage"+" "+ p+"%");



// Chapter9 to 11



// var city = prompt("Enter your city name...");
// if (city == "karachi")
//  {
//     document.write("Welcome to city of lights...");
// }
// else {
//     document.write("Welcome to our city");
// }

// var gender=prompt("Enter your gender...");
// if(gender=="male")
// {
//     document.write("Good morning sir!");
// }
// else
// {
//     document.write("Good morning ma'am!");

// }

// var color=prompt("select colors... Red,Yellow and green...");
// if (color=="yellow")
// {
//     document.write("Ready to");
// }
// if (color=="red")
// {
//     document.write("Must Stop");
// }
// else
// {
//     document.write("Move now");

// }


// var fuel=prompt("Enter your fuel in your car in litre..?");
// if (fuel<=0.25)
// {
//     document.write("Please refill the fuel in your car");

// }
// else
// {
//     document.write("No need to refill");

// }

// var a = 4;
// if (++a === 5) { alert("given condition for variable a is true"); }
// var b = 82;
// if (b++ === 83) { alert("given condition for variable b is true"); }

// var c = 12;
// if (c++ === 13) { alert("condition 1 is true"); }
// if (c === 13) { alert("condition 2 is true"); }
// if (++c < 14) { alert("condition 3 is true"); }
// if (c === 14) { alert("condition 4 is true"); }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
// if (true) { alert("True"); } if (false) { alert("False"); }
// if("car" < "cat")
// { alert("car is smaller than cat"); } 




// var total_marks=300;
// var ob_marks1=+prompt("Enter your obtained mark...");
// var ob_marks2=+prompt("Enter your obtained mark..."); 
// var ob_marks3=+prompt("Enter your obtained mark..."); 
// ob_total=ob_marks1+ob_marks2+ob_marks3;
// p=ob_total/total_marks*100;
// if(p>=80)
// {
//     document.write("Total Marks"+" "+total_marks+"<br>"+"Otained Marks"+ob_total+"<br>"+"Percentage"+p+"%"+"<br>"+"Graded"+" "+"A-ONE" +"<br> "+"Remarks"+"Excellent");
// }
// else if(p>=70)
// {
//     document.write("Total Marks"+" "+total_marks+"<br>"+"Otained Marks"+ob_total+"<br>"+"Percentage"+p+"%"+"<br>"+"Graded"+" "+"A" +"<br> "+"Remarks"+"Good");

// }
// else if(p>=60)
// {
//     document.write("Total Marks"+" "+total_marks+"<br>"+"Otained Marks"+ob_total+"<br>"+"Percentage"+p+"%"+"<br>"+"Graded"+" "+"B" +"<br> "+"Remarks"+"You need to improve");

// }
// else if(p>50)
// {
//     document.write("Total Marks"+" "+total_marks+"<br>"+"Otained Marks"+ob_total+"<br>"+"Percentage"+p+"%"+"<br>"+"Graded"+" "+"Fail" +"<br> "+"Remarks"+"Sorry");

// }


// var secrete_num=8;
// var guess_user=+prompt("Select the number under 1 to 10...");
// if(secrete_num==guess_user)
// {
//     document.write("Bingo! Correct answer");
// }
// else if(secrete_num==guess_user+1)
// {
//     document.write("Close enough to the correct answer");
// }
// else
// {
//     document.write("try again..");
// }


// var user_input=+prompt("Enter your number...");
// if (user_input%3===0)
// {
//     document.write("Divisible by 3");

// }
// else
// {
//     document.write("Invalid input");
// }


// var user_input=+prompt("Enter your number...");
// if (user_input%2===0)
// {
//     document.write("Even number");

// }
// else if(user_input%2==1)
// {
//     document.write("Odd number");


// }
// else
// {
//     document.write("Invalid input");
// }



// var temp=+prompt("Enter your temperature...");
// if (temp>40)
// {
//     document.write("It is too hot outside");
// }
// else if (temp>30)
// {
//     document.write("The Weather today is Normal");
// }
// else if (temp>20)
// {
//     document.write("Today’s Weather is cool");
// }
// else if (temp>10)
// {
//   document.write("OMG! Today’s weather is so Cool");
// }
// else
// {
//     document.write("Invalid input");
// }



// var first_num=+prompt("Enter first number...");
// var sec_num=+prompt("Enter second number...");
// var input_oper=prompt("select operations.. +,-,%,/");
// if (input_oper=="+")
// {
//     document.write(first_num+sec_num);

// }
// else if (input_oper=="-")
// {
//     document.write(first_num-sec_num);

// }
// else if (input_oper=="%")
// {
//     document.write(first_num%sec_num);

// }
// else if (input_oper=="/")
// {
//     document.write(first_num/sec_num);

// }



// Chapter 12 to 13


// var user_input=+prompt("checks whether the given input is a number, uppercase letter or lower case letter");
// if(user_input<=90 && user_input>=65)
// {
//     document.write("Your alphatets is upper case");

// }
// else if(user_input>=97 && user_input<=122)
// {
//     document.write("Your alphatets is Lower case");

// }



// var a = 60;
// var b = 10;
// if (a > b) {
//     document.write("a is greater than b");
// }
// else if (a == b)
//  {
//     document.write("a is equal to b");

// }
// else
// {
//     document.write("Invalid input");
// }




// var user_input=+prompt("Enter a number..?");
// if(user_input>0)
// {
//     document.write("Number is positive");
// }
// else if(user_input<0)
// {
//     document.write("Number is negative");
// }
// else if(user_input==0)
// {
//     document.write("Number is Zero");
// }



// var char=prompt("Enter a character...");
// if(char=="a" || char=="e" ||char=="i"||char=="o"||char=="u")
// {
//     document.write("Enter character is vowels..");

// }
// else
// {
//     document.write("false");
// }



// var hour = 13;
// if (hour < 18) 
// { document.write("Good day"); }
// else { document.write("Good evening"); }



// var password = ("noshabanaseem111");
// var user_password = prompt("Enter your password...?");
// if (user_password == false) {
//     document.write("Enter password..");

// }
// else if (user_password == password);
// {
//     document.write("Correct! The password you entered matches the original password");
// }
// else
// {

//     document.write("Incorrect password");
// }


// Chapter14to 16



// var arr=[];
// arr.push("Noshaba","Shaheen","ali","Mahnoor");
// document.write(arr);

// var arr=[];
// arr.push("Noshaba","Shaheen","ali","Mahnoor");
// document.write(arr);


// var arr=["hello World!"];
// document.write(arr);


// var arr =[1,2,3,4,5,6,7,77];
// document.write(arr);

// var arr =[0,1];
// document.write(arr);

// var arr =[1,2,"Noshaba","saad",9,9];
// document.write(arr);


// var qual=["SSC","HSC","BSC","BCOM","MS","Mphil","Phd"];
// document.write("Qualification"+"<br>"+qual);

// var std=["Noshaba","kanwal","Mahnoor"];
// var score=[489,380,390];
// var tota_score=500;
// var p=[];
// for (i=0;i<=2;i++){
//     p.push((std[i/500])*100);
//     document.write("score"+std[i]+"is"+"percentage"+p[i]+"%<br>")

// }
// var colors= ["red", "blue", "yellow"];
// document.write("Original Values of Array Are: "+colors+"<br>");
// // part A
// var userchoice = prompt("Please enter a color name to add in the beginning of the array");
// colors.unshift(userchoice);
// document.write(colors);
// // part B
// var userchoice = prompt("Please enter a color name to add in the end of the array");
// colors.push(userchoice);
// document.write(colors);
// // part C
// colors.unshift("black, purple");
// document.write(colors);
// // part D
// colors.shift(0);
// document.write(colors);
// // part E
// colors.pop();
// document.write(colors);
// // part F
// var index = +prompt("enter a index number where you want to add");
// var userchoice = prompt("Please enter a color name to add at the desired index");
// colors.splice(index,0,userchoice)
// document.write(colors);
// // part G
// var index = +prompt("enter a index number to delete");
// var count = prompt("how many items you want to delete");
// colors.splice(index, count,);
// document.write(colors);


// var studentScore =[320,230,480,120];
//     document.write("Scores of students: "+studentScore+"<br>");
//     studentScore.sort();
//     document.write("Ordered scores of students: "+studentScore);
//     var cities = ["Karachi","Islamabad","Multan","Peshawar","Gilgit"];
//     document.write("Cities list: "+cities+"<br>");
//     var cities2 = cities.slice(0,3);
//     document.write("Selected cities list: "+cities2);


//     var arr = ["This", "is", "my", "cat"];
//     arr2=arr.join(" ");
//     document.write("Array: <br>"+arr+"<br>");
//     document.write("String: <br>"+arr2);



//     var acc =[];
//     acc.push("keyboard");
//     acc.push("mouse");
//     acc.push("printer");
//     acc.push("monitor");    
//     document.write("Devices<br>"+acc+"<br><br>");
//     for (var i = 0; i <= 3; i++) {
//         document.write("Out<br>");
//         document.write(acc[0]);
//         acc.shift();
//         document.write("<br>");
//     }
//     var acc =[];
//     acc.push("keyboard");
//     acc.push("mouse");
//     acc.push("printer");
//     acc.push("monitor");    
//     document.write("Devices<br>"+acc+"<br><br>");
//     for (var i = 0; i <= 3; i++) {
//         document.write("Out<br>");
//         document.write(acc[acc.length-1]);
//         acc.pop();
//         document.write("<br>");
//     }



//     var phoneCompanies = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select>");
// for (var i = 0; i <= phoneCompanies.length-1; i++) {
//     document.write("<option>"+phoneCompanies[i]+"</option>");
// }
// document.write("</select>");

// Chapter#17to20

// task 01
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 2],
// ];

// task 02
// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 2],
// ];
// var m;
// for (m of matrix) {
//     document.write(m+"<br>")
// }



// for(i=1;i<=10;i++)
// {
//     document.write(i+"<br>");
// }



// var user_input=+prompt("Enter a number ");
// var length=+prompt("Enter a length muliplication ");
// for (i=1;i<=length;i++)
// {
//         document.write(user_input + "*" + i + "=" + user_input * i + "<br>");

// }
// task 05
    // var f = ["apple","banana","mango","orange","strawberry"];
    // for (var i=0; i<=f.length-1; i++) {
    //     document.write("Element at index " + i + " is " + f[i] + "<br>")
    // }

    // task 06
    // document.write("<h2>Counting:</h2>");
    // for (var i=1; i<=15; i++) {
    //     document.write(i+", ")
    // }

    // document.write("<h2>Reverse Counting:</h2>");
    // for (var i=10; i>=1; i--) {
    //     document.write(i+", ")
    // }

    // document.write("<h2>Even:</h2>");
    // for (var i=0; i<=20; i=i+2) {
    //     document.write(i+", ")
    // }

    // document.write("<h2>Odd:</h2>");
    // for (var i=1; i<=20; i=i+2) {
    //     document.write(i+", ")
    // }
    
    // document.write("<h2>Series:</h2>");
    // for (var i = 2; i <= 20; i = i + 2) {
    //     document.write(i+"k, ")
    // }

    // task 07
    // var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var search = prompt("Welcome to ABC Bakery. What do you want to order?");
    // if(A.indexOf(search) !== -1) {
    //     document.write(search+" is available at index "+A.indexOf(search)+" in our bakery")
    // } else {
    //     document.write("We are sorry. "+search+" is not available in our bakery")    
    // }

    // task 08
    // var A = [24, 53, 78, 91, 12];
    // var L = A[0];
    // for(var i=0; i<=A.length; i++){
    //     if(L < A[i])
    //     {
    //         L = A[i];
    //     }
    // }
    // document.write("Array items: " + A + "<br>")
    // document.write("The largest number is " + L)

    // task 09
    // var A = [24, 53, 78, 91, 12];
    // var S = A[0];
    // for(var i = 0; i <= A.length; i++){
    //     if(S > A[i])
    //     {
    //         S = A[i];
    //     }
    // }
    // document.write("Array items: " + A + "<br>")
    // document.write("The smallest number is " + S)

    // task 10
    // for(var i=1; i<=20; i++) {
    //     document.write(i*5+", ")
    // }












    // Chapter 21 to 25

// task1

// var first_name=prompt("Enter your first name...?");
// var last_name=prompt("Enter your last name..?");
// var full_name=first_name+" "+last_name;
// document.write("Your full name is "+full_name);


// task 2

// var mob_model=prompt("Enter your favorite mobile model..?");
// var mob_length=mob_model.length;
// document.write("My favriote phone is: "+mob_model+"<br>"+"Length of string is:"+" "+mob_length);


// task 3

// var text="Pakistan";
// var len_n=text.indexOf("n");
// document.write("String is :"+text+"Index of n is:"+len_n);

// task 4

// var text="Hello World!";
// var len_n=text.lastIndexOf("l");
// document.write("String is :"+text+"Index of l is:"+len_n);



// task 5

// var text="Pakistan";
// var find_index=text.charAt(3);
// document.write("Character of index is:"+" "+find_index);


// task 6

// var first_name=prompt("Enter your first name...?");
// var last_name=prompt("Enter your last name..?");
// var name= first_name.concat(last_name);
// document.write("Your full name is "+name);

// task 7

// var city="Hyderabad";
// var replace_city=city.replace(/Hyderabad/g,"Islamabad");
// document.write("Real city: "+city+"<br>"+"After replacement: "+" "+ replace_city);

// task 8
// var message="Ali and Sami are best friends.They play cricket and football together.";
// var replace_msg=message.replace(/and/g,"&");
// document.write("Message"+message+"<br>"+"After Repalce message"+replace_msg);


// task 9

// var str="472";
// var ch=parseInt(str);
// document.write("value"+str+"<br>"+"type"+"String"+"<br>"+"value"+ch+"<br>"+"type"+"Integer");


// task 10

// var user_input=prompt("Enter a text...");
// var change=user_input.toUpperCase();
// document.write(change);


// task 11


// var user_input=prompt("Enter a text...");
// var change=user_input.toLowerCase();
// document.write(change);


// task 12

// var num=35.36;
// var ch= num.toString();
// document.write(ch);

// task 13


// var name = prompt("Enter a username");
// var checked=true;
// for (i = 0; i <= name.length; i++)
//  {


//     if(name.charCodeAt(i) ==33 || name.charCodeAt(i)==44 || name.charCodeAt(i)==46 || name.charCodeAt(i)==64){
// checked=false;
//         alert("Please enter a valid input");
//     }

// }
// if(checked){
// alert(name);
// }




// task 14

// var fast_food= ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order?");
// if (fast_food.indexOf(search) !== -1) {
//     document.write(search + " is available at index " + fast_food.indexOf(search) + " in our bakery")
// } else {
//     document.write("We are sorry. " + search + " is not available in our bakery")
// }


// task 16

// var str="University of Karachi";
// var res = str.split();
// alert(res);

// task 17

// var str="Pakistan";
// var res=str.charAt(str.length-1)
// document.write("Userinput"+str+"<br>"+"Last character of input"+" "+res);


// task 18

// var str="the quick brown fox jumps over the lazy dog";
// var res=str.match(/the/g).length;
// document.write(str+"<br>"+"There are"+" "+res+" "+"occurance of words the");


// Chapter 26 to 30

// task 1
// Number= 3.452154;
// var num=Math.round(Number);
// alert("Round"+num);
// var num=Math.floor(Number);
// alert("Floor"+num);
// var num=Math.ceil(Number);
// alert("Ceil"+num);


// task 2

// var floating_point=+prompt("Enter a negative floating point..?");
// alert("Number form"+floating_point);
// var number=Math.round(floating_point);
// alert( "Round number"+number);
// var number=Math.floor(floating_point);
// alert("Floor of the number"+number);
// var number=Math.ceil(floating_point);
// alert("Cirl of the number"+number);



// task 3

// Number=(-4);
// var num = Math.abs(Number);
// document.write("The absoulte value is.."+num);

// Number=(5);
// var num = Math.abs(Number);
// document.write("The absoulte value is.."+num);

// task 4

// var dice_Roll = Math.floor( Math.random() * 6 ) +1;
// alert('Random dice value is...' + dice_Roll);

// task 5

//  var name = prompt("Enter your name...");
//  var toss=Math.floor(Math.random()*2)+1;
//  if (toss===1)
//  {
//     alert(name+"Heads"+" "+"You win");
//  }
//  else
//  {
//      alert(name+"Tail"+" "+"you win");
//  }

// task 6

// var rand=Math.floor(Math.random()*100)+1;
// alert("Random number 1 to 100 is ..."+rand);



// task 7

// var weight=+prompt("Enter your weight..?");
// var wt=parseInt(weight);
// alert(wt);

// task 8

// var user_input=+prompt("Guess number uner 1 to 10");
// var secret_num=Math.floor(Math.random()*10)+1;
// if (user_input===secret_num)
// {
// alert("you win");
// }
// else
// {
//     alert("try again");
// }


// Chapter 31 to 34

// task 1


// var b= new Date();
// alert(b);

// task 2

// var today=new Date();
// var months=["january","february","march","april","may","june","july","august","september","november","december"];
//  var this_month=months[today.getMonth()];
//  alert("Current month is"+this_month);


// task 3


// var now=new Date();
// var days=["sun","mon","tue","wed","thurs","fri","sat"];
//  var today=days[now.getDay()];
//  alert("Today is"+today);


// task 4

// var now=new Date();
// var days=["sun","mon","tue","wed","thurs","fri","sat"];
//  var today=days[now.getDay()];
//  if(days=="sat"&& days=="sun")
//  {
//      alert("Its fun day...");

//  }
//  else
//  {
//      alert("Working day");
//  }

// task 5

// var today = new Date();
// var this_months=today.getMonth();


// if (this_months<today.getMonth[16])
// {
//     alert("First fifteen of months...");

// }
// else
// {
//     alert("Last days of the month...");
// }


// task 6

// var cur_date= new Date();
// var cur_milidate= cur_date.getTime();
// var date_before=new Date("jan-1-1970");
// var datebefor_mili=date_before.getTime();
// var diff= cur_milidate-date_before;
// var diff_mili=diff/(1000*60*60);
// alert("current date"+  cur_date);
// alert("Ellapsed in mili second in jan-1-1970:"+diff);
// alert("Ellapsed in minute in jan-1-1970:"+diff_mili);




// task 7

// var d= new Date();
// var hour=d.getHours();
// if(hour>=12)
// {
//     alert("its PM");

// }
// else
// {
//     alert("Its AM");
// }

// task 8

// var later_date= new Date("Dec-31-2020");
// alert("Later date"+later_date);


// task 9

// var ram_date= new Date("June 18, 2015");
// var cur_date= new Date();
// var diff_time= cur_date-ram_date;
// var diff_days=Math.floor(diff_time/(1000*60*60*24));
// alert(diff_days+"has passed since 1st ramxan in 2015");

//task10
// var year_BegDate = new Date("Jan 01, 2020");
// var current_Date = new Date(prompt("Enter any date to calculate seconds from year start e.g.","Jun 21, 2020"));
// var year_Beg_DateMilli = year_BegDate.getTime();
// var current_DateMilli = curren_tDate.getTime();
// var diff = yearBegDateMilli - current_DateMilli;
// var diff_Seconds = Math.abs(diff / 1000);
// document.write(diff_Seconds + " seconds had past since begining of 2020");

//task11
// var cur_Date = new Date();
// document.write("Current date: " + currentDate + "<br>");    
// var set_Hours = curr_Date.set_Hours(15);
// document.write("1 hour ago, it was: " + curr_Date);

//task12

// var currentDate = new Date();
// var getCurrentYear = currentDate.getFullYear();
// document.write("Current date: " + currentDate + "<br>");    
// var setHours = currentDate.setFullYear(getCurrentYear-100);
// document.write("100 years back, it was: " + currentDate);

//task13
// var enter_Age = +prompt("Enter your age");
// var currentDate = new Date();
// var Current_Year = currentDate.getFullYear();
// var birthYear = Current_Year - enter_Age;
// document.write("Your age is " + enter_Age + "<br>");
// document.write("Your birth year is " + birthYear + "<br>");

//task14
// var Month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var customer_Name = "Noshaba naseem";
// var current_Month = new Date().getMonth();
// current_Monnth = Months[current_Month];
// var no_Units = 410;
// var charges_Unit = 16;
// var late_Amount = 350;

// document.write("<h2>K-Eletric Bill</h2>" + "<br>");
// document.write("Customer Name: " + customer_Name + "<br>");
// document.write("Month: " + current_Month + "<br>");
// document.write("Number of Units: " + no_Units + "<br>");
// document.write("Charges Per Unit: " + charges_Unit + "<br>");
// document.write("<br>");
// document.write("Net Amout Payable (within Due Date): " + no_Units*charges_Unit + "<br>");
// document.write("Late Payment Surcharge: " + late_Amount + "<br>");
// document.write("Gross Amout Payable (after Due Date): " + ((no_Units*charges_Unit)+late_Amount) + "<br>");




// chaper 35 to 38


// task 1
// function currnt_date()
// {
//     var d= new Date();
//     alert(d);
// }
// currnt_date();

// task 2

// function fullname(f_name, l_name,full_name)
// {
//     var f_name=prompt("Enter your first name...");
//     var l_name=prompt("Enter your last name...");
//     var full_name=f_name+" "+l_name;
//     alert("Your name is..."+full_name);
// }
// fullname();


// task 3

// function sum(num1,num2,add)
// {
//     var num1=+prompt("Enter first number...");
//     var num2=+prompt("Enter second number...");
//     var add =num1+num2;
//     alert("The summition of the number is..."+add);



// }
// sum();

// task 4
// function cal(num1, num2, opr) {
//     if (opr === "+") {
//         return num1 + num2;
//     }
//     else if (opr === "-") {
//         return num1 - num2;
//     }
//     else if (opr === "/") {
//         return num1 / num2;
//     }
//     else if (opr === "*") {
//         return num1 * num2;
//     }
//     else if (opr === "%") {
//         return num1 % num2;
//     }
//     else {
//         return "Wrong Command";
//     }
// }
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var opr = prompt("Enter Operator");
// alert("Equation is " + num1 + opr + num2 + "\nOutput is " + cal(num1, num2, opr));



// task 5

// function sq_of_number(a){
//     alert("Square of the number is..."+a*a);

// }
// sq_of_number(+prompt("Enter a number..?"));

// task 6

// function factorial(x) {
//     var starting = x;
//     for (var i = x - 1; i > 0; i--) {
//         x *= i;
//     }
//     alert("Input is " + starting + "\nFactorial is " + x);
// }
// factorial(+prompt("Enter any number"));


// task 7

// function counting(a,b)
// {  
    

//     for (var i=a;i<=b;i++)
//     {
//         document.write(i+"<br>");
//     }

// }
// counting(+prompt("Enter Counting Start Number"),+prompt("Enter Counting End Number"));

// task 8

// function hypotenuse(base,perpendicular) {
    //     var final_Hypotenuse;
    //     var hyp_Square = Math.pow(base,2) + Math.pow(perpendicular,2);
    //     function cal_Square(hyp) {
    //         finalHypotenuse = Math.sqrt(hyp).toFixed(2);
    //         return final_Hypotenuse;
    //     }
    //     cal_Square(hyp_Square);
    //     return finalHypotenuse;
    // }
    // document.write(hypotenuse(10,10));

    // task9
    // function calcArea(w,h) {
    //     var A = w * h;
    //     return A;
    // }
    //Arguments As Values
    // alert("Area of Rectangle: " + calcArea(20,10));
    //Arguments As Variables
    // var width = 20;
    // var height = 10;
    // alert("Area of Rectangle: " + calcArea(width,height));

    // task10
    // function palindrome(str) {
    //     var reversed = "";
    //     for (var i = str.length-1; i >= 0; i--) {
    //         reversed += str[i];
    //     }
    //     if (str === reversed) {
    //         alert("It's a Palindrome");
    //     } else {
    //         alert("It's not a Palindrome");
    //     }
    // }
    // palindrome(prompt("Enter a string to check it's Palindrome or not"));

    // task11
    // function title_Case(str) {
    //     var spl = str.split(" ");
    //     for (var i = 0; i < spl.length; i++) {
    //         document.write(splitted[i].charAt(0).toUpperCase()+spl[i].substring(1,)+" ");
    //     }
    // }
    // title_Case(prompt("Enter any word here","This is a sample text").toLowerCase());
    
    // task12
    // function longest(str) {
    //     var strToArr = str.split(" ")
    //     var long = strToArr[0];
    //     for (var i = 1; i < strToArr.length; i++) {
    //         if (strToArr[i].length > long.length ) {
    //           long = strToArr[i];
    //         }
    //     }
    //     document.write("String: " + str + "<br>Longest Word: " + long);
    // }
    // long("This is javascript second assignment.");
    
    // task13
    // function find(str,ltr) {
    //     var spilitted = str.toLowerCase().split("");
    //     var occurances = 0;
    //     for (var i = 0; i < spilitted.length; i++) {
    //         if(spilitted[i] == ltr) {
    //             occurances++;
    //         }
    //     }
    //     document.write("Text: " + str + "<br>");
    //     document.write("There are '" + occurances + "' occurance(s) of letter '" + ltr + "'");
    // }
    // var str = "The quick brown fox jumps over lazy the dog";
    // var ltr = "o";
    // find(str,ltr);
    
    // task14
    // function circumference(r = 10) {
    //     var circumference = (2 * 3.142 * r).toFixed(2);
    //     alert("The circumference is " + circumference);
    // }
    // function calcArea(r = 10) {
    //     var area = (3.142 * (r*r)).toFixed(2);
    //     alert("The area is " + area);
    // }
    // circumference();
    // calcArea();

