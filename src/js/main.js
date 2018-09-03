const navOptions = {
  edge: 'right'
};

document.addEventListener('DOMContentLoaded', function () {
  let sidenav = document.querySelectorAll('.sidenav');
  let navInstances = M.Sidenav.init(sidenav, navOptions);

  let collapsible = document.querySelectorAll('.collapsible');
  let collInstances = M.Collapsible.init(collapsible, { });

  let expandable = document.querySelectorAll('.collapsible.expandable');
  let expInstances = M.Collapsible.init(expandable, { accordion: false });

  let tabs = document.querySelectorAll('.tabs');
  var tabsInstance = M.Tabs.init(tabs, {});

  var modal = document.querySelectorAll('.modal');
  var modInstance = M.Modal.init(modal, {});

  /* Slider for flash news section */
  function moveToNextSlide() {
    var newsList = document.querySelectorAll('.g-news .more-news');
    var activeNews = null;
    var activeIndex = null;

    Array.from(newsList).forEach((node, index) => {
      if (node.classList.contains('active')) {
        activeNews = node;
        activeIndex = index;
      }
    });

    activeNews.classList.remove('active');
    newsList[activeIndex + 1].classList.add('active');

    setTimeout(function () {
      newsList[newsList.length - 1].after(newsList[0]);
    }, 1000);

    setTimeout(function () {
      moveToNextSlide();
    }, 20000);
  }

  moveToNextSlide();
  /* slider in flash section */

  /* Slider for static  section */
  function moveToNextSlideS() {
    var snewsList = document.querySelectorAll('.s-news .more-news');
    var sactiveNews = null;
    var sactiveIndex = null;

    Array.from(snewsList).forEach((node, index) => {
      if (node.classList.contains('active')) {
        sactiveNews = node;
        sactiveIndex = index;
      }
    });

    sactiveNews.classList.remove('active');
    snewsList[sactiveIndex + 1].classList.add('active');

    setTimeout(function () {
      snewsList[snewsList.length - 1].after(snewsList[0]);
    }, 1000);

    setTimeout(function () {
      moveToNextSlideS();
    }, 20000);
  }

  moveToNextSlideS();
  /* slider in static section */
});

let tabs = document.querySelectorAll('.tab');

tabs.forEach(value => {
  value.addEventListener('click', function () {
    tabs.forEach(v => v.classList.remove('lighter'));
    this.classList.add('lighter');
  });
});

const smawu = document.getElementById('smawu');
smawu.addEventListener('click', function () {
  document.getElementById('s56').classList.toggle('hide');
});
