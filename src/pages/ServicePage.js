import { useParams } from "react-router-dom";

const ServicePage = () => {
  const { id } = useParams();

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl">Service: {id}</h1>
    </div>
  );
};

export default ServicePage;
