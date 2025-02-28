/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    console.error("Erro ao buscar usuários:", error);

    return NextResponse.json(
      { error: error.message || "Erro ao buscar usuários" },
      { status: 500 }
    );
  }
}
