//#region GET ELEMENTS

const STEPS = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];
const PLANS = ['arcade', 'advanced', 'pro'];
const PAYMENT_METHODS = ['monthly', 'yearly'];
const ADDONS = ['online-service', 'larger-storage', 'custom-profile'];
let pickedAddons = [];
let selectedPlan = 'arcade';
let CURRENT_STEP = 0;
let paymentMethod = 'monthly';

const nameInput = document.getElementById('name');
const nameInputMsg = document.getElementById('name-err-msg');

const emailInput = document.getElementById('email');
const emailInputMsg = document.getElementById('email-err-msg');

const telInput = document.getElementById('tel');
const telInputMsg = document.getElementById('tel-err-msg');

const checkboxBtns = document.querySelectorAll('.check-box-container');
const checkBoxes = document.querySelectorAll('.check-box');

const onlineServicePricing = document.querySelector('#online-service-pricing');
const largerStoragePricing = document.querySelector('#larger-storage-pricing');
const customProfilePricing = document.querySelector('#custom-profile-pricing');

const onlineServiceSum = document.querySelector('#online-service-sum');
const largerStorageSum = document.querySelector('#larger-storage-sum');
const customProfileSum = document.querySelector('#custom-profile-sum');

const onlineServiceSumPricing = document.querySelector(
  '#online-service-sum span'
);
const largerStorageSumPricing = document.querySelector(
  '#larger-storage-sum span'
);
const customProfileSumPricing = document.querySelector(
  '#custom-profile-sum span'
);

const totalText = document.querySelector('#total-text');
const totalPrice = document.querySelector('#total-price');
let _totalPrice = 0;

const planSummaryH2 = document.querySelector('.plan-summary-info h2');
const planSummaryPrice = document.querySelector('.plan-summary-price');

const planSelectionBtns = document.querySelectorAll(
  '.plan-selection-container'
);
const topNavStepIndicators = document.querySelectorAll(
  '.navigation .step-indicator'
);

const monthlyOption = document.querySelector('#monthly');
const yearlyOption = document.querySelector('#yearly');

const paymentSwitch = document.querySelector('.switch');
const paymentSwitchCircle = document.querySelector('.switch-circle');

const arcadePrice = document.querySelector('#arcade-price');
const advancedPrice = document.querySelector('#advanced-price');
const proPrice = document.querySelector('#pro-price');

const monthsFreeElements = document.querySelectorAll('.months-free');
const addonSummaries = document.querySelectorAll('.addon-summary');

const hr = document.querySelector('hr');
const mainElements = document.querySelectorAll('main');

const btnNextStep = document.getElementById('btn-next-step');
const btnGoBack = document.getElementById('btn-go-back');

const changePlan = document.querySelector('#change-plan');
const navbarBottom = document.querySelector('.navbar-bottom');

//#endregion
//#region MANAGING NAVIGATION
function switchStepView() {
  mainElements.forEach((el) => {
    el.getAttribute('id') === STEPS[CURRENT_STEP]
      ? (el.style.display = 'flex')
      : (el.style.display = 'none');
  });
}
switchStepView();

function switchNavStepIndicator() {
  topNavStepIndicators.forEach((indic) => {
    if (indic.getAttribute('id') === `btn-${CURRENT_STEP + 1}`) {
      indic.style.backgroundColor = 'var(--clr-lightblue)';
      indic.style.borderColor = 'var(--clr-lightblue)';
      indic.style.color = 'var(--clr-black)';
    } else {
      indic.style.backgroundColor = 'var(--clr-transparent)';
      indic.style.borderColor = 'var(--clr-white)';
      indic.style.color = 'var(--clr-white)';
    }
  });
}
switchNavStepIndicator();
btnNextStep.addEventListener('click', () => {
  setSwitchPosition();
  switch (CURRENT_STEP) {
    case 0:
      true ? increaseCurrentStep() : null;
      break;
    case 1:
      true ? increaseCurrentStep() : null;
      break;
    case 2:
      true ? increaseCurrentStep() : null;
      break;
    case 3:
      true ? increaseCurrentStep() : null;
      break;
  }
});

