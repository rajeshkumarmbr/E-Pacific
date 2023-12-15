function Card({ service, roundCard }) {
  return (
    <>
      <section className="p-4 rounded-lg bg-teal-900 flex flex-col m-4 justify-between">
        <div className="text-center">
          <img
            src={service.img}
            alt="tech-support"
            className={`w-[100px] ${roundCard ? " rounded-full" : ""}`}
          />
        </div>
        <div className=" flex flex-col items-center">
          {service.name && (
            <h1 className="text-2xl mt-2 mb-3 capitalize">{service.name}</h1>
          )}
          <p className=" text-gray-300">{service.discription} </p>
        </div>
      </section>
    </>
  );
}

export default Card;
