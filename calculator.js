var calculator=angular.module("mycalculator",[]);
calculator.controller("mycalccontrol",['$scope',function($scope){
$scope.demo="This is a simple calculator";
$scope.result='';
$scope.input={
    letter:''
}

$scope.res=function()
{
    console.log("entered function res1");
    console.log($scope.input.letter);
    var temp=$scope.input.letter;
    var operator='';
    var op1='';
    var op2='';
    for(var i=0;i<temp.length;i++)
    {
        if(temp[i]=='+'||temp[i]=='-'||temp[i]=='*'||temp[i]=='/'||temp[i]=='%')
        {
            operator=temp[i];
            op1=temp.substr(0,i);
            op2=temp.substr(i+1,temp.length);
        }
    }
    console.log(op1+op2+operator);
switch(operator)
{
    case '+':$scope.result=parseInt(op1)+parseInt(op2);
        break;
    case '-':$scope.result=parseInt(op1)-parseInt(op2);
        break;
    case '*':$scope.result=parseInt(op1)*parseInt(op2);
        break;
    case '/':$scope.result=parseInt(op1)/parseInt(op2);
        break;
    case '%':$scope.result=parseInt(op1)%parseInt(op2);
        break;
}
}

}])
