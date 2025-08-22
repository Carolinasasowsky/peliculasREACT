import { Result, Button }  from "antd";

const Error404 = () => {
  return (
    <Result
        status="404"
        title="404"
        subTitle="Lo sentimos, la página que está buscando no existe"
        extra={<Button type="primary"
        href="./home">Volver a Home</Button>
        }
    />
  )
};

export default Error404;
