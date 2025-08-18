import { BaseErrorPage, errorConfigs } from "@/components/errors";

const Unauthorized = () => {
    const errorPageProps = errorConfigs.unauthorized();

    return <BaseErrorPage {...errorPageProps} />;
};

export default Unauthorized;
