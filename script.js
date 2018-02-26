const mtof = (midiNum) => {
  let BASE_FREQ = 440;
  return BASE_FREQ * Math.pow(2, (midiNum - 69)/12);
}

const sanitizeFreq = num => isNaN(num) ? "Please enter a valid number" : num.toString() + " Hz"

window.addEventListener('load', function(){
   let app = document.getElementById('app');
   let input = document.getElementById('pitch');

   let formattedFreq = extractValueE(input)
                      .mapE(parseInt)
                      .mapE(mtof)
                      .startsWith(NaN)
                      .liftB(sanitizeFreq)

   let result  = DIV({id:'freq'}, P(formattedFreq));   
   app.appendChild(result)
})
