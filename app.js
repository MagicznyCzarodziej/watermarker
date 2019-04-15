const imgBefore = document.getElementById("imgBefore");
const imgAfter = document.getElementById("imgAfter");
imgBefore.addEventListener("change", handleImage, false);
imgAfter.addEventListener("change", handleImage, false);
const canvas = document.getElementById('imgCanvas');
const ctx = canvas.getContext('2d');

const createBtn = document.getElementById('createBtn');
createBtn.addEventListener('click', createImage);
let imgLeft, imgRight;

function handleImage(e) {
  const reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = function(event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function() {
      if (e.target.id === 'imgBefore') {
        imgLeft = img;
        canvas.width = 2*img.width;
        canvas.height = img.height;
      } else {
        imgRight = img;
      }
    };
  };
}

function createImage() {
  const gap = 40;
  ctx.drawImage(imgLeft, 0, 0);
  ctx.drawImage(imgRight, imgLeft.width, 0);
  ctx.font = '32px Dancing Script, cursive';
  ctx.fillStyle='rgba(255, 255, 255, 0.5)';
  ctx.shadowBlur = 6;
  ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
  ctx.save();
  ctx.translate(imgLeft.width-5, imgLeft.height-10);
  ctx.rotate(-Math.PI / 2);
  const caption = 'Ewelina Dywańska';
  ctx.textBaseline = 'bottom'
  ctx.fillText(caption, 0, 0);
  ctx.restore();
  ctx.save();
  ctx.translate(imgLeft.width*2-5, imgLeft.height-10);
  ctx.rotate(-Math.PI / 2);
  ctx.textBaseline = 'bottom'
  ctx.fillText(caption, 0, 0);
  ctx.restore();
}