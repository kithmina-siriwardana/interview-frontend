import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center bg-primary ">
      <Result
        status="403"
        title="403 - Unauthorized"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button
            type="primary"
            className="bg-secondary py-4"
            onClick={() => navigate("/")}
          >
            Go Back Home
          </Button>
        }
      />
    </div>
  );
};

export default UnauthorizedPage;
