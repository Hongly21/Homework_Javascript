var go=document.getElementById('btn');
var name1=document.getElementById('name');
var math=document.getElementById('math');
var Biology=document.getElementById('biology');
var Chemistry=document.getElementById('chmistry');
var Physical=document.getElementById('physical');
var English=document.getElementById('english');
var history1=document.getElementById('history');
var Khmer=document.getElementById('khmer');
var tabledata= document.getElementById("table-result");
var result_table=document.getElementById("t_result");
var congscroe=document.getElementById("congscroe");


go.onclick=CalScore;
function CalScore(){
    tabledata.innerHTML=`
                        <tr>
                            <th>Name</th>
                            <th colspan="2">${name1.value}</th>
                            <th rowspan="8" id="t_result">

                            <h1 style="font-size: 70px;">${Caltotal(math.value,Biology.value,Chemistry.value,Physical.value,English.value,history1.value,Khmer.value)}</h1>
                          
                            </th>
                        </tr>
                        <tr>
                            <td style="text-align: left;">Math</td>
                            <td>${math.value}</td>
                            <td>${CalGrade2(math.value)}</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;">Biology</td>
                            <td>${Biology.value}</td>
                            <td>${CalGrade1(Biology.value)}</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;">Chemistary</td>
                            <td>${Chemistry.value}</td>
                            <td>${CalGrade1(Chemistry.value)}</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;">Physical</td>
                            <td>${Physical.value}</td>
                            <td>${CalGrade1(Physical.value)}</td>
                        </tr>
                    
                        <tr>
                            <td style="text-align: left;">English</td>
                            <td>${English.value}</td>
                            <td>${CalGrade3(English.value)}</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;">History</td>
                            <td>${history1.value}</td>
                            <td>${CalGrade3(history1.value)}</td>
                        </tr>
                        <tr>
                            <td style="text-align: left;">Khmer</td>
                            <td>${Khmer.value}</td>
                            <td>${CalGrade1(Khmer.value)}</td>
                        </tr>
        
                        <tr>
                            <td colspan="4" id="congscroe" style="text-align: center;"> ${Congratulate1(math.value,Biology.value,Chemistry.value,Physical.value,English.value,history1.value,Khmer.value)} 
                            </td>
                        </tr>
                    
    `;
    // var score2=0;
    // var score1=0;
    // var score3=0;
    // var final_score=0;

   
    // CalGrade2(score2); //score for subject from 0 to 125
    // CalGrade1(score1); //score for subject from 0 to 75
    // CalGrade3(score3); //score for subject from 0 to 50

}


//function Calgrade of scrore from 0 to 75
function CalGrade1(score1){

    if(score1>65 && score1<=75){
        score1="A";
    }else if(score1>50 && score1<=65){
        score1= "B";
    }else if(score1>35 && score1<=50){
        score1= "C";
    }else if(score1>20 && score1<=35){
        score1= "D";
    }else if(score1>=0 && score1<=20){
        score1= "F";

    }else if(score1<0 || score1>75){
        score1= "Invalid Score";
    }
     return score1;
 
}
//function CalGrade of scrore from 0 to 125
function CalGrade2(score2){
    if(score2>110 && score2<=125){
        score2="A";
    }else if(score2>90 && score2<=110){
        score2= "B";
    }
    else if(score2>75 && score2<=90){
        score2= "C";
    }else if(score2>50 && score2<=75){
        score2= "D";
    }else if(score2>=0 && score2<=50){
        score2= "F";
    }else if(score2<0 || score2>125){
        score2= "Invalid Score";
    }
     return score2;
 
}

//function calculate score 0 to 50
function CalGrade3(score3){
    if(score3>45 && score3<=50){
        score3="A";
    }else if(score3>35 && score3<=45){
        score3= "B";
    }else if(score3>25 && score3<=35){
        score3= "C";
    }else if(score3>15 && score3<=25){
        score3= "D";
    }else if(score3>=0 && score3<=15){
        score3= "F";
    }else if(score3<0 || score3>50){
        score3= "Invalid Score";
    }
     return score3;
 
}

//function to calculate total score
function Caltotal(math, Biology, Chemistry, Physical, English, history1, Khmer){
    var final_score=0;
    var final_score=parseInt(math) + parseInt(Biology) + parseInt(Chemistry) + parseInt(Physical) + parseInt(English) + parseInt(history1) + parseInt(Khmer);
    if(final_score <=427 && final_score >=380){
        final_score = "A";
    }else if(final_score <380 && final_score >=332){
        final_score = "B";
    }else if(final_score <332 && final_score >=285){
        final_score = "C";
    }else if(final_score <285 && final_score >=237){
        final_score = "D";
    }else if(final_score <237 && final_score >=0){
        final_score = "F";
    }
    return final_score;

}

//function congrate
function Congratulate1(math, Biology, Chemistry, Physical, English, history1, Khmer){
    // var scoreall=0;
    var scoreall= parseInt(math) + parseInt(Biology) + parseInt(Chemistry) + parseInt(Physical) + parseInt(English) + parseInt(history1) + parseInt(Khmer);
    if(scoreall >=237){
        scoreall="Congrates! You passed the exam 🎉🎊.";
    }else if(scoreall <237 && scoreall >=0){
        scoreall="Sorry! You failed the exam 🥺😢.";
    }
    return scoreall;
   
}

//function for know only all scrore
function onlyallscroe(math, Biology, Chemistry, Physical, English, history1, Khmer){
    var scoreall1= parseInt(math) + parseInt(Biology) + parseInt(Chemistry) + parseInt(Physical) + parseInt(English) + parseInt(history1) + parseInt(Khmer);
    return scoreall1;
    
}

//clearform and table subject
function clearform1(){
    document.getElementById("name").value="";
    document.getElementById("math").value="";
    document.getElementById("biology").value="";
    document.getElementById("chmistry").value="";
    document.getElementById("physical").value="";
    document.getElementById("english").value="";
    document.getElementById("history").value="";
    document.getElementById("khmer").value="";

}


total_table=document.getElementById("result-total-table1");
var studentlist=[
    // {
    //     // name:"Neath1",
    //     // totalscroe:21,
    //     // gradoftotal:"A",
    // }
];

//function save student to tabele
function savestudent(){
    var name=document.getElementById("name").value;
    var gradetotal= Caltotal(math.value,Biology.value,Chemistry.value,Physical.value,English.value,history1.value,Khmer.value);
    var allscore= onlyallscroe(math.value,Biology.value,Chemistry.value,Physical.value,English.value,history1.value,Khmer.value);
    studentlist.push(
        {
            name:name,
            totalscroe:allscore,
            gradoftotal:gradetotal
        }
    )
    displaystudent();

}

//function display student to table
function displaystudent(){
    var student="";
    var no=0;
    for(i in studentlist){
        student=student+`
        <tr>
            <td>${no+=1}</td>
            <td>${studentlist[i].name}</td>
            <td>${studentlist[i].totalscroe}</td>
            <td>${studentlist[i].gradoftotal}</td>
        </tr>
        `;
        total_table.innerHTML=student;
    }

}