import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SortService from "../../service/sortService";
import { useDispatch } from "react-redux"; //La fonction dispatch est utilisée pour envoyer des actions à votre magasin Redux. Les actions sont des objets qui décrivent ce qui s'est passé dans l'application et comment l'état doit être mis à jour en conséquence. En utilisant useDispatch, vous pouvez appeler dispatch à partir de vos composants pour déclencher des actions Redux.
import { addSorts } from "../../magasin/sortSlice";

const weaponService = new SortService();

const GetSortsStartPack = () => {
  const [startQuery, setStartQuery] = useState(false);
  const onClick = () => setStartQuery(true);

  const { data } = useQuery({
    queryKey: ["incantations"],
    queryFn: () => SortService.getAllSorts(),
    enabled: startQuery,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addSorts(data.data));
    }
  }, [data]);

  return (
    <button type="button" onClick={onClick}>
      Start Query
    </button>
  );
};

export default GetSortsStartPack;