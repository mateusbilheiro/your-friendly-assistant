import { type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode } from "react";

export function Button({variant="primary",className="",children,...props}:{variant?:"primary"|"secondary"|"ghost"|"danger";className?:string;children:ReactNode}&ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles={primary:"bg-slate-900 text-white hover:bg-slate-800",secondary:"bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",ghost:"bg-transparent text-slate-600 hover:bg-slate-100",danger:"bg-rose-600 text-white hover:bg-rose-700"};
  return <button className={`inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`} {...props}>{children}</button>;
}
export function Input({className="",...props}:InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100 ${className}`} {...props}/>;
}
export function Badge({children,tone="neutral"}:{children:ReactNode;tone?:"neutral"|"success"|"warning"|"danger"|"info"}) {
  const styles={neutral:"bg-slate-100 text-slate-600",success:"bg-emerald-50 text-emerald-700",warning:"bg-amber-50 text-amber-700",danger:"bg-rose-50 text-rose-700",info:"bg-blue-50 text-blue-700"};
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles[tone]}`}>{children}</span>;
}
export function Card({children,className=""}:{children:ReactNode;className?:string}) { return <section className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</section> }
export function SectionTitle({title,subtitle,action}:{title:string;subtitle?:string;action?:ReactNode}) { return <div className="mb-5 flex items-start justify-between gap-4"><div><h2 className="text-lg font-semibold text-slate-900">{title}</h2>{subtitle&&<p className="mt-1 text-sm text-slate-500">{subtitle}</p>}</div>{action}</div> }
export function EmptyState({title,description,action}:{title:string;description:string;action?:ReactNode}) { return <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-6 py-12 text-center"><p className="font-medium text-slate-800">{title}</p><p className="mx-auto mt-1 max-w-md text-sm text-slate-500">{description}</p>{action&&<div className="mt-4">{action}</div>}</div> }
export function Modal({open,onClose,title,children}:{open:boolean;onClose:()=>void;title:string;children:ReactNode}) { if(!open)return null; return <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/30 p-0 sm:items-center sm:p-6" onMouseDown={onClose}><div className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl" onMouseDown={e=>e.stopPropagation()}><div className="mb-5 flex items-center justify-between"><h3 className="text-lg font-semibold text-slate-900">{title}</h3><button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100" aria-label="Fechar">×</button></div>{children}</div></div> }
