//產生隨機抽取
function generateRandomIndex(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(option) {
  const task = {
    工程師: ['加個按鈕', '加新功能', '切個版', '改一點 code '],
    設計師: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    創業家: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let trashTalk = `身為一個${option.job}，${generateRandomIndex(task[option.job])}，${generateRandomIndex(phrase)}吧！`
  return trashTalk
}

module.exports = generateTrashTalk
