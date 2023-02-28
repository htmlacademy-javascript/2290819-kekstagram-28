/* Домашнее задание
Функция №1 для проверки длины строки (2 варианта). */

function checkLength1 (row, maxLen) {
  console.log(row.length >= maxLen ?  'false' :  'true');
}

checkLength1('hello my name is kate', 40)

//Вариант 2

function checkLength2 (row, maxLen) {
  if (row.length <= maxLen) {
    return true
  }
  return false
}

console.log(checkLength2 ('hi whatsup', 3))

//Функция №2 для проверки палиндромов

function isPal (word) {
  let newWord = word.split(' ')
  let newString = ''
  for (i = 0; i < newWord.length; i++) {
    newWord[i] = newWord[i].toLowerCase()
    newString += newWord[i]
  }

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === newString.at(-(i + 1))) {
      return true
    }
    return false
  }
}
console.log(isPal('holo9holo'))

// Функция№3

function getNum (row) {
  if (typeof row === 'number' )
  {row = String(row)}

  let newNum = '';

  for (let i = 0; i < row.length; i++) {
   if (row[i] === '1' || row[i] === '2' || row[i] === '3' || row[i] === '4' ||row[i] === '5' ||row[i] === '6' ||row[i] === '7' ||row[i] === '8' ||row[i] === '9')
   {newNum += row[i]}

  }
  newNum = Number(newNum)
  if (newNum === 0) {newNum = NaN}
  return newNum
}

console.log(getNum(45))

//Функция№4 для добавления элементов в строку

function addElem (row, minLen, addSym) {
  let newRow = ''
  let amount = 0
  if(row.length < minLen)
    {
      amount = minLen - row.length
      for (let i = 0; i < amount-1; i++) {
        newRow += addSym[i]
      }
      newRow += row
    }
  return newRow
}

console.log(addElem('hi', 9, 'befo999о'))


