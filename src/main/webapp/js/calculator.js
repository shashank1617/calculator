$(document).ready(function() {	
	call();
	
});
var value=0;
function call(){
	 $.ajax({
         url: '/java_maven_calculator_web_app/api/calculator/ping',
         //url: 'js/jsons/sidebar.json',
         type: 'GET',
         crossDomain: true,
         xhrFields: {
             withCredentials: true
         },
         success: function(response) {
             console.log(response);
         },
         error: function() {
             console.log('Error');
         }
     }); 
}
var v;
function calculate(s){
	/*var json={
			'data1' :  $(" input[name=num1]").val(),
            'data2' : $(" input[name=num2]").val(),
            'operator' : s
	}*/
    var url = "/java_maven_calculator_web_app/api/calculator/";
	if(s=='-'){
	    url=url+"sub?x="+  $(" input[name=num1]").val()+"&y="+  $(" input[name=num2]").val()
    }
	else if(s=='+'){
        url=url+"add?x="+  $(" input[name=num1]").val()+"&y="+  $(" input[name=num2]").val()
    }
	else if(s=='*'){
        url=url+"mul?x="+  $(" input[name=num1]").val()+"&y="+  $(" input[name=num2]").val()
    }
	else
        url=url+"div?x="+  $(" input[name=num1]").val()+"&y="+  $(" input[name=num2]").val()

	 $.ajax({
       url: url,
       method: "GET",
       contentType: "application/json",
       crossDomain: true,
       xhrFields: {
           withCredentials: true
       },
       success: function(response) {
    	   
    		   $(" input[name=answer]").val(response.result);
    	   
       	console.log(response);
       },
       error: function(error) {
    	   $(" input[name=answer]").val(error);
       }
   }); 
}
	
