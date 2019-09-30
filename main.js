function Calc()

{

     const radius=parseFloat(document.querySelector('#number').value)
     const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
     const ans = `${s}, your area is ${Math.PI * radius * radius}.`
     

     

     document.querySelector('#result').innerHTML = ans

    
}

     document.querySelector('#addButton').addEventListener('click',Calc)
     
   
     document.querySelector('#addButton').addEventListener('click',Calc)
     

 