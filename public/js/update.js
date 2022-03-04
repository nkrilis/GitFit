const updateFormHandler = async (event) => {

    event.preventDefault();
  
    const age = document.querySelector('#age').value.trim();
    const height = document.querySelector("#height").value.trim();
    const weight = document.querySelector("#weight").value.trim();
    const category_id = document.querySelector("#category").value;
  
    if (name && email && password && height && weight && gender && category_id) {
      const response = await fetch('/api/users/update', {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
          height,
          weight,
          age,
          gender,
          category_id,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(`Failed to sign up, please fill in all data.`);
      }
    }
  };
  

  document
  .querySelector('.form')
  .addEventListener('submit', updateFormHandler);
  
  