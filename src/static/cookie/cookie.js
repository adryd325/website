function cookieShower() {
  document.body.removeChild(rootDiv);
  const GRAVITY = 0.2;
  const MAX_SPEED = 20;

  const cookieElements = new Set();

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
      el.velocityY += GRAVITY;
      el.velocityY = Math.min(el.velocityY, MAX_SPEED);
      el.velocityX = Math.min(el.velocityX, MAX_SPEED);
      el.x += el.velocityX;
      el.y += el.velocityY;
      el.cookieEl.style.left = el.x + "px";
      el.cookieEl.style.top = el.y + "px";

      if (el.y > window.innerHeight) {
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
declineButton.className = "fancy-link fancy-link-danger";
declineButton.style.padding = "12px 12px";
declineButton.style.marginRight = "6px";
declineButton.style.borderRadius = "6px";
declineButton.style.cursor = "pointer";
declineButton.innerText = "Only bad girls press this button";
declineButton.onclick = cookieShower;
buttonBox.appendChild(declineButton);

document.body.appendChild(rootDiv);

const styleSheet = document.createElement("style");
styleSheet.innerText = `
html {
  --fancy-link-danger-text-color: #9f1239;
  --fancy-link-danger-text-color-hover: #ef4444;
  --fancy-link-danger-background-color: #fca5a555;
  --fancy-link-danger-background-color-hover: #fecaca55;
}


@media (prefers-color-scheme: dark) {
  html {
    --fancy-link-danger-text-color: #ef4444;
    --fancy-link-danger-text-color-hover: #ef4444;
    --fancy-link-danger-background-color: #991b1b33;
    --fancy-link-danger-background-color-hover: #dc262633;
  }
}

.fancy-link-danger {
  color: var(--fancy-link-danger-text-color);
  background-color: var(--fancy-link-danger-background-color);
}

.fancy-link-danger:hover {
  color: var(--fancy-link-danger-text-color-hover);
  background-color: var(--fancy-link-danger-background-color-hover);
}
`;
document.body.appendChild(styleSheet);
