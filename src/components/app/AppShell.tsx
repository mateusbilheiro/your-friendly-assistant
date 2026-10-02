import { useState, type ReactNode } from "react";
import { Bell, CalendarDays, ChevronDown, ClipboardList, Clock3, FileCheck2, History, LayoutDashboard, Menu, ShieldCheck, Sparkles, Users, UserCog, BriefcaseBusiness, Layers3, Settings2, LogOut } from "lucide-react";
import type { Role } from "../../types";
import { Button } from "./Primitives";

export type View =
  | "dashboard"|"employees"|"levels"|"skills"|"events"|"calendar"|"vacancies"|"applications"|"allocations"|"standby"|"history"|"audit"|"managers"|"permissions"
  | "my-events"|"opportunities"|"my-applications"|"profile";

const adminItems:[View,string,ReactNode][]=[
  ["dashboard","Dashboard",<LayoutDashboard size={17}/>],["employees","Funcionárias",<Users size={17}/>],["levels","Níveis",<Layers3 size={17}/>],
  ["skills","Habilidades",<Sparkles size={17}/>],["events","Eventos",<CalendarDays size={17}/>],["calendar","Agenda",<Clock3 size={17}/>],
  ["vacancies","Vagas",<BriefcaseBusiness size={17}/>],["applications","Candidaturas",<ClipboardList size={17}/>],["allocations","Alocações",<FileCheck2 size={17}/>],
  ["standby","Sobreaviso",<ShieldCheck size={17}/>],["history","Histórico",<History size={17}/>],["audit","Auditoria",<ShieldCheck size={17}/>],
  ["managers","Gerentes",<UserCog size={17}/>],["permissions","Acessos",<Settings2 size={17}/>]
];
const employeeItems:[View,string,ReactNode][]=[
  ["dashboard","Início",<LayoutDashboard size={17}/>],["my-events","Meus eventos",<CalendarDays size={17}/>],["opportunities","Oportunidades",<Sparkles size={17}/>],
  ["my-applications","Minhas candidaturas",<ClipboardList size={17}/>],["profile","Meu perfil",<Users size={17}/>]
];

export function AppShell({role,view,onView,onRoleChange,children}:{role:Role;view:View;onView:(v:View)=>void;onRoleChange:(r:Role)=>void;children:ReactNode}) {
  const [mobileOpen,setMobileOpen]=useState(false);
  const items=role==="employee"?employeeItems:adminItems;
  const roleName={admin:"Administrador",manager:"Gerente",employee:"Funcionária"}[role];
  const userName={admin:"Administrador",manager:"Maria Oliveira",employee:"Ana Martins"}[role];
  return <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
    <aside className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-200 bg-white transition-transform lg:translate-x-0 ${mobileOpen?"translate-x-0":"-translate-x-full"}`}>
      <div className="flex h-16 items-center gap-3 border-b border-slate-100 px-5"><div className="grid size-9 place-items-center rounded-xl bg-slate-900 text-white"><Sparkles size={18}/></div><div><p className="font-semibold tracking-tight">Eventa</p><p className="text-[11px] text-slate-400">Gestão de equipes</p></div></div>
      <div className="p-3"><div className="mb-3 rounded-xl bg-slate-50 p-2"><p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Perfil de demonstração</p><select value={role} onChange={e=>onRoleChange(e.target.value as Role)} className="mt-1 w-full bg-transparent text-sm font-medium outline-none"><option value="admin">Administrador</option><option value="manager">Gerente</option><option value="employee">Funcionária</option></select></div>
      <nav className="space-y-1">{items.map(([id,label,icon])=><button key={id} onClick={()=>{onView(id);setMobileOpen(false)}} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${view===id?"bg-slate-900 text-white":"text-slate-600 hover:bg-slate-100"}`}>{icon}<span>{label}</span></button>)}</nav></div>
      <div className="absolute bottom-0 w-full border-t border-slate-100 p-4"><div className="flex items-center gap-3"><div className="grid size-9 place-items-center rounded-full bg-slate-100 text-xs font-semibold">{userName.split(" ").map(x=>x[0]).join("").slice(0,2)}</div><div className="min-w-0"><p className="truncate text-sm font-medium">{userName}</p><p className="text-xs text-slate-400">{roleName}</p></div><LogOut size={16} className="ml-auto text-slate-400"/></div></div>
    </aside>
    {mobileOpen&&<div className="fixed inset-0 z-30 bg-slate-950/20 lg:hidden" onClick={()=>setMobileOpen(false)}/>}
    <div className="lg:pl-64"><header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-6"><div className="flex items-center gap-3"><button className="rounded-lg p-2 hover:bg-slate-100 lg:hidden" onClick={()=>setMobileOpen(true)}><Menu size={20}/></button><div><p className="text-sm font-medium text-slate-900">{role==="employee"?"Olá, Ana":"Olá, "+userName.split(" ")[0]}</p><p className="hidden text-xs text-slate-400 sm:block">Gestão operacional de eventos</p></div></div><div className="flex items-center gap-2"><button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100"><Bell size={19}/><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-rose-500"/></button><div className="hidden items-center gap-2 border-l border-slate-200 pl-3 sm:flex"><div className="grid size-8 place-items-center rounded-full bg-slate-900 text-xs font-semibold text-white">{userName.split(" ").map(x=>x[0]).join("").slice(0,2)}</div><ChevronDown size={15} className="text-slate-400"/></div></div></header><main className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">{children}</main></div>
  </div>
}
