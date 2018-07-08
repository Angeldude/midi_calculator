window.addEventListener('load', function(){
   let app = $('app');
   let pitchName = $('letter');
   let octave = $('octave');
   
   const pch = extractValueB(pitchName);
   const oct = extractValueB(octave);

   let pitches = pch.liftB(combineInputs);
   let octaves = oct.liftB(convertOctave);

   const formattedFreq = octaves.liftB(pitches)
                         .liftB(midiFromString)
                         .liftB(sanitizeFreq)

   let result  = DIV({id:'freq'}, P(formattedFreq));   
   app.appendChild(result)
})