btnGoBack.addEventListener('click', () => {
  decreaseCurrentStep();
});

function increaseCurrentStep() {
  if (CURRENT_STEP === 3) {
    CURRENT_STEP += 1;
    switchStepView();
    navbarBottom.style.display = 'none';
  } else if (!(CURRENT_STEP > 3)) {
    CURRENT_STEP += 1;
    btnGoBack.style.visibility = 'visible';
    switchStepView();
    switchNavStepIndicator();
  }
}

function decreaseCurrentStep() {
  if (CURRENT_STEP === 1) {
    btnGoBack.style.visibility = 'hidden';
    CURRENT_STEP -= 1;
    switchStepView();
    switchNavStepIndicator();
  } else if (!(CURRENT_STEP <= 0)) {
    CURRENT_STEP -= 1;
    switchStepView();
    switchNavStepIndicator();
  }
}
//#endregion
//#region STEP 1

function validateName() {
  if (
    nameInput.value.match(/[!@#$%^&*(),.?":{}|<>]/) ||
    nameInput.value.match(/[0-9]/)
  ) {
    nameInputMsg.textContent = 'Wrong format, characters only';
    nameInput.classList.add('red-border');
    return false;
  } else if (nameInput.value.length === 0) {
    nameInputMsg.textContent = 'This field is required';
    nameInput.classList.add('red-border');
    return false;
  } else if (nameInput.value.length > 32) {
    nameInputMsg.textContent = 'Names longer than 32 characters are not valid';
    nameInput.classList.add('red-border');
    return false;
  } else {
    return true;
  }
}

function validateEmail() {
  if (emailInput.value.length === 0) {
    emailInputMsg.textContent = 'This field is required';
    emailInput.classList.add('red-border');
    return false;
  } else if (
    !emailInput.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    emailInputMsg.textContent = 'Looks like this is not an email';
    emailInput.classList.add('red-border');
    return false;
  } else if (emailInput.value.length > 32) {
    nameInputMsg.textContent = '+32 characters are not valid';
    nameInput.classList.add('red-border');
    return false;
  } else {
    return true;
  }
}

function validateTel() {
  if (telInput.value.length === 0) {
    telInputMsg.textContent = 'This field is required';
    telInput.classList.add('red-border');
    return false;
  } else if (
    !telInput.value.match(/^\+[0-9]{1}\ [0-9]{3}\ [0-9]{3}\ [0-9]{3}$/)
  ) {
    telInputMsg.textContent = 'Wrong format';
    telInput.classList.add('red-border');
    return false;
  } else {
    return true;
  }
}

function validationStep1() {
  validateName();
  validateEmail();
  validateTel();
  if (validateName() && validateEmail() && validateTel()) {
    return true;
  } else {
    return false;
  }
}

// When clicked again after error message; error message, and red border disappear.
nameInput.addEventListener('focus', () => {
  nameInputMsg.textContent = '';
  nameInput.classList.remove('red-border');
});
emailInput.addEventListener('focus', () => {
  emailInputMsg.textContent = '';
  emailInput.classList.remove('red-border');
});
telInput.addEventListener('focus', () => {
  telInputMsg.textContent = '';
  telInput.classList.remove('red-border');
});

//#endregion
//#region STEP 2

function resetSelection() {
  planSelectionBtns.forEach((btn) => {
    btn.style.backgroundColor = 'var(--clr-white)';
    btn.style.borderColor = 'var(--clr-lightgray)';
  });
  selectedPlan = '';
}

planSelectionBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    resetSelection();
    selectedPlan = `${btn.getAttribute('id')}`;
    switchPricings();
    btn.style.backgroundColor = 'var(--clr-magnolia)';
    btn.style.borderColor = 'var(--clr-purplishblue)';
  });
});

