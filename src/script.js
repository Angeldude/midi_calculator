window.addEventListener('load', function(){
   let app = $('pitches');
   let octave = $('octave');
   let tone = $('tone'); 
    
   const formattedFreq = extractValueE(tone)
                      .mapE(midiFromString)
                      .startsWith(NaN)
                      .liftB(sanitizeFreq)
  
   let result  = DIV('hi');
   app.appendChild(result);
})