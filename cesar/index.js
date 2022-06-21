const alph = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const [,, text, rotation] = process.argv
const textAsArray = text.split('')
let rotationNumber = Number(rotation)

const encryptedText = textAsArray.map((character) => {
  if (alph.includes(character)) {
    if (rotationNumber > alph.length) {
      rotationNumber /= alph.length
    }

    const letterPosition = alph.indexOf(character)

    if ((letterPosition + rotationNumber) >= alph.length) {
      const encryptedPosition = (letterPosition + rotationNumber) - alph.length
      return alph[encryptedPosition]
    }

    const encryptedPosition = letterPosition + rotationNumber

    return alph[encryptedPosition]
  }

  const isNotANumber = isNaN(character)

  if (!isNotANumber) {
    const characterAsNumber = Number(character)

    if (characterAsNumber + rotationNumber >= 10) {
      return (characterAsNumber + rotationNumber) - 10
    }

    return characterAsNumber + rotationNumber
  }

  return letter
})

console.log(encryptedText.join(''))
