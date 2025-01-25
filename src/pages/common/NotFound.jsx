import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center bg-primary ">
      <Result
        status="404"
        title="404 - Not Found"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            className="login-form-button py-4"
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
