export default function AboutUsCard(props) {
  return (
    <div 
      className="select-none TheGlassE TheGlassEFFHover w-full mx-auto p-4 "
    >
      <img className="TheWofIcon w-full h-auto max-w-xs mx-auto" src={props.imagesrc} alt="" />
      <h1 className="text-center text-lg md:text-xl mt-5 font-semibold">
        {props.title}
      </h1>
      <p className="text-center mt-3 text-sm md:text-base">
        {props.dis}
      </p>
    </div>
  );
}
