import { SaasLayout } from "@/components/saas/SaasLayout";
import { StatusBadge } from "@/components/saas/StatusBadge";
import { GradientButton } from "@/components/saas/GradientButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus,
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  Users,
  Star,
  MoreHorizontal,
  MessageSquare,
  Video,
  Award,
  Target,
  TrendingUp,
  Clock
} from "lucide-react";

const teamMembers = [
  {
    id: "1",
    name: "Ana Silva",
    role: "Product Manager",
    department: "Produto",
    status: "active",
    avatar: "/avatars/01.png",
    email: "ana.silva@empresa.com",
    phone: "+55 11 99999-0001",
    location: "São Paulo, SP",
    joinDate: "2022-03-15",
    skills: ["Product Strategy", "Agile", "Data Analysis", "UX Research"],
    projects: 8,
    tasksCompleted: 234,
    rating: 4.9,
    salary: "R$ 12.000",
    manager: "Carlos Oliveira"
  },
  {
    id: "2",
    name: "João Santos",
    role: "Senior Developer",
    department: "Tecnologia",
    status: "active",
    avatar: "/avatars/02.png",
    email: "joao.santos@empresa.com",
    phone: "+55 11 99999-0002",
    location: "Rio de Janeiro, RJ",
    joinDate: "2021-07-22",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    projects: 12,
    tasksCompleted: 456,
    rating: 4.8,
    salary: "R$ 15.000",
    manager: "Maria Costa"
  },
  {
    id: "3",
    name: "Maria Costa",
    role: "Tech Lead",
    department: "Tecnologia",
    status: "active",
    avatar: "/avatars/03.png",
    email: "maria.costa@empresa.com",
    phone: "+55 11 99999-0003",
    location: "Belo Horizonte, MG",
    joinDate: "2020-01-10",
    skills: ["Team Leadership", "Architecture", "Mentoring", "DevOps"],
    projects: 15,
    tasksCompleted: 678,
    rating: 4.9,
    salary: "R$ 18.000",
    manager: "Carlos Oliveira"
  },
  {
    id: "4",
    name: "Pedro Lima",
    role: "UX Designer",
    department: "Design",
    status: "pending",
    avatar: "/avatars/04.png",
    email: "pedro.lima@empresa.com",
    phone: "+55 11 99999-0004",
    location: "Porto Alegre, RS",
    joinDate: "2023-05-18",
    skills: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
    projects: 4,
    tasksCompleted: 89,
    rating: 4.6,
    salary: "R$ 8.500",
    manager: "Ana Silva"
  },
  {
    id: "5",
    name: "Carlos Oliveira",
    role: "Engineering Manager",
    department: "Tecnologia",
    status: "active",
    avatar: "/avatars/05.png",
    email: "carlos.oliveira@empresa.com",
    phone: "+55 11 99999-0005",
    location: "São Paulo, SP",
    joinDate: "2019-08-05",
    skills: ["Team Management", "Strategy", "Hiring", "Process Improvement"],
    projects: 20,
    tasksCompleted: 892,
    rating: 4.9,
    salary: "R$ 22.000",
    manager: "CEO"
  },
  {
    id: "6",
    name: "Laura Mendes",
    role: "Marketing Specialist",
    department: "Marketing",
    status: "inactive",
    avatar: "/avatars/06.png",
    email: "laura.mendes@empresa.com",
    phone: "+55 11 99999-0006",
    location: "Salvador, BA",
    joinDate: "2022-11-12",
    skills: ["Digital Marketing", "Content Strategy", "SEO", "Analytics"],
    projects: 6,
    tasksCompleted: 123,
    rating: 4.4,
    salary: "R$ 7.800",
    manager: "Ana Silva"
  },
];

const departments = [
  { name: "Tecnologia", count: 3, color: "hsl(var(--primary))" },
  { name: "Produto", count: 1, color: "hsl(var(--secondary))" },
  { name: "Design", count: 1, color: "hsl(var(--accent))" },
  { name: "Marketing", count: 1, color: "hsl(var(--muted))" },
];

const getStatusText = (status: string) => {
  switch (status) {
    case "active": return "Ativo";
    case "inactive": return "Inativo";
    case "pending": return "Pendente";
    default: return status;
  }
};

const getRoleLevel = (role: string) => {
  if (role.includes("Manager") || role.includes("Lead")) return "leadership";
  if (role.includes("Senior")) return "senior";
  if (role.includes("Junior")) return "junior";
  return "mid";
};

