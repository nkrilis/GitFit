const signupFormHandler = async (event) => {

  event.preventDefault();

  const age = document.querySelector('#age').value.trim();
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const height = document.querySelector("#height").value.trim();
  const weight = document.querySelector("#weight").value.trim();
  const gender = document.querySelector("#gender").value;
  const category = document.querySelector("#category").value;

  if (name && email && password && height && weight && gender && category) {
    const response = await fetch('/api/users', {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        height,
        weight,
        age,
        gender,
        category,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up, please fill in all data.");
    }
  }
};


document
.querySelector('.form')
.addEventListener('submit', signupFormHandler);

