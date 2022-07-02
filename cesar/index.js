const alph = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const ALPH = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const [,, text, rotation] = process.argv
const textAsArray = text.split('')
let rotationNumber = Number(rotation)

while (rotationNumber >= alph.length) {
  rotationNumber -= alph.length
}

const encryptedText = textAsArray.map((character) => {
  if (character === ' ') {
    return character
  }

  const source = (alph.includes(character) && alph) || (ALPH.includes(character) && ALPH)
  if (source) {
    const letterPosition = source.indexOf(character)

    if ((letterPosition + rotationNumber) >= source.length) {
      const encryptedPosition = (letterPosition + rotationNumber) - source.length
      return source[encryptedPosition]
    }

    const encryptedPosition = letterPosition + rotationNumber

    return source[encryptedPosition]
  }

  const isNotANumber = isNaN(character)

  if (!isNotANumber) {
    const characterAsNumber = Number(character)

    return (characterAsNumber + rotationNumber) % 10
  }

  return character
})

console.log(encryptedText.join(''))
