export default function ContactForm() {
  return (
    <form method="POST" action="https://formspree.io/f/yourformid">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
}
