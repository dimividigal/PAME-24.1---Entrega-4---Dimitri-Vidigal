-- CreateTable
CREATE TABLE "Funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pecas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_peca" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Material" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo_material" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Checklist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_funcionario" INTEGER NOT NULL,
    "id_material" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Checklist_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Checklist_id_material_fkey" FOREIGN KEY ("id_material") REFERENCES "Material" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_funcionario" INTEGER NOT NULL,
    "id_peca" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    CONSTRAINT "Estoque_id_funcionario_fkey" FOREIGN KEY ("id_funcionario") REFERENCES "Funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Estoque_id_peca_fkey" FOREIGN KEY ("id_peca") REFERENCES "Pecas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
