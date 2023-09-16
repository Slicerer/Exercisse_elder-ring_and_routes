const SortCard = ({name, image, description, effects}) => {
 return (
    <div className="flex flex-col gap-4 w-64">
        <img
         src={name}
          alt={image}
          className="w-10/12 mx-auto rounded-lg"
          loading="lazy"
           />
           <h2 className="text-3xl">{name} </h2>
           <p>{description}</p>
           <p>{effects}</p>
    </div>
 );
};
export default SortCard;

          