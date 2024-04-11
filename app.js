function calculateFinalAmount() {
  const grossAnnualIncome = parseFloat(
    document.getElementById("gross-annual-income").value
  );
  const extraIncome = parseFloat(document.getElementById("extra-income").value);
  const ageGroup = document.getElementById("age-group").value;
  const totalApplicableDeductions = parseFloat(
    document.getElementById("total-applicable-deductions").value
  );
  let finalAmount,
    tax = 0;
  const totalAmount =
    grossAnnualIncome + extraIncome - totalApplicableDeductions;
  if (totalAmount <= 800000) {
    finalAmount = totalAmount;
    document.getElementById("result").textContent = finalAmount.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR'
  });
  } else if (ageGroup === "<40") {
    tax = 0.3 * (totalAmount - 800000);
    finalAmount = totalAmount - tax;
    document.getElementById("result").textContent = finalAmount.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR'
  });
  } else if (ageGroup === ">=40 & <60") {
    tax = 0.4 * (totalAmount - 800000);
    finalAmount = totalAmount - tax;
    document.getElementById("result").textContent = finalAmount.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR'
  });
  } else if (ageGroup === ">=60") {
    tax = 0.1 * (totalAmount - 800000);
    finalAmount = totalAmount - tax;
    document.getElementById("result").textContent = finalAmount.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR'
  });
  }
}
const submitBtn = document.querySelector(".btn-submit");
const grossAnnualIncomeInput = document.getElementById("gross-annual-income");
grossAnnualIncomeInput.addEventListener("input", () => {
  const inputValue = grossAnnualIncomeInput.value;
  const numberPattern = /^\d*$/;
  if (!numberPattern.test(inputValue)) {
    document
      .querySelector(".gross-annual-income-icon")
      .classList.remove("hide");
    grossAnnualIncomeInput.classList.remove("green-outline");
    grossAnnualIncomeInput.classList.add("red-outline");
    submitBtn.setAttribute("disabled", "disabled");
  } else {
    document.querySelector(".gross-annual-income-icon").classList.add("hide");
    grossAnnualIncomeInput.classList.add("green-outline");
    grossAnnualIncomeInput.classList.remove("red-outline");
    submitBtn.removeAttribute("disabled", "disabled");
  }
});
const extraIncomeInput = document.getElementById("extra-income");
extraIncomeInput.addEventListener("input", () => {
  const inputValue = extraIncomeInput.value;
  const numberPattern = /^\d*$/;
  if (!numberPattern.test(inputValue)) {
    document.querySelector(".extra-income-icon").classList.remove("hide");
    extraIncomeInput.classList.remove("green-outline");
    extraIncomeInput.classList.add("red-outline");
    submitBtn.setAttribute("disabled", "disabled");
  } else {
    document.querySelector(".extra-income-icon").classList.add("hide");
    extraIncomeInput.classList.add("green-outline");
    extraIncomeInput.classList.remove("red-outline");
    submitBtn.removeAttribute("disabled", "disabled");
  }
});
const totalApplicableDeductionsInput = document.getElementById(
  "total-applicable-deductions"
);
totalApplicableDeductionsInput.addEventListener("input", () => {
  const inputValue = totalApplicableDeductionsInput.value;
  const numberPattern = /^\d*$/;
  if (!numberPattern.test(inputValue)) {
    document
      .querySelector(".total-applicable-deductions-icon")
      .classList.remove("hide");
    totalApplicableDeductionsInput.classList.remove("green-outline");
    totalApplicableDeductionsInput.classList.add("red-outline");
    submitBtn.setAttribute("disabled", "disabled");
  } else {
    document
      .querySelector(".total-applicable-deductions-icon")
      .classList.add("hide");
    totalApplicableDeductionsInput.classList.add("green-outline");
    totalApplicableDeductionsInput.classList.remove("red-outline");
    submitBtn.removeAttribute("disabled", "disabled");
  }
});
