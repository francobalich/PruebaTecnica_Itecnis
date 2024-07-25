import { useParams } from "react-router-dom";

export const Buy = () => {
  const { id } = useParams();
  return (
    <div>Buy {id}</div>
  )
}
