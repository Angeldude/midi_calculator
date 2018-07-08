const mtof = (midiNum) => {
    let BASE_FREQ = 440;
    return BASE_FREQ * Math.pow(2, (midiNum - 69)/12);
  }
const midiFromString = R.compose(mtof, parseInt)

const combineInputs = R.curry((x,y) => {       
      const grr = parseInt(y);
      const brr = parseInt(x);
      return (grr+brr).toString();
})

const convertOctave = (x) =>{
  const arg = parseInt(x);
  return ((arg + 1) * 12);
}
  
const sanitizeFreq = num => isNaN(num) ? "Please enter a valid number" : num.toString() + " Hz"  