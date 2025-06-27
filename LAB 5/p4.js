function validateForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeatPassword").value;
  const dob = document.getElementById("dob").value;
  const enrollment = document.getElementById("enrollment").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

 
  message.innerText = "";

  // 1. Username validation (min 8 characters)
  const usernameReg = /^.{8,}$/;
  if (!usernameReg.test(username)) {
    message.innerText = "Username must be at least 8 characters long.";
    return false;
  }

  // 2. Password validation (8-12 chars, at least 1 digit and 1 special character)
  const passwordReg = /^(?=.*\d)(?=.*[\W_]).{8,12}$/;
  if (!passwordReg.test(password)) {
    message.innerText = "Password must be 8-12 characters long with at least one digit and one special character.";
    return false;
  }

  // 3. Password match
  if (password !== repeatPassword) {
    message.innerText = "Passwords do not match.";
    return false;
  }

  // 4. Age validation (greater than 18)
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age <= 18) {
    message.innerText = "You must be older than 18.";
    return false;
  }

  // 5. Enrollment number must be exactly 11 digits
  const enrollmentReg = /^\d{11}$/;
  if (!enrollmentReg.test(enrollment)) {
    message.innerText = "Enrollment number must be exactly 11 digits.";
    return false;
  }

  // 6. Email format validation
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailReg.test(email)) {
    message.innerText = "Invalid email format.";
    return false;
  }

 
  alert("Form submitted successfully!");
  return true;
}
