var empname=document.getElementById("empname");
var Bsalary=document.getElementById("basicsalary");
var workday=document.getElementById("workday");
var workhour=document.getElementById("workhour");
var ABS=document.getElementById("ABS");
var ot=document.getElementById("OT");
var bonus=document.getElementById("Bonus");
var othded=document.getElementById("OthDed");
var late=document.getElementById("late");

var btn=document.getElementById("calculate");
var tabledata=document.getElementById("result");


btn.onclick=calculateSalary;

function calculateSalary(){
    Bsalary=parseFloat(Bsalary.value);                                                                 
    workday=parseFloat(workday.value);
    workhour=parseFloat(workhour.value);
    ABS=parseFloat(ABS.value);
    ot=parseFloat(ot.value);
    bonus=parseFloat(bonus.value);
    othded=parseFloat(othded.value);
    late=parseFloat(late.value);



    var totalsalary=0;
    var otsalary=0;
    var salarywithlate=0;
    var TotalallSalary=0;
    var Amounttax=0;
    var finalsalary=0;


    //AA
    totalsalary=Bsalary/workday*(workday-ABS);
    //BB for calling function B
    otsalary=Calotsalary(Bsalary,workday,workhour,ot);
    //CC
    salarywithlate=Calsalarywithlate(Bsalary,workday,workhour,late);
    //DD
    TotalallSalary=totalsalary+otsalary+bonus-salarywithlate-othded;
    //EE
    Amounttax=CalTaxAmount(TotalallSalary,4000);
    //FF
    finalsalary=TotalallSalary-Amounttax;

    tabledata.innerHTML=`
            <tr>
                <td>${empname.value}</td>
                <td>${Bsalary}</td>
                <td>${workday}</td>
                <td>${workhour}</td>
                <td>${ABS}</td>
                <td>${ot}</td>
                <td>${bonus}</td>
                <td>${othded}</td>
                <td>${late}</td>
                <td>$${roundToTwoDecimals(TotalallSalary)}</td>
                <td>$${roundToTwoDecimals(Amounttax)}</td>
                <td>$${roundToTwoDecimals(finalsalary)}</td>
              
             </tr>
    `;

}

//BB
function Calotsalary(Bsalary,workday,workhour,ot){
    var otamout=0;
    salaryperhour=Bsalary/workday/workhour;
    otamout=(salaryperhour*ot)*2;

    return otamout;

}
//CC
function Calsalarywithlate(Bsalary,workday,workhour,late){
    amountlate=0;
    latehour=late/60; //we need time of late in hour so we /60
    salaryperhour=Bsalary/workday/workhour;
    amountlate=(latehour*salaryperhour);
    return amountlate;
}

//EE

function CalTaxAmount(AmountTobeTax, ExchRate){
    TotalsalaryKH= AmountTobeTax*ExchRate;
    taxrate=0;
    AmountwithTax=0;
    if(TotalsalaryKH<=500000){
        taxrate=0;
    }   
    else if(TotalsalaryKH>1500000 && TotalsalaryKH<=3000000){
        taxrate=0.05;
    }
    else if(TotalsalaryKH>3000000 && TotalsalaryKH<=5000000){
        taxrate=0.1;
    }
    else if(TotalsalaryKH>5000000){
        taxrate=0.15;
    }

    AmountwithTax=TotalsalaryKH * taxrate;
    return AmountwithTax/ExchRate;

    

}
  function roundToTwoDecimals(number) {
        return Math.round(number * 100) / 100;
    }



