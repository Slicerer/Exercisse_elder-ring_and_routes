import { QueryClient, QueryClientProvider } from "react-query";
import GetSortStartPack from "./sort/components/GetSortsStartPack/GetSortsStartPack";
import Sort from "./sort/components/Sorts/Sorts";  //cest pas encore fait ex a suivre



function App() {


  return (
    <QueryClientProvider client={client}>
     <GetSortStartPack />
     <Sort />

</QueryClientProvider>
  );
}

export default App;
