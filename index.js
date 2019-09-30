function calculate(){

    const one=parseInt(document.getElementById("one").value);
    const two=parseInt(document.getElementById("two").value);
    const three=parseInt(document.getElementById("three").value);
    const averagevalue=(one+two+three)/3;
    document.getElementById("averagevalue").innerHTML="Average Value: "+averagevalue;
}