// this is the java script for feedback form
  function check()
  {
    var x=document.getElementById('1name').value;
    var y=document.getElementById('2email').value;
    var z=document.getElementById('3number').value;
    var a=document.getElementById('4area').value;
    if (x=="" || y=="" || z=="" || a=="") 
    {
      alert("Empty Field Found!!");
    }
    else
    {
      alert("Thank You!");
    }
  }
    
