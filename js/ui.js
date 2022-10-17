document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = this.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});

  document.querySelectorAll("#containerRecipe").forEach(i => {
    i.querySelector('#_deleted').addEventListener('click', function() {
      i.remove();
    });
  });
});
