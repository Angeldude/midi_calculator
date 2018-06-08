const mtof = (midiNum) => {
    let BASE_FREQ = 440;
    return BASE_FREQ * Math.pow(2, (midiNum - 69)/12);
  }
const midiFromString = R.compose(mtof, parseInt)
  
const sanitizeFreq = num => isNaN(num) ? "Please enter a valid number" : num.toString() + " Hz"  