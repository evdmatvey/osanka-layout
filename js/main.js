const openMobileNavigationButton = document.querySelector('.header__burger'),
  closeMobileNavigationButton = document.querySelector('.header__burger-close'),
  mobileNavigation = document.querySelector('.header__burger-menu');
function openMobileNavigationHandler() {
  mobileNavigation.classList.remove('hide'),
    mobileNavigation.classList.add('open'),
    document.body.classList.add('navigation-open');
}
function hideMobileNavigationHandler() {
  mobileNavigation.classList.add('hide'),
    setTimeout(() => {
      mobileNavigation.classList.remove('open'), document.body.classList.remove('navigation-open');
    }, 100);
}
openMobileNavigationButton.addEventListener('click', openMobileNavigationHandler),
  closeMobileNavigationButton.addEventListener('click', hideMobileNavigationHandler);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm5hbWVzIjpbIm9wZW5Nb2JpbGVOYXZpZ2F0aW9uQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xvc2VNb2JpbGVOYXZpZ2F0aW9uQnV0dG9uIiwibW9iaWxlTmF2aWdhdGlvbiIsIm9wZW5Nb2JpbGVOYXZpZ2F0aW9uSGFuZGxlciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImJvZHkiLCJoaWRlTW9iaWxlTmF2aWdhdGlvbkhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VzIjpbIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYnVyZ2VyIG1lbnVcclxuY29uc3Qgb3Blbk1vYmlsZU5hdmlnYXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXInKTtcclxuY29uc3QgY2xvc2VNb2JpbGVOYXZpZ2F0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyLWNsb3NlJyk7XHJcbmNvbnN0IG1vYmlsZU5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXItbWVudScpO1xyXG5cclxub3Blbk1vYmlsZU5hdmlnYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9iaWxlTmF2aWdhdGlvbkhhbmRsZXIpO1xyXG5jbG9zZU1vYmlsZU5hdmlnYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9iaWxlTmF2aWdhdGlvbkhhbmRsZXIpO1xyXG5cclxuZnVuY3Rpb24gb3Blbk1vYmlsZU5hdmlnYXRpb25IYW5kbGVyKCkge1xyXG4gIG1vYmlsZU5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gIG1vYmlsZU5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1vcGVuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVNb2JpbGVOYXZpZ2F0aW9uSGFuZGxlcigpIHtcclxuICBtb2JpbGVOYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIG1vYmlsZU5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uLW9wZW4nKTtcclxuICB9LCAxMDApO1xyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTUEsMkJBQTZCQyxTQUFTQyxjQUFjLG1CQUNwREMsNEJBQThCRixTQUFTQyxjQUFjLHlCQUNyREUsaUJBQW1CSCxTQUFTQyxjQUFjLHdCQUtoRCxTQUFTRyw4QkFDUEQsaUJBQWlCRSxVQUFVQyxPQUFPLFFBQ2xDSCxpQkFBaUJFLFVBQVVFLElBQUksUUFDL0JQLFNBQVNRLEtBQUtILFVBQVVFLElBQUksbUJBRzlCLFNBQVNFLDhCQUNQTixpQkFBaUJFLFVBQVVFLElBQUksUUFDL0JHLFlBQVcsS0FDVFAsaUJBQWlCRSxVQUFVQyxPQUFPLFFBQ2xDTixTQUFTUSxLQUFLSCxVQUFVQyxPQUFPLHFCQUM5QixLQWRMUCwyQkFBMkJZLGlCQUFpQixRQUFTUCw2QkFDckRGLDRCQUE0QlMsaUJBQWlCLFFBQVNGIn0=