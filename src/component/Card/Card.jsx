import "./Card.css";
function Card({ service, roundCard }) {
  console.log(roundCard);
  return (
    <>
      <section
        className={`wow animate__animated animate__zoomIn animate__slow  p-4 rounded-lg 
        ${roundCard ? "" : "cardRound"} 
         flex flex-col m-4 justify-between`}>
        <div className=" flex justify-center">
          <img
            src={service.img}
            alt="tech-support"
            className={`w-[100px] 
            ${roundCard ? " rounded-full w-[150px] mb-3" : ""}`}
          />
        </div>
        <div className=" flex flex-col items-center">
          {service.name && (
            <h1 className="text-2xl mt-2 mb-3 capitalize">{service.name}</h1>
          )}
          <p className=" text-gray-300 pt-3">{service.discription} </p>
        </div>
      </section>
    </>
  );
}

export default Card;
