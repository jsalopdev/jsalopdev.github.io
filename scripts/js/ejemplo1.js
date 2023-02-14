	   
	   
	   function limpiar(){
	     document.getElementById("numero1").value = "";
		 document.getElementById("numero2").value = "";
	   }
	   
	   function sumar(){
		  var element = document.getElementById("myToast");
	      var myToast = new bootstrap.Toast(element);
		  myToast.show();
		  let valor1 = document.getElementById("numero1").value;
          let valor2 = document.getElementById("numero2").value;
          let operacion = parseInt(valor1) + parseInt(valor2);
          if(operacion)		  
			mostrar_mensaje(operacion, 'suma');
          else
            mostrar_mensaje();		  
	   }
	   
	   function restar(){
		  let valor1 = document.getElementById("numero1").value;
          let valor2 = document.getElementById("numero2").value;
          let operacion = parseInt(valor1) - parseInt(valor2);
          if(operacion)		  
			mostrar_mensaje(operacion, 'resta');
          else
            mostrar_mensaje();		  
	   }
	   
	   function multiplicar(){
		  let valor1 = document.getElementById("numero1").value;
          let valor2 = document.getElementById("numero2").value;
          let operacion = parseInt(valor1) * parseInt(valor2);
          if(operacion)		  
			mostrar_mensaje(operacion, 'multiplicacion');
          else
            mostrar_mensaje();		  
	   }
	   
	   function dividir(){
		  let valor1 = document.getElementById("numero1").value;
          let valor2 = document.getElementById("numero2").value;
          let operacion = parseInt(valor1) / parseInt(valor2);
          if(operacion)		  
			mostrar_mensaje(operacion, 'division');
          else
            mostrar_mensaje();		  
	   }
	   
	   function calcular_factorial(valor){
		   if (valor <= 1) 
			   return 1;
		   return valor * calcular_factorial(valor - 1); 
	   }
	   
	   function factorial(){
		   let valor1 = document.getElementById("numero1").value;
		   let operacion = calcular_factorial(valor1);
		   mostrar_mensaje(operacion,'Factorial');
	   }
	   
	   function mostrar_mensaje(e=0, operador){
			
			if(e!=0){
			
				Swal.fire({
				  title: 'Resultado',
				  text: 'El valor de la ' + operador + ' es: ' + e,
				  icon: 'info',
				  confirmButtonText: 'Aceptar'
				});
			
			}
			else
			{
				Swal.fire({
				  title: 'Resultado',
				  text: 'No se han ingresado los valores correctamente',
				  icon: 'error',
				  confirmButtonText: 'Aceptar'
				});
			}
			
	   }