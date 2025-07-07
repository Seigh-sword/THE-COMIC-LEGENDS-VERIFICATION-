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

  const data = {
    name, email, number, classValue, birthday,
    role, socialMedia, username, note
  };

  fetch('https://script.google.com/macros/s/AKfycbxrQ7UsT5sTPfTAEgrH9P4FrbUHx5D0WzPdTIxXxXFD-aEckgJab8gHmqp6P9S0UgHwCw/exec', {
    method: 'POST',
    body: JSON.stringify(data),
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

function the_command() {
  document.getElementById('pending').style.display = 'none';
  document.getElementById('card').style.display = 'block';
  console.log("✅ Access granted by the mighty Seigh_sword.");
}
