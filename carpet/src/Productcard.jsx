

export default function ProductCard({ item, onClick }) {
  const phoneNumber = "256709184769"; // replace with your business number
  const message = `Hello, I'm interested in ${item.name} (${item.color}) (${item.img})`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="card">
      <img src={item.img} alt={item.name} onClick={() => onClick(item.img)} />
      <div className="card-body">
        <h3>{item.name}</h3>
        <p>Color: {item.color}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );


}