function selectMonthly() {
  monthlyOption.style.color = 'var(--clr-marineblue)';
  yearlyOption.style.color = 'var(--clr-coolgray)';

  arcadePrice.textContent = '$9/mo';
  advancedPrice.textContent = '$12/mo';
  proPrice.textContent = '$15/mo';

  monthsFreeElements.forEach((el) => {
    el.style.display = 'none';
  });
  paymentMethod = 'monthly';
  switchPricings();
}
function selectYearly() {
  monthlyOption.style.color = 'var(--clr-coolgray)';
  yearlyOption.style.color = 'var(--clr-marineblue)';

  arcadePrice.textContent = '$90/yr';
  advancedPrice.textContent = '$120/yr';
  proPrice.textContent = '$150/yr';

  monthsFreeElements.forEach((el) => {
    el.style.display = 'block';
  });
  paymentMethod = 'yearly';
  switchPricings();
}

paymentSwitchCircle.setAttribute('style', 'left: 5px');
selectMonthly();
function setSwitchPosition() {
  if (window.innerWidth > 768 && window.innerWidth < 1200) {
    paymentSwitchCircle.style.bottom = '10px';
  } else if (window.innerWidth > 1200) {
    paymentSwitchCircle.style.bottom = '5px';
  } else {
    paymentSwitchCircle.style.bottom = '5px';
  }
}
paymentSwitch.addEventListener('click', () => {
  setSwitchPosition();
  if (paymentMethod === 'monthly') {
    if (window.innerWidth > 768 && window.innerWidth < 1200) {
      let pos = 5;
      let timer = setInterval(() => {
        paymentSwitchCircle.style.left = `${(pos += 1)}px`;
        if (pos >= 46) {
          clearInterval(timer);
        }
      }, 5);
      paymentMethod = 'yearly';
      selectYearly();
    } else {
      let pos = 5;
      let timer = setInterval(() => {
        paymentSwitchCircle.style.left = `${(pos += 1)}px`;
        if (pos >= 22) {
          clearInterval(timer);
        }
      }, 5);
      paymentMethod = 'yearly';
      selectYearly();
    }
  } else if (paymentMethod === 'yearly') {
    if (window.innerWidth > 768 && window.innerWidth < 1200) {
      let pos = 46;
      let timer = setInterval(() => {
        paymentSwitchCircle.style.left = `${(pos -= 1)}px`;
        if (pos <= 5) {
          clearInterval(timer);
        }
      }, 5);
      paymentMethod = 'monthly';
      selectMonthly();
    } else {
      let pos = 22;
      let timer = setInterval(() => {
        paymentSwitchCircle.style.left = `${(pos -= 1)}px`;
        if (pos <= 5) {
          clearInterval(timer);
        }
      }, 5);
      paymentMethod = 'monthly';
      selectMonthly();
    }
  }
});

function validationStep2() {
  if (PLANS.includes(selectedPlan) && PAYMENT_METHODS.includes(paymentMethod)) {
    return true;
  } else {
    return false;
  }
}

//#endregion
//#region STEP 3

function capitalize(str) {
  return `${str[0].toUpperCase()}${str.substring(1)}`;
}

