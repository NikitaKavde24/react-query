import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const getData = () => {
  return axios.get("http://localhost:5000/superheroes");
};

const addData = (hero) => {
  return axios.post("http://localhost:5000/superheroes", hero);
};

const deleteData = (heroId) => {
  return axios.delete(`http://localhost:5000/superheroes/${heroId}`);
};



export const useList = () => {
  return useQuery({ queryKey: ["super-hero"], queryFn: getData });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["super-hero"] });
    },
  });
};

export const useDeleteSuperHeroData = (onSuccess) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      onSuccess()
      queryClient.invalidateQueries({ queryKey: ["super-hero"] });
    },
  });
};
