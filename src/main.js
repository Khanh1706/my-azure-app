import './style.css'

// Load the subscriptionKey from environment variables
const subscriptionKey = import.meta.env.VITE_SUBSCRIPTION_KEY;

document.querySelector('#app').innerHTML = `
  <div style="font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 20px;">
    <h1>My Azure Static Web App</h1>
    <p>Status: <strong>${subscriptionKey ? 'Subscription Key Loaded ✅' : 'Missing Subscription Key ❌'}</strong></p>
    <button id="test-btn">Test Key Variable</button>
    <p id="output"></p>
  </div>
`;

document.querySelector('#test-btn').addEventListener('click', () => {
  if (subscriptionKey) {
    document.querySelector('#output').textContent =
      `Success! Key loaded via variable (ends in: ...${subscriptionKey.slice(-4)})`;
  } else {
    document.querySelector('#output').textContent =
      'Error: subscriptionKey variable is empty.';
  }
});