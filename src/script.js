window.addEventListener('load', function(){
   let app = $('app');
   let input = $('pitch');

   const formattedFreq = extractValueE(input)
                      .mapE(midiFromString)
                      .startsWith(NaN)
                      .liftB(sanitizeFreq)

   let result  = DIV({id:'freq'}, P(formattedFreq));   
   app.appendChild(result)
})