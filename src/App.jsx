import "./App.css";
import UserTable from "./components/custom/UserTable";
import { columns } from "./components/custom/UserColumns";
import useFetch from "./hooks/useFetch";
import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import { useRef } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const userName = useRef(null);

  // Fetching data from the API
  const { error, loading, data, fetchData } = useFetch({
    url: "https://dummyjson.com/users",
  });

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="container">
      {/* HEADER */}
      <h1 className="text-5xl font-bold">DIGITAL JALEBI</h1>
      <h2 className="text-xl font-light mt-2 mb-10">
        Ayush Singh Kushwah - 500095575
      </h2>

      {/* SEARCH FUNCTIONALITY */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData(
            "https://dummyjson.com/users/search?q=" + userName.current.value
          );
        }}
        className="flex gap-5 mb-10"
      >
        <Input ref={userName} placeholder="Search user" />
        <Button
          style={{
            width: "100px",
          }}
        >
          Search
        </Button>
      </form>

      {/* USER DATA TABLE */}
      {loading ? (
        <div className="container flex justify-center align-middle">
          <Loading />
        </div>
      ) : (
        <UserTable columns={columns} data={data} />
      )}
    </div>
  );
}

export default App;
