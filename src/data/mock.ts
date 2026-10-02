import type { MockDatabase, Permission } from "../types";

export const permissions: Permission[] = [
  {id:"view-events",label:"Visualizar eventos",group:"Eventos"},
  {id:"create-events",label:"Criar eventos",group:"Eventos"},
  {id:"edit-events",label:"Editar eventos",group:"Eventos"},
  {id:"cancel-events",label:"Cancelar eventos",group:"Eventos"},
  {id:"view-employees",label:"Visualizar funcionárias",group:"Funcionárias"},
  {id:"edit-employees",label:"Criar/editar funcionárias",group:"Funcionárias"},
  {id:"edit-vacancies",label:"Criar/editar vagas",group:"Vagas"},
  {id:"view-applications",label:"Visualizar candidaturas",group:"Candidaturas"},
  {id:"review-applications",label:"Aprovar/rejeitar candidaturas",group:"Candidaturas"},
  {id:"allocate",label:"Alocar funcionárias",group:"Alocações"},
  {id:"remove-allocation",label:"Remover funcionárias",group:"Alocações"},
  {id:"view-history",label:"Visualizar histórico",group:"Administração"},
  {id:"view-admin",label:"Visualizar informações administrativas",group:"Administração"},
];

export const mockDb: MockDatabase = {
  levels:[
    {id:"l1",name:"Monitora",active:true},{id:"l2",name:"Supervisora",active:true},
    {id:"l3",name:"Recepcionista",active:true}
  ],
  skills:[
    {id:"s1",name:"Recreação",active:true},{id:"s2",name:"Penteado",active:true},
    {id:"s3",name:"Animação",active:true},{id:"s4",name:"Organização",active:true},
    {id:"s5",name:"Liderança",active:true},{id:"s6",name:"Recepção",active:true}
  ],
  employees:[
    {id:"e1",name:"Ana Martins",phone:"(11) 98888-1201",levelId:"l1",skillIds:["s1","s3"],professionalStatus:"Ativa",accessStatus:"Ativo",avatar:"AM"},
    {id:"e2",name:"Carla Souza",phone:"(11) 97777-3042",levelId:"l2",skillIds:["s1","s4","s5"],professionalStatus:"Ativa",accessStatus:"Ativo",avatar:"CS"},
    {id:"e3",name:"Juliana Costa",phone:"(11) 96666-2188",levelId:"l3",skillIds:["s6"],professionalStatus:"Ativa",accessStatus:"Ativo",avatar:"JC"},
    {id:"e4",name:"Mariana Lima",phone:"(11) 95555-8877",levelId:"l1",skillIds:["s2","s3"],professionalStatus:"Ativa",accessStatus:"Pendente",avatar:"ML"},
    {id:"e5",name:"Beatriz Rocha",phone:"(11) 94444-3210",levelId:"l1",skillIds:["s1","s4"],professionalStatus:"Inativa",accessStatus:"Bloqueado",avatar:"BR"}
  ],
  events:[
    {id:"ev1",name:"Festa Infantil Encanto",date:"2026-10-10",arrival:"08:00",start:"09:00",end:"13:00",location:"Espaço Villa, São Paulo",status:"Planejado",vacancyCount:6,filledCount:4,info:"Evento infantil com atividades recreativas."},
    {id:"ev2",name:"Congresso Conecta",date:"2026-10-15",arrival:"17:00",start:"18:00",end:"22:30",location:"Centro de Convenções",status:"Planejado",vacancyCount:4,filledCount:2,info:"Recepção e apoio aos participantes."},
    {id:"ev3",name:"Workshop Criativo",date:"2026-10-22",arrival:"13:30",start:"14:30",end:"19:00",location:"Casa Aurora",status:"Planejado",vacancyCount:3,filledCount:3,info:"Workshop com oficinas e dinâmica de grupo."},
    {id:"ev4",name:"Feira Kids",date:"2026-09-28",arrival:"07:30",start:"08:30",end:"16:00",location:"Pavilhão Norte",status:"Concluído",vacancyCount:8,filledCount:8,info:"Feira infantil."}
  ],
  vacancies:[
    {id:"v1",eventId:"ev1",name:"Monitora recreação",quantity:3,filled:2,type:"normal",levelId:"l1",skillIds:["s1","s3"],skillMatch:"any"},
    {id:"v2",eventId:"ev1",name:"Supervisora",quantity:1,filled:1,type:"normal",levelId:"l2",skillIds:["s5"],skillMatch:"all"},
    {id:"v3",eventId:"ev1",name:"Reserva recreação",quantity:2,filled:1,type:"reserve",levelId:"l1",skillIds:["s1"],skillMatch:"any"},
    {id:"v4",eventId:"ev2",name:"Recepção",quantity:2,filled:1,type:"normal",levelId:"l3",skillIds:["s6"],skillMatch:"all"},
    {id:"v5",eventId:"ev2",name:"Apoio geral",quantity:2,filled:1,type:"normal",skillIds:[],},
    {id:"v6",eventId:"ev3",name:"Animação",quantity:2,filled:2,type:"normal",levelId:"l1",skillIds:["s3"],skillMatch:"all"},
  ],
  applications:[
    {id:"a1",employeeId:"e1",vacancyId:"v1",eventId:"ev1",date:"2026-09-25",status:"Pendente"},
    {id:"a2",employeeId:"e4",vacancyId:"v1",eventId:"ev1",date:"2026-09-26",status:"Pendente"},
    {id:"a3",employeeId:"e3",vacancyId:"v4",eventId:"ev2",date:"2026-09-27",status:"Aprovada"},
    {id:"a4",employeeId:"e2",vacancyId:"v5",eventId:"ev2",date:"2026-09-28",status:"Rejeitada"},
  ],
  allocations:[
    {id:"al1",eventId:"ev1",vacancyId:"v1",employeeId:"e2",date:"2026-09-24",status:"Confirmada",fromReserve:false},
    {id:"al2",eventId:"ev1",vacancyId:"v2",employeeId:"e2",date:"2026-09-24",status:"Conflito",fromReserve:false},
    {id:"al3",eventId:"ev2",vacancyId:"v4",employeeId:"e3",date:"2026-09-27",status:"Confirmada",fromReserve:false},
    {id:"al4",eventId:"ev1",vacancyId:"v3",employeeId:"e4",date:"2026-09-26",status:"Confirmada",fromReserve:true},
  ],
  reserves:[
    {id:"r1",eventId:"ev1",vacancyId:"v3",employeeId:"e4",status:"standby",createdAt:"2026-09-26"},
    {id:"r2",eventId:"ev2",vacancyId:"v5",employeeId:"e1",status:"triggered",createdAt:"2026-09-27"}
  ],
  managers:[
    {id:"m1",name:"Maria Oliveira",status:"Ativo",lastAccess:"Hoje, 09:14",permissionIds:["view-events","create-events","edit-events","view-employees","edit-employees","edit-vacancies","view-applications","review-applications","allocate","view-history"]},
    {id:"m2",name:"João Mendes",status:"Ativo",lastAccess:"Ontem, 18:42",permissionIds:["view-events","view-employees","view-applications","allocate"]}
  ],
  history:[
    {id:"h1",date:"2026-09-28 09:12",action:"Criação",entity:"Evento",responsible:"João",description:"João criou o evento Festa Infantil Encanto."},
    {id:"h2",date:"2026-09-28 10:04",action:"Aprovação",entity:"Candidatura",responsible:"Maria",description:"Maria aprovou Ana para a vaga Monitora."},
    {id:"h3",date:"2026-09-28 10:32",action:"Reserva",entity:"Alocação",responsible:"Maria",description:"Maria vinculou Carla como reserva."},
    {id:"h4",date:"2026-09-29 08:45",action:"Acionamento",entity:"Reserva",responsible:"João",description:"João acionou Carla da reserva."},
  ],
  audit:[
    {id:"au1",user:"Maria Oliveira",role:"Gerente",action:"UPDATE",entity:"application:a1",date:"2026-09-28 10:04",change:"status: Pendente → Aprovada"},
    {id:"au2",user:"João Mendes",role:"Gerente",action:"CREATE",entity:"event:ev1",date:"2026-09-28 09:12",change:"Novo registro criado"},
    {id:"au3",user:"Administrador",role:"Administrador",action:"UPDATE",entity:"manager:m2",date:"2026-09-27 16:20",change:"Permissão allocate adicionada"},
  ]
};
