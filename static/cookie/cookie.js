{
  /* <div style="position: fixed;max-width: 450px;left: 24px;bottom: 24px;background: #fafafa;padding: 1.5em;box-shadow: ;border-radius: 12px;"><div class="container"><div><img src="https://em-content.zobj.net/thumbs/240/apple/325/cookie_1f36a.png" height="32px">
  <img src="https://em-content.zobj.net/thumbs/240/apple/325/dog-face_1f436.png" height="32px">
  </div><p style="margin: 0;">This website gives cookies to good girls to help track their good behaviour across the internet. We need your permission before giving you cookies.</p><div style="padding-top: 20px;padding-bottom: 6px;">
  <a href="" class="fancy-link" style="padding: 12px 12px;margin-right: 6px;border-radius: 6px;">Accept</a>
  <a href="" class="fancy-link" style="padding: 12px 12px;border-radius: 6px;color: #9F1239;background-color: #FCA5A555;">Bad girl! Don't Press</a>
      </div></div></div> */
}

function cookieShower() {
  document.body.removeChild(rootDiv)
  const GRAVITY = 0.2;
  const MAX_SPEED = 20;

  const cookieElements = new Set();

  // Wow I am terrible at naming functions
  for (let i = 0; i < 20; i++) {
    const cookieEl = document.createElement("img");
    const x = Math.random() * window.innerWidth;
    const y = -32;
    cookieEl.src = "/static/cookie/cookie.png";
    cookieEl.style.height = "32px";
    cookieEl.style.top = y + "px";
    cookieEl.style.left = x + "px";
    cookieEl.style.position = "fixed";
    cookieElements.add({
      cookieEl,
      velocityX: Math.random() * 4 - 2,
      velocityY: -(Math.random() * 10),
      x,
      y,
    });
    document.body.appendChild(cookieEl);
  }

  function onAnimationFrame() {
    cookieElements.forEach((el) => {
      // el.velocityX -= AIR_RESISTANCE;
      // el.velocityY -= AIR_RESISTANCE;
      el.velocityY += GRAVITY;
      el.velocityY = Math.min(el.velocityY, MAX_SPEED);
      el.velocityX = Math.min(el.velocityX, MAX_SPEED);
      el.x += el.velocityX;
      el.y += el.velocityY;
      el.cookieEl.style.left = el.x + "px";
      el.cookieEl.style.top = el.y + "px";

      if (el.y > window.innerWidth) {
        cookieElements.delete(el);
        document.body.removeChild(el.cookieEl);
      }
    });

    if (cookieElements.size > 0) {
      window.requestAnimationFrame(onAnimationFrame);
    }
  }

  window.requestAnimationFrame(onAnimationFrame);
}

const rootDiv = document.createElement("div");
rootDiv.style.position = "fixed";
rootDiv.style.maxWidth = "450px";
rootDiv.style.left = "24px";
rootDiv.style.bottom = "24px";
rootDiv.style.padding = "1.5em";
rootDiv.style.boxShadow =
  "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(15, 23, 42, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px";
rootDiv.style.borderRadius = "12px";
rootDiv.className = "bg";

const container = document.createElement("div");
container.className = "container";
rootDiv.appendChild(container);

const imgBox = document.createElement("div");
container.appendChild(imgBox);

const cookieImg = document.createElement("img");
cookieImg.src = "/static/cookie/cookie.png";
cookieImg.style.height = "32px";
imgBox.appendChild(cookieImg);

const dogImg = document.createElement("img");
dogImg.src = "/static/cookie/dog.png";
dogImg.style.height = "32px";
dogImg.style.marginLeft = "2px";
imgBox.appendChild(dogImg);

const cookieText = document.createElement("p");
cookieText.innerText =
  "This website gives cookies to good girls to help track their good behaviour across the internet. We need your permission before giving you cookies.";
// cookieText.style.margin = "0";
container.appendChild(cookieText);

const buttonBox = document.createElement("div");
buttonBox.style.paddingTop = "6px";
buttonBox.style.paddingBottom = "6px";
container.appendChild(buttonBox);

const acceptButton = document.createElement("a");
acceptButton.className = "fancy-link";
//padding: 12px 12px;margin-right: 6px;border-radius: 6px;
acceptButton.style.padding = "12px 12px";
acceptButton.style.marginRight = "6px";
acceptButton.style.borderRadius = "6px";
acceptButton.style.cursor = "pointer";
acceptButton.innerText = "Good girl!!";
acceptButton.onclick = cookieShower;

buttonBox.appendChild(acceptButton);

const declineButton = document.createElement("a");
declineButton.className = "fancy-link danger-fancy-link";
declineButton.style.padding = "12px 12px";
declineButton.style.marginRight = "6px";
declineButton.style.borderRadius = "6px";
declineButton.style.cursor = "pointer";
declineButton.innerText = "Only bad girls press this button";
declineButton.onclick = () => {document.body.removeChild(rootDiv)}
buttonBox.appendChild(declineButton);

document.body.appendChild(rootDiv);
