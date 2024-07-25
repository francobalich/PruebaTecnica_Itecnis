import { useParams } from "react-router-dom";
import { DetailsData } from "../components/DetailsData";

export const Buy = () => {
  const { id } = useParams();
  return (
    <>
      <DetailsData />
      <div>Buy {id}</div>
    </>
  )
}
