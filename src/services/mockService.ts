import { mockDb } from "../data/mock";
import type { Employee, MockDatabase, Role } from "../types";

export interface AppService {
  getDb(): MockDatabase;
  getUser(role:Role): { id:string; name:string; role:Role; employeeId?:string };
  can(role:Role, permission:string): boolean;
  getEligibleVacancies(employeeId:string): ReturnType<typeof getEligibleVacancies>;
}

export function getEligibleVacancies(employeeId:string) {
  const employee = mockDb.employees.find(e=>e.id===employeeId);
  if (!employee) return [];
  return mockDb.vacancies.filter(v => {
    const levelOk = !v.levelId || v.levelId === employee.levelId;
    const skillsOk = v.skillIds.length === 0 || (v.skillMatch === "all"
      ? v.skillIds.every(s => employee.skillIds.includes(s))
      : v.skillIds.some(s => employee.skillIds.includes(s)));
    return levelOk && skillsOk && v.filled < v.quantity;
  });
}

export const mockService: AppService = {
  getDb: () => mockDb,
  getUser: (role) => role === "admin"
    ? {id:"u-admin",name:"Administrador",role}
    : role === "manager"
      ? {id:"u-manager",name:"Maria Oliveira",role}
      : {id:"u-employee",name:"Ana Martins",role,employeeId:"e1"},
  can: (role, permission) => role === "admin" || mockDb.managers[0].permissionIds.includes(permission),
  getEligibleVacancies,
};

export const labelFor = (items:{id:string;name:string}[], id?:string) =>
  items.find(i => i.id === id)?.name ?? "—";

export const employeeById = (id:string): Employee | undefined =>
  mockDb.employees.find(e => e.id === id);
