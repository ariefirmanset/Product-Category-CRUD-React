export default function Button({ title, Class, onClick, ...props }) {
  return (
    <button className={Class} onClick={onClick} {...props}>
      {title}
    </button>
  );
}
