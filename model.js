model User {
    id        String   @id @default(uuid())
    email     String   @unique
    password  String
    Profile   Profile?
    Posts     Post[]
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }
  
  model Profile {
    id        Int    @id @default(autoincrement())
    firstName String
    lastName  String
    User      User   @relation(fields: [userId], references: [id])
    userId    String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }
  
  model Post {
    id       Int    @id @default(autoincrement())
    message  String
    Author   User   @relation(fields: [authorId], references: [id])
    authorId String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }