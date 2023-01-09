import { useNavigate, useParams } from "react-router-dom";
import { useHeroDetails } from "../../Hooks/useHeroDetails";
import { useDeleteSuperHeroData } from "../../Hooks/useList";

export function HeroDetails() {
  const navigateTo = useNavigate();
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useHeroDetails(heroId);

  const onSuccess = () => {
    navigateTo("/");
  };

  //For deleting super hero delete request
  const { mutate: deleteHero} = useDeleteSuperHeroData(onSuccess );
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const handleDelete = (heroId) => {
    deleteHero(heroId);
  };

 
  return (
    <>
      {" "}
      <div>
        <h2>Hero Details</h2>
        <div>Character:{data?.data.character}</div>
        <div>Name: {data?.data.name}</div>
        <button
          onClick={() => {
            handleDelete(data?.data.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}
