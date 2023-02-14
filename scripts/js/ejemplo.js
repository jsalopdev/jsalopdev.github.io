       function sumar(){
	       let valor1 = document.getElementById("validationCustom01").value;
		   let valor2 = document.getElementById("validationCustom02").value;
		   
		   let operacion = parseInt(valor1) + parseInt(valor2);
	   
		   mensaje(operacion, 'Suma');
		   
	   }
	   
	   function restar(){
	       let valor1 = document.getElementById("validationCustom01").value;
		   let valor2 = document.getElementById("validationCustom02").value;
		   
		   let operacion = parseInt(valor1) - parseInt(valor2);
		   
		   mensaje(operacion, 'Resta');
		   
		  
	   }
	   
	   function multiplicar(){
	       let valor1 = document.getElementById("validationCustom01").value;
		   let valor2 = document.getElementById("validationCustom02").value;
		   
		   let operacion = parseInt(valor1) * parseInt(valor2);
		   
		   mensaje(operacion, 'Multiplicacion');
		   
		  
	   }
	   
	   function dividir(){
	       let valor1 = document.getElementById("validationCustom01").value;
		   let valor2 = document.getElementById("validationCustom02").value;
		   
		   let operacion = parseInt(valor1) / parseInt(valor2);
		   
		   mensaje(operacion, 'Division');
		   
	   }
	   
	   function calcular_factorial(valor){
		   if(valor <= 1)
			   return 1;
		   return valor * calcular_factorial(valor - 1);
		   
	   }
	   
	   function factorial(){
		   let valor1 = document.getElementById("validationCustom01").value;
		   let operacion = calcular_factorial(valor1);
		   mensaje(operacion, 'Factorial');
	   }
	   
	   function limpiar(){
		   document.getElementById("validationCustom01").value = "";
		   document.getElementById("validationCustom02").value = "";
	   }
	   
	   function mensaje (e, operador){
		   
		   Swal.fire({
			  title: 'Respuesta',
			  text: 'La respuesta de la ' + operador +' es: ' + e,
			  icon: 'info',
			  confirmButtonText: 'Aceptar'
			});
		   
	   }