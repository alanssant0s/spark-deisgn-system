import { MaintenancePage } from "@/components/errors";

const Maintenance = () => {
    return (
        <MaintenancePage
            title="Manutenção Programada"
            description="Estamos realizando melhorias em nossos sistemas para oferecer uma experiência ainda melhor."
            estimatedTime={{ hours: 2, minutes: 15, seconds: 30 }}
            progress={65}
            tasks={[
                {
                    task: "Atualização do banco de dados",
                    status: "completed",
                    time: "14:30"
                },
                {
                    task: "Migração de servidores",
                    status: "in-progress",
                    time: "15:45"
                },
                {
                    task: "Otimização de performance",
                    status: "pending",
                    time: "16:20"
                },
                {
                    task: "Testes de segurança",
                    status: "pending",
                    time: "17:00"
                }
            ]}
            improvements={[
                "Performance 40% mais rápida",
                "Novos recursos de gráficos",
                "Segurança aprimorada",
                "Interface mais intuitiva",
                "Melhor experiência mobile",
                "Correção de bugs reportados"
            ]}
            contactInfo={{
                twitter: "https://twitter.com/status",
                statusPage: "https://status.example.com",
                supportEmail: "support@example.com",
                notifications: "https://notifications.example.com"
            }}
        />
    );
};

export default Maintenance;
