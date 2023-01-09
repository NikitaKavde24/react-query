import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useHeroDetails = (heroId) => {
  const getHeroDetails = (heroId) => {
    return axios.get(`http://localhost:5000/superheroes/${heroId}`);
  };
  return useQuery(["super-hero", heroId], () => getHeroDetails(heroId));
};
