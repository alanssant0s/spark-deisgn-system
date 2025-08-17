import { SaasLayout } from "@/components/saas/SaasLayout";
import { StatusBadge } from "@/components/saas/StatusBadge";
import { GradientButton } from "@/components/saas/GradientButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus,
  Search,
  Filter,
  Calendar,
  Users,
  Star,
  MoreHorizontal,
  FolderOpen,
  Clock,
  Target,
  TrendingUp
} from "lucide-react";

const projects = [
  {
    id: "1",
    name: "Sistema de E-commerce",
    description: "Plataforma completa de vendas online com integração de pagamentos",
    status: "active",
    progress: 85,
    priority: "high",
    dueDate: "2024-02-15",
    team: [
      { name: "Ana Silva", avatar: "/avatars/01.png" },
      { name: "João Santos", avatar: "/avatars/02.png" },
      { name: "Maria Costa", avatar: "/avatars/03.png" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    budget: "R$ 45.000",
    client: "TechCorp"
  },
  {
    id: "2",
    name: "App Mobile de Delivery",
    description: "Aplicativo de entrega com rastreamento em tempo real",
    status: "pending",
    progress: 42,
    priority: "medium",
    dueDate: "2024-03-20",
    team: [
      { name: "Pedro Lima", avatar: "/avatars/04.png" },
      { name: "Carlos Dias", avatar: "/avatars/05.png" },
    ],
    technologies: ["React Native", "Firebase", "Maps API"],
    budget: "R$ 32.000",
    client: "FoodDelivery SA"
  },
  {
    id: "3",
    name: "Dashboard Analytics",
    description: "Painel de controle com métricas avançadas e relatórios",
    status: "success",
    progress: 100,
    priority: "low",
    dueDate: "2024-01-30",
    team: [
      { name: "Laura Mendes", avatar: "/avatars/06.png" },
      { name: "Bruno Ferreira", avatar: "/avatars/07.png" },
      { name: "Carla Rodrigues", avatar: "/avatars/08.png" },
    ],
    technologies: ["Vue.js", "D3.js", "Python"],
    budget: "R$ 28.000",
    client: "DataInsights Ltd"
  },
  {
    id: "4",
    name: "Sistema CRM",
    description: "Gerenciamento de relacionamento com clientes",
    status: "error",
    progress: 15,
    priority: "high",
    dueDate: "2024-04-10",
    team: [
      { name: "Rafael Santos", avatar: "/avatars/09.png" },
    ],
    technologies: ["Angular", "C#", "SQL Server"],
    budget: "R$ 55.000",
    client: "SalesForce Plus"
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "destructive";
    case "medium": return "secondary";
    case "low": return "outline";
    default: return "outline";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "active": return "Em Andamento";
    case "pending": return "Pendente";
    case "success": return "Concluído";
    case "error": return "Atrasado";
    default: return status;
  }
};

const ProjectsPage = () => {
  return (
    <SaasLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-foreground">Projetos</h1>
            <p className="text-muted-foreground">
              Gerencie todos os seus projetos em um só lugar
            </p>
          </div>
          <GradientButton variant="primary" icon={Plus}>
            Novo Projeto
          </GradientButton>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar projetos..."
              className="pl-10"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Status</SelectItem>
              <SelectItem value="active">Em Andamento</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="success">Concluído</SelectItem>
              <SelectItem value="error">Atrasado</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-priority">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Prioridade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-priority">Todas</SelectItem>
              <SelectItem value="high">Alta</SelectItem>
              <SelectItem value="medium">Média</SelectItem>
              <SelectItem value="low">Baixa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Projects Tabs */}
        <Tabs defaultValue="grid" className="w-full">
          <TabsList>
            <TabsTrigger value="grid">Grade</TabsTrigger>
            <TabsTrigger value="list">Lista</TabsTrigger>
            <TabsTrigger value="kanban">Kanban</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg line-clamp-1">{project.name}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Status and Priority */}
                    <div className="flex items-center justify-between">
                      <StatusBadge 
                        status={project.status as "active" | "inactive" | "pending" | "error" | "success"} 
                        text={getStatusText(project.status)}
                      />
                      <Badge variant={getPriorityColor(project.priority) as any}>
                        {project.priority === "high" ? "Alta" : project.priority === "medium" ? "Média" : "Baixa"}
                      </Badge>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} />
                    </div>

                    {/* Team */}
                    <div className="space-y-2">
                      <span className="text-sm text-muted-foreground">Equipe</span>
                      <div className="flex items-center space-x-2">
                        <div className="flex -space-x-2">
                          {project.team.slice(0, 3).map((member, index) => (
                            <Avatar key={index} className="h-7 w-7 border-2 border-background">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback className="text-xs">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {project.team.length > 3 && (
                            <div className="h-7 w-7 bg-muted border-2 border-background rounded-full flex items-center justify-center text-xs font-medium">
                              +{project.team.length - 3}
                            </div>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {project.team.length} membro{project.team.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Footer Info */}
                    <div className="flex items-center justify-between pt-2 border-t text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {new Date(project.dueDate).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center">
                        <Target className="mr-1 h-3 w-3" />
                        {project.budget}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            <div className="space-y-4">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                      <div className="lg:col-span-4 space-y-1">
                        <h3 className="font-semibold">{project.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {project.description}
                        </p>
                        <p className="text-xs text-muted-foreground">{project.client}</p>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <StatusBadge 
                          status={project.status as "active" | "inactive" | "pending" | "error" | "success"} 
                          text={getStatusText(project.status)}
                        />
                      </div>
                      
                      <div className="lg:col-span-2">
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progresso</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <div className="flex -space-x-2">
                          {project.team.slice(0, 3).map((member, index) => (
                            <Avatar key={index} className="h-8 w-8 border-2 border-background">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback className="text-xs">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {project.team.length > 3 && (
                            <div className="h-8 w-8 bg-muted border-2 border-background rounded-full flex items-center justify-center text-xs font-medium">
                              +{project.team.length - 3}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2 flex justify-end">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kanban" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["active", "pending", "success", "error"].map((status) => (
                <div key={status} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      {getStatusText(status)}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {projects.filter(p => p.status === status).length}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {projects
                      .filter(project => project.status === status)
                      .map((project) => (
                        <Card key={project.id} className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardContent className="p-4 space-y-3">
                            <div className="space-y-1">
                              <h4 className="font-medium text-sm line-clamp-1">{project.name}</h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {project.description}
                              </p>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className="text-muted-foreground">Progresso</span>
                                <span className="font-medium">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-1" />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex -space-x-1">
                                {project.team.slice(0, 2).map((member, index) => (
                                  <Avatar key={index} className="h-6 w-6 border border-background">
                                    <AvatarImage src={member.avatar} alt={member.name} />
                                    <AvatarFallback className="text-xs">
                                      {member.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                ))}
                                {project.team.length > 2 && (
                                  <div className="h-6 w-6 bg-muted border border-background rounded-full flex items-center justify-center text-xs font-medium">
                                    +{project.team.length - 2}
                                  </div>
                                )}
                              </div>
                              
                              <Badge variant={getPriorityColor(project.priority) as any} className="text-xs">
                                {project.priority === "high" ? "Alta" : project.priority === "medium" ? "Média" : "Baixa"}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SaasLayout>
  );
};

export default ProjectsPage;