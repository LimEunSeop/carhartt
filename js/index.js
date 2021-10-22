function pad(num, size) {
  num = num.toString()
  while (num.length < size) num = '0' + num
  return num
}

$(document).ready(function () {
  var imgs = []
  for (var i = 98; i < 188; i++) {
    var img = new Image()
    img.src = 'pic/frame-' + pad(i, 6) + '.jpg'
    imgs.push(img)
  }

  var section = document.querySelector('section')

  $('body').on('mousemove', function (e) {
    var wid = $(window).width()
    var posX = e.pageX
    var percent = Math.floor((posX / wid) * imgs.length)
    section.innerHTML = ''
    section.appendChild(imgs[percent])
  })
})
