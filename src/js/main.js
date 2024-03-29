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
});

let tabs = document.querySelectorAll('.tab');

tabs.forEach(value => {
  value.addEventListener('click', function () {
    tabs.forEach(v => v.classList.remove('lighter'));
    this.classList.add('lighter');
  });
});