function switchPricings() {
  _totalPrice = 0;
  if (paymentMethod === 'monthly') {
    onlineServicePricing.textContent = '+$1/mo';
    largerStoragePricing.textContent = '+$2/mo';
    customProfilePricing.textContent = '+$2/mo';

    onlineServiceSumPricing.textContent = '+$1/mo';
    largerStorageSumPricing.textContent = '+$2/mo';
    customProfileSumPricing.textContent = '+$2/mo';

    pickedAddons.includes('online-service') ? (_totalPrice += 1) : null;
    pickedAddons.includes('larger-storage') ? (_totalPrice += 2) : null;
    pickedAddons.includes('custom-profile') ? (_totalPrice += 2) : null;

    switch (selectedPlan) {
      case 'arcade':
        planSummaryPrice.textContent = '$9/mo';
        _totalPrice += 9;
        break;
      case 'advanced':
        planSummaryPrice.textContent = '$12/mo';
        _totalPrice += 12;
        break;
      case 'pro':
        planSummaryPrice.textContent = '$15/mo';
        _totalPrice += 15;
        break;
    }
    planSummaryH2.textContent = `${capitalize(selectedPlan)} (Monthly)`;
    totalText.textContent = 'Total (per month)';
    totalPrice.textContent = `$${_totalPrice}/mo`;
  } else if (paymentMethod === 'yearly') {
    onlineServicePricing.textContent = '+$10/yr';
    largerStoragePricing.textContent = '+$20/yr';
    customProfilePricing.textContent = '+$20/yr';

    onlineServiceSumPricing.textContent = '+$10/yr';
    largerStorageSumPricing.textContent = '+$20/yr';
    customProfileSumPricing.textContent = '+$20/yr';

    pickedAddons.includes('online-service') ? (_totalPrice += 10) : null;
    pickedAddons.includes('larger-storage') ? (_totalPrice += 20) : null;
    pickedAddons.includes('custom-profile') ? (_totalPrice += 20) : null;

    switch (selectedPlan) {
      case 'arcade':
        planSummaryPrice.textContent = '$90/yr';
        _totalPrice += 90;
        break;
      case 'advanced':
        planSummaryPrice.textContent = '$120/yr';
        _totalPrice += 120;
        break;
      case 'pro':
        planSummaryPrice.textContent = '$150/yr';
        _totalPrice += 150;
        break;
    }

    planSummaryH2.textContent = `${capitalize(selectedPlan)} (Yearly)`;
    totalText.textContent = 'Total (per year)';
    totalPrice.textContent = `$${_totalPrice}/yr`;
  }
}

checkboxBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (
      btn.childNodes[1].childNodes[1].style['backgroundColor'] ===
      'var(--clr-purplishblue)'
    ) {
      btn.childNodes[1].childNodes[1].style['backgroundColor'] =
        'var(--clr-white)';
      btn.childNodes[1].childNodes[1].style['border'] =
        'solid 2px var(--clr-lightgray)';
      btn.style.backgroundColor = 'var(--clr-white)';
      btn.style.borderColor = 'var(--clr-lightgray)';
      pickedAddons.splice(pickedAddons.indexOf(`${btn.getAttribute('id')}`), 1);
      renderPickedAddons();
      switchPricings();
    } else {
      btn.childNodes[1].childNodes[1].style['backgroundColor'] =
        'var(--clr-purplishblue)';
      btn.childNodes[1].childNodes[1].style['border'] =
        'solid 2px var(--clr-purplishblue)';
      btn.style.backgroundColor = 'var(--clr-magnolia)';
      btn.style.borderColor = 'var(--clr-purplishblue)';
      pickedAddons.push(`${btn.getAttribute('id')}`);
      renderPickedAddons();
      switchPricings();
    }
  });
});

function validationStep3() {
  pickedAddons.forEach((addon) => {
    if (!ADDONS.includes(addon)) return false;
  });
  return true;
}
//#endregion
//#region STEP 4

function resetSummary() {
  addonSummaries.forEach((addon) => {
    addon.style.display = 'none';
  });
  hr.style.display = 'none';
}
changePlan.addEventListener('click', () => {
  CURRENT_STEP = 1;
  switchStepView();
  switchNavStepIndicator();
});
resetSummary();
function renderPickedAddons() {
  if (pickedAddons.includes('online-service')) {
    onlineServiceSum.style.display = 'flex';
    hr.style.display = 'block';
  } else {
    onlineServiceSum.style.display = 'none';
    hr.style.display = 'none';
  }
  if (pickedAddons.includes('larger-storage')) {
    largerStorageSum.style.display = 'flex';
    hr.style.display = 'block';
  } else {
    largerStorageSum.style.display = 'none';
    hr.style.display = 'none';
  }
  if (pickedAddons.includes('custom-profile')) {
    customProfileSum.style.display = 'flex';
    hr.style.display = 'block';
  } else {
    customProfileSum.style.display = 'none';
    hr.style.display = 'none';
  }
}
//#endregion
