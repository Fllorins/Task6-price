const price = document.querySelector('.switch-block');
const priceBtn = document.querySelector('.switch-btn');
const percent = 0.1;

let month;

price.addEventListener('click', () => {
  if (priceBtn.classList.contains('switch-on')) {
    priceBtn.classList.remove('switch-on');
    percentForAnnually();
  } else {
    priceBtn.classList.add('switch-on');
    percentForMonth();
  }
});

const percentBlock = document.querySelector('.price-container');
function percentForMonth() {
  if (percentBlock) {
    percentBlock.querySelectorAll('.switch-item').forEach((el) => {
      el.querySelectorAll('.switch-item__price-persent').forEach((e) => {
        month = Math.round(e.getAttribute('data-value') * percent) - 0.01;
        e.innerHTML = +month;
      });
    });
  }
}
if (priceBtn.classList.contains('switch-on')) {
  percentForMonth();
} else {
}

function percentForAnnually() {
  percentBlock.querySelectorAll('.switch-item').forEach((item) => {
    item.querySelectorAll('.switch-item__price-persent').forEach((i) => {
      month = 0;
      month =
        Math.round(
          i.getAttribute('data-value') - i.getAttribute('data-value') * percent
        ) - 0.01;
      i.innerHTML = +month;
    });
  });
}