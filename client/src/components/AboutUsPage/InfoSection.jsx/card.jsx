export default function Card(props) {
    const TheClass = `bg-[#0e2130] TheCardOfAboutUS p-3 rounded-md ${props.className}`; // استخدم const لتعريف المتغير
    return (
      <div className={TheClass}>
        {props.children}
      </div>
    );
  }
  