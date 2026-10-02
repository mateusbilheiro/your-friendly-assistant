export type Role="admin"|"manager"|"worker";export type Status="active"|"inactive"|"pending"|"approved"|"rejected";
export type VacancyType="normal"|"reserve";export type ReserveStatus="standby"|"activated"|"allocated"|"released";
export type SkillMatch="all"|"any";
export interface Level{id:string;name:string;active:boolean}
export interface Skill{id:string;name:string;active:boolean}
export interface Worker{id:string;name:string;phone:string;levelId:string;skillIds:string[];professionalStatus:string;accessStatus:string;avatar:string}
export interface EventItem{id:string;name:string;date:string;arrival:string;start:string;end:string;location:string;status:string;info:string}
export interface Slot{id:string;eventId:string;name:string;quantity:number;filled:number;type:VacancyType;levelId?:string;skillIds:string[];skillMatch:SkillMatch}
export interface Application{id:string;workerId:string;slotId:string;eventId:string;date:string;status:"Pendente"|"Aprovada"|"Rejeitada"}
export interface Allocation{id:string;eventId:string;slotId:string;workerId:string;date:string;status:"Confirmada"|"Conflito"|"Removida";fromReserve:boolean}
export interface Reserve{id:string;eventId:string;slotId:string;workerId:string;status:ReserveStatus;createdAt:string}
export interface Manager{id:string;name:string;status:string;lastAccess:string;permissionIds:string[]}
export interface Permission{id:string;label:string;group:string}
export interface HistoryEntry{id:string;date:string;action:string;entity:string;responsible:string;description:string}
export interface AuditEntry{id:string;user:string;role:string;action:string;entity:string;date:string;change:string}