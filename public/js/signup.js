const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const height = document.querySelector("#height").value.trim();
  const weight = document.querySelector("#weight").value.trim();
  const gender = document.querySelector("#gender").value;
  const category = document.querySelector("#category").value;

  if (email && password && height && weight && gender && category) {
    const response = await fetch('/api/users/signup', {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        height,
        weight,
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

document.querySelector("#create_user").addEventListener("submit", signupFormHandler);
