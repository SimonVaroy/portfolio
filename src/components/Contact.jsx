const Contact = () => {
  return(
  <div className="contact">
    <h1>Kontaktinformasjon</h1>
    <ul>
      <li><a href="mailto:simon@simonvaroy.xyz">simon@simonvaroy.xyz</a></li>
      <li>PGP nøkkel for å kryptere e-post om du vet hvordan det gjøres. Den kan lastes ned <a href="/simonvaroy.gpg">her</a>, eller så kan du kjøre denne kommandoen:</li>
      <ul>
        <li>curl -sL https://simonvaroy.xyz/simonvaroy.gpg | gpg --import</li>
        <li>Fingerprint: 515B 5FF8 06A3 2C07 DEE9 0F96 96C5 2849 62C7 2EDE</li>
        <li>Alle legitime e-poster fra meg vil signeres med denne nøkkelen.</li>
      <li>Jeg kan også nås på XMPP/Jabber med den samme adressen, ikke at noen bruker det lenger.</li>
      </ul>
    </ul>
    <p>Utenom dette kan jeg også nås på GitHub og LinkedIn.</p>
  </div>
  );
};

export default Contact;
