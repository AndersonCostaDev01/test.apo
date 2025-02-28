"use client";

import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="bg-zinc-400 h-screen w-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="text-zinc-700 p-4 bg-white shadow rounded"
              >
                <p>
                  <strong>Nome:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Admin:</strong> {user.isAdmin ? "Sim" : "Não"}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
