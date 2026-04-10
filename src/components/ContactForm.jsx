import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "f33a5122-ed6d-447f-a63d-969673fe1fe9");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setStatus(data.success ? "Message sent!" : "Something went wrong");
  }

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className='justify-center items-start rounded-xl absolute w-60 h-fit gap-2w flex flex-col bg-[rgba(0,0,0,.4)] py-4 px-2 font-light backdrop-blur-md top-[calc(100%+0.5rem)] right-0 z-50'
      onSubmit={handleSubmit}
    >
      <input
        className="bg-transparent w-full"
        name="name"
        placeholder="Name"
        required
      />
      <input 
        className="bg-transparent"
       name="email" type="email" placeholder="Email" required />
      <textarea
        className="bg-transparent"
       name="message" placeholder="Message" required />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}
