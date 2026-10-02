export type Role = "admin" | "manager" | "employee";
export type Status = "active" | "inactive" | "pending" | "approved" | "rejected";
export type VacancyType = "normal" | "reserve";
export type ReserveStatus = "standby" | "triggered" | "allocated" | "released";
export type SkillMatch = "all" | "any";

export interface Skill { id:string; name:string; active:boolean }
export interface Level { id:string; name:string; active:boolean }
export interface Employee {
  id:string; name:string; phone:string; levelId:string; skillIds:string[];
  professionalStatus:"Ativa"|"Inativa"; accessStatus:"Ativo"|"Pendente"|"Bloqueado";
  avatar:string;
}
export interface EventItem {
  id:string; name:string; date:string; arrival:string; start:string; end:string;
  location:string; status:"Planejado"|"Em andamento"|"Concluído"|"Cancelado";
  vacancyCount:number; filledCount:number; info:string;
}
export interface Vacancy {
  id:string; eventId:string; name:string; quantity:number; filled:number;
  type:VacancyType; levelId?:string; skillIds:string[]; skillMatch?:SkillMatch;
}
export interface Application {
  id:string; employeeId:string; vacancyId:string; eventId:string; date:string;
  status:"Pendente"|"Aprovada"|"Rejeitada";
}
export interface Allocation {
  id:string; eventId:string; vacancyId:string; employeeId:string; date:string;
  status:"Confirmada"|"Conflito"|"Removida"; fromReserve:boolean;
}
export interface Reserve {
  id:string; eventId:string; vacancyId:string; employeeId:string;
  status:ReserveStatus; createdAt:string;
}
export interface Manager {
  id:string; name:string; status:"Ativo"|"Inativo"; lastAccess:string; permissionIds:string[];
}
export interface AuditEntry {
  id:string; user:string; role:string; action:string; entity:string; date:string; change:string;
}
export interface HistoryEntry {
  id:string; date:string; action:string; entity:string; responsible:string; description:string;
}
export interface Permission { id:string; label:string; group:string }

export interface MockDatabase {
  employees:Employee[]; levels:Level[]; skills:Skill[]; events:EventItem[]; vacancies:Vacancy[];
  applications:Application[]; allocations:Allocation[]; reserves:Reserve[]; managers:Manager[];
  history:HistoryEntry[]; audit:AuditEntry[];
}
