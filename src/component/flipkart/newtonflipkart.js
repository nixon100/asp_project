
function newton (payment,i,commision,j){
    // //console.log("payment",payment)
     //// //console.log("resultt",resultt)
    // //console.log("i",i)
   
    // //console.log("commision",commision)
   function calculateResult(C6, C8, C10, C11, C12, C13, C14) {
     //// //console.log("C6",C6)
     return C6 - C8 - C10 - C11 - C12 - C13 - C14;
   }
   
   // Function to calculate the derivative of the result with respect to C6
   function calculateDerivative(C6, C7, C8, C9, C10, C11, C12, C13, C14) {
     // Central difference method for numerical derivative
     const h = 0.0001; // Step size
     const asd = calculateResult(C6 + h, C8, C10, C11, C12, C13, C14);
     //// //console.log(asd);
     const azx = calculateResult(C6 - h, C8, C10, C11, C12, C13, C14)
     //// //console.log(azx);
     //// //console.log(asd - azx);
     return (asd - azx)/(2 * h);
   }
   
   // Function to perform Newton-Raphson method to find the value of C6
   function newtonRaphson(C7, C9, initialGuess, tolerance, targetResult,j) {
     let C6 = initialGuess;
     //// //console.log("C61",C6);
     let C8, C10, C11, C12, C13, C14, result, derivative;
    
     do {
         C8 = C7 * C6;
         C10 = calculateC10(C6,j);
         C11 = calculateC11(C6, C9,j);
         C12 = calculateC12(C6, C9);
         C13 = calculateC13(C9);
         C14 = calculateC14(C6, C9, C7, C8, C10, C11, C12, C13);
        // //console.log("C6",C6)
        // //console.log("C7",C7)
        // //console.log("C8",C8)
        // //console.log("C10",C10)
        // //console.log("C11",C11)
        // //console.log("C12",C12)
        // //console.log("C13",C13)
        // //console.log("C14",C14)
        
        
         result = calculateResult(C6, C8, C10, C11, C12, C13, C14);
      // //console.log("result",result)
         
         derivative = calculateDerivative(C6, C7, C8, C9, C10, C11, C12, C13, C14);
         
         //// //console.log("derivative",derivative)
        
         C6 -= (result - targetResult) / derivative;
         //// //console.log("Goal Seek Result (C6):", C6);
     } while (Math.abs(result - targetResult) > tolerance);
    
     return C6;
   }
   
   // Function to calculate C10 based on C6
   function calculateC10(C6,j) {
    // //console.log(fixedfees[j])
    // //console.log(j)
    // //console.log(C6)
   
     const Q =fixedfees ;
     const aaa = Q[j]['0 - 300'];
       const bb = Q[j]['300 - 500'];
       const cc = Q[j]['500 - 1000'];
       const ddd = Q[j]['> 1000'];
      
   
     
   
     if (C6 <= 300 && C6 >= 0) {
         
         const a1 = aaa;
        // //console.log(a1)
         return a1/(1-C9)
       }
     if (C6 <= 500 && C6 > 300) {
       
       const a1 = bb;
       return a1/(1-C9)  }
   
     if (C6 <= 1000 && C6 > 500) {
       const a1 = cc;
       return a1/(1-C9)  }
   
     if (C6 > 1000) {
      // //console.log("jkdhcjdjksahkjskahk")
       const a1 =ddd;
       return a1/(1-C9)  }
   
   
   
   
   }
   
   // Function to calculate C11 based on C6 and C9
   function calculateC11(C6, C9,j) {
   
    // //console.log(collectionfees[j])
    // //console.log(j)
   
     const Q =collectionfees ;
     const aaa = Q[j]['Prepaid'];
       const bb = Q[j]['__EMPTY_2'];
    
   
     
   
     if (C6 <= 750 && C6 >= 0) {
         
         const a1 = aaa;
         return (C6 *a1) / (1 - C9);
       }else { 
         return (C6 *bb) / (1 - C9)
       }
     
   }
   
   // Function to calculate C12 based on C6 and C9
   function calculateC12(C6, C9) {
   const j = 0;//
   //console.log(shippingfees[j])
   
     const Q =shippingfees ;
     const aaa = Q[j].National;
     return aaa / (1 - C9);
   }
   
   // Function to calculate C13 based on C9
   function calculateC13(C9) {
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   const j = 0;//
   //console.log(reversefees[j])
   
     const Q =reversefees ;
     const aaa = Q[j].National;
     return aaa * C9 / (1 - C9);
   }
   
   // Function to calculate C14 based on C6, C9, C7, and other values
   function calculateC14(C6, C9, C7, C8, C10, C11, C12, C13) {
     return (C8 + C10 + C11 + C12 + C13) * 0.18;
   }
   
   // Example values for C7 and C9
   const C7 = commision[i]; // Example value for C7//
   console.log("commision[i]",C7)
   const C9 = props.data2[i]["Customer Returns"]; // Example value for C9
   console.log(props.data2[i]["Customer Returns"]);
   // Initial guess for C6 and tolerance
   const initialGuess = 1;
   const tolerance = 0.1;
   const targetResult = payment;
   const goalSeekResult = newtonRaphson(C7, C9, initialGuess, tolerance, targetResult,j)
   Math.round(goalSeekResult);
   //
   //console.log("Goal Seek Result (C6):", goalSeekResult);
   return (goalSeekResult);
   
   }
   