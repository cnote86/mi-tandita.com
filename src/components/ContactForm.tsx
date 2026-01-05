"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full bg-[#243824] border border-[#3d5a3d] px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7fde58] transition-colors"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full bg-[#243824] border border-[#3d5a3d] px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7fde58] transition-colors"
        />
      </div>
      <div>
        <textarea
          placeholder="Mensaje"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={5}
          className="w-full bg-[#243824] border border-[#3d5a3d] px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7fde58] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#7fde58] text-[#1a2e1a] font-bold py-4 px-8 hover:bg-[#9fe878] transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
      >
        {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
      </button>
      
      {status === "success" && (
        <p className="text-[#7fde58] text-center text-sm">
          Mensaje enviado correctamente.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center text-sm">
          Error al enviar. Intenta de nuevo.
        </p>
      )}
    </form>
  );
}
