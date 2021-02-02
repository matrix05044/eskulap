function slider() {
  const opinionWrapper = document.querySelector('.opinion');
  const opinionElements = opinionWrapper.querySelectorAll('.opinion__change');
  const elemWidth = opinionWrapper.offsetWidth;
  let counter = 0;
  let tab = [];

  for (let i = 0; i < opinionElements.length; i++) {
    tab.push(elemWidth * i);
  }

  const left = (num) => {
    return num - elemWidth;
  };

  const right = (num) => {
    return num + elemWidth;
  };

  opinionElements.forEach((elem, index) => {
    elem.style.transform = 'translateX(' + tab[index] + 'px)';
  });

  const swap = (swapFunction) => {
    tab = tab.map(swapFunction);
    opinionElements.forEach((elem, index) => {
      elem.style.transform = 'translateX(' + tab[index] + 'px)';
    });
  };

  const changing = () => {
    if (counter < opinionElements.length - 1) {
      swap(left);
      counter++;
    } else if (
      counter >= opinionElements.length - 1 &&
      counter <= opinionElements.length * 2 - 3
    ) {
      swap(right);
      counter++;
    } else {
      counter = 0;
    }
  };

  const sliding = () => {
    setInterval(changing, 10000);
  };

  sliding();
}

const hamBtn = document.querySelector('.hamburger');
const menu = hamBtn.nextElementSibling;
const hamIn = document.querySelector('.hamburger__inner');
const click = () => {
  menu.classList.toggle('menu--disactive');
  hamBtn.classList.toggle('hamburger--active');
  hamIn.classList.toggle('hamburger__inner--active');
  console.log(hamBtn);
};

hamBtn.addEventListener('click', click);

// console.log(hamBtn);
slider();
