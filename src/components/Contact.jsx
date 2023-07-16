import React from "react";

const Contact = () => {
  const contact_info = [
    {
      logo: "mail",
      text: "ichiomafaustina@gmail.com",
      link: "mailto:ichiomafaustina@gmail.com",
    },
    {
      logo: "logo-whatsapp",
      text: "090 3759 3916",
      link: "https://wa.me/09037593916",
    },
    {
      logo: "location",
      text: "demo location",
      onClick: () => {
        // Add your location functionality logic here
        console.log("Location clicked!");
      },
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    // You can implement the logic to send the message to the email address here
    console.log("Sending message...");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset the form after sending the message
    form.reset();
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email Address" required />
            <textarea name="message" placeholder="Your Message" rows={10} required></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
                onClick={contact.onClick}
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                {contact.link ? (
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:text-base text-sm break-words text-cyan-600 hover:underline"
                  >
                    {contact.text}
                  </a>
                ) : (
                  <p className="md:text-base text-sm break-words">{contact.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
