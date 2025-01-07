// Gérer la soumission du formulaire
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Empêche l'envoi réel des données
  
  // Récupération des valeurs des champs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Vérification de base
  if (name && email && message) {
      alert(`Merci, ${name}! Votre message a été envoyé avec succès.`);
      this.reset();  // Réinitialise le formulaire
  } else {
      alert('Veuillez remplir tous les champs.');
  }
});
