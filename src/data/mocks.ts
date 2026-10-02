import type{Worker,Level,Skill,EventItem,Slot,Application,Allocation,Reserve,Manager,Permission,HistoryEntry,AuditEntry}from"../types";
export const levels:Level[]=[{id:"l1",name:"Monitora",active:true},{id:"l2",name:"Supervisora",active:true},{id:"l3",name:"Recepcionista",active:true}];
export const skills:Skill[]=["Recreação","Penteado","Animação","Organização","Liderança","Recepção"].map((name,i)=>({id:"s"+(i+1),name,active:true}));
export const workers:Worker[]=[
{id:"w1",name:"Ana Beatriz",phone:"(21) 98811-2201",levelId:"l1",skillIds:["s1","s3"],professionalStatus:"Ativa",accessStatus:"Ativo",avatar:"AB"},
{id:"w2",name:"Camila Rocha",phone:"(21) 99720-3312",levelId:"l2",skillIds:["s4","s5"],professionalStatus:"Ativa",accessStatus:"Ativo",avatar:"CR"},
{id:"w3",name:"Julia Martins",phone:"(21) 99144-8870",levelId:"l3",skillIds:["s6"],professionalStatus:"Ativa",accessStatus:"Pendente",avatar:"JM"},
{id:"w4",name:"Marina Costa",phone:"(21) 98902-1134",levelId:"l1",skillIds:["s1","s2"],professionalStatus:"Ativa",accessStatus:"Ativo",avatar:"MC"},
{id:"w5",name:"Larissa Alves",phone:"(21) 98231-4098",levelId:"l1",skillIds:["s3"],professionalStatus:"Inativa",accessStatus:"Bloqueado",avatar:"LA"}];
export const events:EventItem[]=[
{id:"e1",name:"Aniversário Helena 7 anos",date:"2026-10-10",arrival:"13:30",start:"14:00",end:"18:00",location:"Barra da Tijuca • RJ",status:"Planejado",info:"Festa infantil premium com recreação e oficina."},
{id:"e2",name:"Casamento Marina & Lucas",date:"2026-10-17",arrival:"16:00",start:"17:00",end:"23:00",location:"Joá • RJ",status:"Planejado",info:"Recepção e apoio de convidados."},
{id:"e3",name:"Confraternização Kids",date:"2026-10-24",arrival:"09:00",start:"09:30",end:"13:30",location:"Recreio • RJ",status:"Planejado",info:"Evento corporativo familiar."}];
export const slots:Slot[]=[
{id:"v1",eventId:"e1",name:"Recreação infantil",quantity:3,filled:2,type:"normal",levelId:"l1",skillIds:["s1"],skillMatch:"any"},
{id:"v2",eventId:"e1",name:"Supervisão",quantity:1,filled:1,type:"normal",levelId:"l2",skillIds:["s5"],skillMatch:"any"},
{id:"v3",eventId:"e1",name:"Sobreaviso recreação",quantity:1,filled:0,type:"reserve",levelId:"l1",skillIds:["s1","s3"],skillMatch:"any"},
{id:"v4",eventId:"e2",name:"Recepção",quantity:2,filled:1,type:"normal",levelId:"l3",skillIds:["s6"],skillMatch:"all"},
{id:"v5",eventId:"e3",name:"Recreação",quantity:4,filled:2,type:"normal",skillIds:["s1"],skillMatch:"any"}];
export const applications:Application[]=[
{id:"a1",workerId:"w1",slotId:"v1",eventId:"e1",date:"2026-10-10",status:"Pendente"},
{id:"a2",workerId:"w4",slotId:"v3",eventId:"e1",date:"2026-10-10",status:"Pendente"},
{id:"a3",workerId:"w3",slotId:"v4",eventId:"e2",date:"2026-10-17",status:"Aprovada"}];
export const allocations:Allocation[]=[
{id:"al1",eventId:"e1",slotId:"v1",workerId:"w4",date:"2026-10-10",status:"Confirmada",fromReserve:false},
{id:"al2",eventId:"e1",slotId:"v2",workerId:"w2",date:"2026-10-10",status:"Confirmada",fromReserve:false},
{id:"al3",eventId:"e2",slotId:"v4",workerId:"w3",date:"2026-10-17",status:"Conflito",fromReserve:false}];
export const reserves:Reserve[]=[
{id:"r1",eventId:"e1",slotId:"v3",workerId:"w1",status:"standby",createdAt:"2026-10-01 11:20"}];
export const permissions:Permission[]=[
["Ver eventos","Eventos"],["Criar eventos","Eventos"],["Editar eventos","Eventos"],["Cancelar eventos","Eventos"],["Ver funcionárias","Equipe"],["Criar/editar funcionárias","Equipe"],["Criar/editar vagas","Vagas"],["Ver candidaturas","Operação"],["Aprovar/rejeitar","Operação"],["Alocar funcionárias","Operação"],["Remover funcionárias","Operação"],["Ver histórico","Administrativo"],["Ver informações administrativas","Administrativo"]].map((x,i)=>({id:"p"+i,label:x[0],group:x[1]}));
export const managers:Manager[]=[{id:"m1",name:"Beatriz Lima",status:"Ativo",lastAccess:"Hoje, 10:42",permissionIds:permissions.slice(0,10).map(p=>p.id)},{id:"m2",name:"Renata Souza",status:"Ativo",lastAccess:"Ontem, 17:18",permissionIds:permissions.slice(0,7).map(p=>p.id)}];
export const history:HistoryEntry[]=[{id:"h1",date:"02/10/2026 10:42",action:"Candidatura recebida",entity:"Aniversário Helena",responsible:"Sistema mock",description:"Ana Beatriz demonstrou interesse em Recreação infantil."},{id:"h2",date:"01/10/2026 15:20",action:"Alocação criada",entity:"Aniversário Helena",responsible:"Beatriz Lima",description:"Marina Costa alocada para Recreação infantil."}];
export const audit:AuditEntry[]=[{id:"au1",user:"Beatriz Lima",role:"Gerente",action:"EDIT",entity:"Evento e1",date:"02/10/2026 10:40",change:"Horário de chegada alterado de 13:00 para 13:30."},{id:"au2",user:"Administrador",role:"Admin",action:"CREATE",entity:"Vaga v3",date:"01/10/2026 11:20",change:"Vaga de sobreaviso criada."}];