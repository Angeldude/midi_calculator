const mtof = (midiNum) => {
    let BASE_FREQ = 440;
    return BASE_FREQ * Math.pow(2, (midiNum - 69)/12);
  }
const midiFromString = R.compose(mtof, parseInt)
  
const sanitizeFreq = num => isNaN(num) ? "Please enter a valid number" : num.toString() + " Hz"  

const pch2midi = (letter, octave) => {
  let pitches = {C: 0, CS: 1, DB: 1, D: 2, DS: 3,
                 EB: 3, E: 4, F: 5, FS: 6, GB: 6, 
                 G: 7, GS: 8, AB: 8, A: 9, AS: 10, 
                 BB: 10, B: 11, CB: 11, BS: 0}
  let octaveOffset = parseInt(octave) + 1
  return pitches[letter.toUpperCase()] + (octaveOffset * 12);
}