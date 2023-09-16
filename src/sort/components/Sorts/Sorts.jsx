import { useSelector } from "react-redux";
import { sortSelector } from "./magasin/sortSelector";
import SortCard from "../SortCard/SortCard";

const Sorts = () => {
    const sorts = useSelector(sortSelector);

    return (
        <div className="grid grid-cols-4">
            {sorts.map((sort) => (
        <SortCard
          name={sort.name}
          image={sort.image}
          description={sort.description}
          effect={sort.effect}
          key={sort.id}
        />
      ))}
        </div>
    );
};

export default Sorts;

