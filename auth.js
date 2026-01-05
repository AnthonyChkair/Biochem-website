// ===============================
// Supabase Authentication Setup
// ===============================

// 🔑 1. PASTE YOUR SUPABASE INFO HERE
const SUPABASE_URL = "https://pnsagtnegaxjcnptuism.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_9unp584sQedURqUV1mL9mw_9XHe05EZ";

// 🔌 2. Create Supabase client
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// ===============================
// SIGN UP FUNCTION
// ===============================
async function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Account created! Check your email.");
    window.location.href = "login.html";
  }
}

// ===============================
// LOGIN FUNCTION
// ===============================
async function logIn() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Login successful!");
    window.location.href = "index.html";
  }
}
