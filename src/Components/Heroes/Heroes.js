import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddSuperHeroData, useList } from "../../Hooks/useList";

export function Heroes() {
  const [name, setName] = useState("");
  const [character, setCharacter] = useState("");
  // With custom hook
  const { data, isError, isLoading, error } = useList();
  //For adding super hero. post request
  const { mutate: addHero } = useAddSuperHeroData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error?.message}...</h2>;
  }

  const handleAddData = () => {
    const hero = { name, character };
    addHero(hero);
  };

  return (
    <div>
      <h1>Languages</h1>
      <h5>Add Data</h5>
      <div>
        <div>
          Add character:
          <input
            type="text"
            value={character}
            onChange={(e) => {
              setCharacter(e.target.value);
            }}
          />
        </div>
        <div>
          Add name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button onClick={handleAddData}>Add data</button>
      </div>
      <h5>List of hero</h5>
      <div>
        {data?.data.map((item,i) => {
          return (
            <div key={i}>
              <div>
                {item.id}:<Link to={`/Hero-details/${item.id}`}>{item.name}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
