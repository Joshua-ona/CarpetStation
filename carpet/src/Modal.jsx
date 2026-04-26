export default function Modal({ image, close }) {
  return (
    <div className="modal" onClick={close}>
      <img src={image} alt="Full" />
    </div>
  );
}