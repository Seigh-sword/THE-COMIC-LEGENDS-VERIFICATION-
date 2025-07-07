let submittedData = null; // 🧠 Store data to use later

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const classValue = document.getElementById('class').value;
  const birthday = document.getElementById('birthday').value;
  const role = document.getElementById('role').value;
  const socialMedia = document.getElementById('socialMedia').value;
  const username = document.getElementById('username').value;
  const note = document.getElementById('note').value;

  // 📦 Save the submitted data for later card use
  submittedData = {
    name, email, number, classValue, birthday, role, socialMedia, username, note
  };

  // 📡 Send to Google Sheets
  fetch('https://script.google.com/macros/s/AKfycbxrQ7UsT5sTPfTAEgrH9P4FrbUHx5D0WzPdTIxXxXFD-aEckgJab8gHmqp6P9S0UgHwCw/exec', {
    method: 'POST',
    body: JSON.stringify(submittedData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.text())
  .then(response => {
    console.log('✅ Submitted:', response);
    document.getElementById('form').style.display = 'none';
    document.getElementById('pending').style.display = 'block';
  })
  .catch(err => console.error('❌ Error:', err));
});

// 🧙 Owner-only magic spell
function the_command() {
  if (!submittedData) {
    console.warn("⚠️ No form data submitted yet!");
    return;
  }

  const birthday = new Date(submittedData.birthday);
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const bDayFormatted = `${birthday.getDate()} | ${birthday.getMonth()+1} | ${birthday.getFullYear()} (Age: ${age})`;
  const emailType = submittedData.email.includes('@outlook') ? 'Outlook' : 'Email';

  document.getElementById('cardName').textContent = `Name: ${submittedData.name}`;
  document.getElementById('cardEmail').textContent = `Email [${emailType}]: ${submittedData.email}`;
  document.getElementById('cardNumber').textContent = `Number: ${submittedData.number}`;
  document.getElementById('cardBorn').textContent = `Born on: ${bDayFormatted}`;
  document.getElementById('cardClass').textContent = `Class: ${submittedData.classValue}`;
  document.getElementById('cardRole').textContent = `Role: ${submittedData.role}`;
  document.getElementById('cardSocial').textContent = `Social Media: ${submittedData.socialMedia} — ${submittedData.username}`;

  document.getElementById('pending').style.display = 'none';
  document.getElementById('card').style.display = 'block';

  console.log("✅ Access granted by the mighty Seigh_sword.");
}