const TeamPage = () => {
  return (
    <SaasLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-foreground">Equipe</h1>
            <p className="text-muted-foreground">
              Gerencie todos os membros da sua equipe em um só lugar
            </p>
          </div>
          <GradientButton variant="primary" icon={Plus}>
            Adicionar Membro
          </GradientButton>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total de Membros</p>
                  <p className="text-2xl font-bold">{teamMembers.length}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Membros Ativos</p>
                  <p className="text-2xl font-bold">
                    {teamMembers.filter(m => m.status === "active").length}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Projetos Ativos</p>
                  <p className="text-2xl font-bold">
                    {teamMembers.reduce((total, member) => total + member.projects, 0)}
                  </p>
                </div>
                <Target className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Rating Médio</p>
                  <p className="text-2xl font-bold">
                    {(teamMembers.reduce((total, member) => total + member.rating, 0) / teamMembers.length).toFixed(1)}
                  </p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar membros da equipe..."
              className="pl-10"
            />
          </div>
          <Select defaultValue="all-departments">
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Departamento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-departments">Todos os Departamentos</SelectItem>
              {departments.map((dept) => (
                <SelectItem key={dept.name} value={dept.name.toLowerCase()}>
                  {dept.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="all-status">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">Todos os Status</SelectItem>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="inactive">Inativo</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Team Members */}
        <Tabs defaultValue="grid" className="w-full">
          <TabsList>
            <TabsTrigger value="grid">Grade</TabsTrigger>
            <TabsTrigger value="list">Lista</TabsTrigger>
            <TabsTrigger value="departments">Departamentos</TabsTrigger>
            <TabsTrigger value="hierarchy">Hierarquia</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="group hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Status and Department */}
                    <div className="flex items-center justify-between">
                      <StatusBadge 
                        status={member.status as "active" | "inactive" | "pending" | "error" | "success"} 
                        text={getStatusText(member.status)}
                      />
                      <Badge variant="outline">{member.department}</Badge>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Mail className="mr-2 h-3 w-3" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Phone className="mr-2 h-3 w-3" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="font-medium text-sm">{member.projects}</div>
                        <div className="text-xs text-muted-foreground">Projetos</div>
                      </div>
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="font-medium text-sm">{member.tasksCompleted}</div>
                        <div className="text-xs text-muted-foreground">Tasks</div>
                      </div>
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="font-medium text-sm flex items-center justify-center">
                          <Star className="h-3 w-3 mr-1 text-yellow-500" />
                          {member.rating}
                        </div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Habilidades</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{member.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Video className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">
                        Ver Perfil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    <div className="lg:col-span-4 flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-xs text-muted-foreground">{member.email}</p>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <Badge variant="outline">{member.department}</Badge>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <StatusBadge 
                        status={member.status as "active" | "inactive" | "pending" | "error" | "success"} 
                        text={getStatusText(member.status)}
                      />
                    </div>
                    
                    <div className="lg:col-span-2 text-sm">
                      <div>{member.projects} projetos</div>
                      <div className="text-muted-foreground">{member.tasksCompleted} tasks</div>
                    </div>
                    
                    <div className="lg:col-span-1 flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      <span className="font-medium">{member.rating}</span>
                    </div>
                    
                    <div className="lg:col-span-1 flex justify-end">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((department) => (
                <Card key={department.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {department.name}
                      <Badge variant="secondary">{department.count}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {teamMembers
                      .filter(member => member.department === department.name)
                      .map((member) => (
                        <div key={member.id} className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback className="text-xs">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{member.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                          </div>
                          <StatusBadge 
                            status={member.status as "active" | "inactive" | "pending" | "error" | "success"} 
                          />
                        </div>
                      ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hierarchy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hierarquia Organizacional</CardTitle>
                <CardDescription>
                  Estrutura hierárquica da equipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* CEO Level */}
                  <div className="text-center">
                    {teamMembers
                      .filter(member => member.manager === "CEO")
                      .map((member) => (
                        <div key={member.id} className="inline-block">
                          <Card className="w-64 mx-auto">
                            <CardContent className="p-4 text-center">
                              <Avatar className="h-16 w-16 mx-auto mb-3">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <h3 className="font-semibold">{member.name}</h3>
                              <p className="text-sm text-muted-foreground">{member.role}</p>
                              <Badge variant="outline" className="mt-2">{member.department}</Badge>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                  </div>

                  {/* Direct Reports */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers
                      .filter(member => member.manager === "Carlos Oliveira" && member.name !== "Carlos Oliveira")
                      .map((member) => (
                        <div key={member.id}>
                          <Card>
                            <CardContent className="p-4 text-center">
                              <Avatar className="h-12 w-12 mx-auto mb-3">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <h3 className="font-semibold text-sm">{member.name}</h3>
                              <p className="text-xs text-muted-foreground">{member.role}</p>
                              <Badge variant="secondary" className="mt-2 text-xs">{member.department}</Badge>
                            </CardContent>
                          </Card>

                          {/* Team Members under this manager */}
                          <div className="mt-4 space-y-2">
                            {teamMembers
                              .filter(subordinate => subordinate.manager === member.name)
                              .map((subordinate) => (
                                <Card key={subordinate.id} className="ml-4">
                                  <CardContent className="p-3">
                                    <div className="flex items-center space-x-2">
                                      <Avatar className="h-8 w-8">
                                        <AvatarImage src={subordinate.avatar} alt={subordinate.name} />
                                        <AvatarFallback className="text-xs">
                                          {subordinate.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-medium text-sm truncate">{subordinate.name}</p>
                                        <p className="text-xs text-muted-foreground truncate">{subordinate.role}</p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SaasLayout>
  );
};

export default TeamPage;