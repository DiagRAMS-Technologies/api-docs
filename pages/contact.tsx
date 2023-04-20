import { AppLayout } from "@/layouts/app";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

  const {name, email, message} = e.target.elements;

  const mailOptions = {
    from: 'cc@gmail.com',
    to: 'vdasilva@diagrams-technologies.com',
    subject: 'contact',
    html: `
      <p> Nom: ${name.value} </p>
    `
  };
  //await transporter.sendMail(mailOptions);

  e.target.reset()
  };
  return (
    <>
      <AppLayout></AppLayout>
        <div className="contact-container">
          <h1>Contactez-nous</h1>
          <p>Vous pouvez nous contacter</p>
          <form onSubmit={handleSubmit}>
            
            <label htmlFor="name">Name : *</label>
            <input type="text" id="name" name="name" required placeholder="First name"/>

            <label htmlFor="email">Email : *</label>
            <input type="text" id="email" name="email" required placeholder="firstName.lastName@domain.com"/>
            
            <label htmlFor="message">Message : *</label>
            <textarea id="message" name="message" required placeholder="Your message"></textarea>

            <button type="submit" >Send</button>
          </form>
          <style jsx>{`
            .contact-container{
              max-width: 600px;
              margin: 0 auto;
              padding: 40px;
            }

            h1{
              font-size: var(--giantFontSize);
              margin-bottom: 20px;
            }

            p{
              font-size: var(--mediumFontSize);
              margin-bottom: 40px;
            }

            form{
              display: grid;
              gap: 16px;
            }

            input,textarea{
              padding: 10px;
              font-size: var(--formInputFontSize);
              border: 1px solid var(--greyTextColor);
              border-radius: 4px;
            }

            textarea{
              height : 200px;
            }

            button{
              padding: 10px 20 px;
              font-size: var(--mediumFontSize);
              background-color: var(--primary);
              color: var(--light);
              border: none;
              border-radius: 4px;
              cursor: pointer;
              height : 40px;
            }

            button:hover{
              background-color: var(--primaryAlpha)
            }

            
          `}</style>
      </div>
    </>
  )
}
