# Development

Pasos para levantar en desarrollo

1. Levantar la base de datos

```
docker compose up -d
```

2. Crear una copia del .env.template, y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar los siguientes comandos:

```
   npm install
   npm run dev
```

5. Ejecutar los siguientes comando de Prisma

```
npx prisma migrate dev
npx prisma generate
```

5. Ejecutar el SEED para [rellenar la base de datos](localhost:3000/api/seed)

## Nota: Usuario por defecto

**usuario:** test1@gmail.com
**password:** 123456

# Prisma comandos

```

npx prisma init
npx prisma migrate dev
npx prisma generate

```

```

```
