document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // מונע את שליחת הטופס באופן אוטומטי
  
    // קבלת ערכי השדות
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // בדיקות ולידציה מותאמות אישית
    if (username.length < 3) {
      alert("Username must be at least 3 characters long.");
      return;
    }
  
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
  
    // אם הכל תקין, אפשר להמשיך ולשלוח את הטופס
    alert("Form submitted successfully!");
    // כאן אפשר להוסיף קוד לשליחת הנתונים ידנית, או להסיר את event.preventDefault() ולהמשיך.
  });
  