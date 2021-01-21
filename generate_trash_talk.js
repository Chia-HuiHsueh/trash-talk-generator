function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(options) {

  // const options = {
  //   gridRadios: '設計師',
  // }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code '],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let collection = []
  if (options.gridRadios === '工程師') {
    collection = collection.concat(task.engineer)
  }
  if (options.gridRadios === '設計師') {
    collection = collection.concat(task.designer)
  }
  if (options.gridRadios === '創業家') {
    collection = collection.concat(task.entrepreneur)
  }

  //抽取詞語並組合
  let talk = [`${options.gridRadios}`]
  talk += sample(collection)
  talk += sample(phrase)
  return talk

}

module.exports = generateTrashTalk