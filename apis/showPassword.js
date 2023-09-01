import ShowPassword from '/src/images/show.svg';
import HidePassword from '/src/images/hide.svg';

export const handleRevealPassword = (e, inputID) => {
  const { src } = e.target;
  const passwordInput = document?.getElementById(inputID);
  if (passwordInput.type === 'password') {
    e.target.src = HidePassword;
    passwordInput.type = 'text';
  } else {
    e.target.src = ShowPassword;
    passwordInput.type = 'password';
  }
};
