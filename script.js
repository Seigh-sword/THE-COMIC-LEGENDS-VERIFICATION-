document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const classValue = document.getElementById('class').value;
  const birthday = new Date(document.getElementById('birthday').value);
  const role = document.getElementById('role').value;
  const socialMedia = document.getElementById('socialMedia').value;
  const username = document.getElementById('username').value;

  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();

  const emailType = email.includes('@outlook') ? 'Outlook' : 'Email';
  const bDayFormatted = `${birthday.getDate()} | ${birthday.getMonth()+1} | ${birthday.getFullYear()} (Age: ${age})`;

  document.getElementById('cardName').textContent = `Name: ${name}`;
  document.getElementById('cardEmail').textContent = `Email [${emailType}]: ${email}`;
  document.getElementById('cardNumber').textContent = `Number: ${number}`;
  document.getElementById('cardBorn').textContent = `Born on: ${bDayFormatted}`;
  document.getElementById('cardClass').textContent = `Class: ${classValue}`;
  document.getElementById('cardRole').textContent = `Role: ${role}`;
  document.getElementById('cardSocial').textContent = `Social Media: ${socialMedia} — ${username}`;

  document.getElementById('card').style.display = 'block';
});