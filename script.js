function changeImage(img) {
   if (img.src.match("johan.gif")) {
      img.src = img.src.replace("johan.gif", "nerd.jpg")
   } else {
      img.src = img.src.replace("nerd.jpg", "johan.gif")
   }
}
function shuffleMusic() {
   var Music = ["hotel.mp3", "iwby.mp3", "505.mp3", "ewa.mp3", "diwk.mp3", "theshade.mp3", "amazing.mp3", "l.mp3"]
  document.getElementById("music").src = 'media/' + random_item(Music)
}
function random_item(items) {
   return items[Math.floor(Math.random()*items.length)];
}