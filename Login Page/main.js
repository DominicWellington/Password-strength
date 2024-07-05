const bars = document.querySelector("#bars");
const strengthBox = document.querySelector("#strength");
const passwordInput = document.querySelector("#password");

const strength = {
  1: "weak",
  2: "medium",
  3: "strong",
};

const getIndicator = (password, setPassword) => {
  setPassword.upper = /[A-Z]/.test(password);
  setPassword.lower = /[a-z]/.test(password);
  setPassword.numbers = /\d/.test(password);

  let strengthIndicator = 0;

  for (let metric in setPassword) {
    if (setPassword[metric] === true) {
      strengthIndicator ++; 
    }
  }
  return strength[strengthIndicator] ?? "";
};

const getStrength = (password) => {
  let setPassword = {
    upper: false,
    numbers: false,
    lower: false,
  };
  return getIndicator(password, setPassword);
};

const handleChange = () => {
    let { value: password } = passwordInput;
    console.log(password);

    const strengthText = getStrength(password);

bars.classList = "";

    if (strengthText) {
        strengthBox.innerText = `${strengthText} password`;
        bars.classList.add(strengthText);
    } else{
        strengthBox.innerText = "";
    }
};


