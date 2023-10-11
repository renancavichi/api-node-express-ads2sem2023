import db from '../database/db.js'
import { z } from 'zod'

const userSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "ID deve ser um número.",
      }),
    name: z.string({
        required_error: "Name é obrigatório.",
        invalid_type_error: "O nome deve ser do tipo string.",
      })
      .min(3, { message: "O nome deve ter no mínimo 3 caracteres." })
      .max(200, { message: "O nome deve ter no máximo 200 caracteres." }),
    email: z.string({
        required_error: "Email é obrigatório.",
        invalid_type_error: "Email deve ser uma string.",
      })
      .email({ message: "Email Inválido." })
      .min(5, { message: "O email deve ter ao menos 5 caracteres." })
      .max(500, { message: "Email deve ter no máximo 500 caracteres." }),
    pass: z.string({
        required_error: "Senha é obrigatória.",
        invalid_type_error: "A senha deve ser do tipo string.",
    })
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres." })
      .regex(new RegExp('.*[A-Z].*'), { message: "A senha deve ter no mínimo uma letra maiúscula." })
      .regex(new RegExp('.*[a-z].*'), { message: "A senha deve ter no mínimo uma letra minúscula." })
      .regex(new RegExp('.*[0-9].*'), { message: "A senha deve ter no mínimo um número." })
      .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), { message: "A senha deve ter no mínimo um caractere especial." })
      .max(500, { message: "A senha deve ter no máximo 500 caracteres." }),
    photo: z.string({
        required_error: "Foto é obrigatória.",
        invalid_type_error: "A foto deve ser do tipo string.",
    })
      .url({ message: "A foto deve ser uma url válida." })
})

const validateCreateUser = (user) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(user)
}

const validateUpdateUser = (user) => {
    const partialUserSchema = userSchema.partial({pass: true})
    return partialUserSchema.safeParse(user)
}

const validadeIdUser = (user) => {
  const partialUserSchema = userSchema.partial({
    name: true,
    email: true,
    pass: true,
    photo: true
  })
  return partialUserSchema.safeParse(user)
}

const get = async (id) => {
    return await db.query('SELECT * FROM users WHERE id = ?;', [id])
}

const list = async () => {
    return await db.query('SELECT * FROM users;')
}

const create = async (user) => {
    const {name, email, pass, photo} = user
    return await db.query('INSERT INTO users (name, email, pass, photo) VALUES (?, ?, ?, ?);', [name, email, pass, photo])
}

const update = async (user) => {
    const {id, name, email, pass, photo} = user
    return await db.query('UPDATE users SET name = ?, email = ?, pass = ?, photo = ? WHERE id = ?;', [name, email, pass, photo, id])
}

const remove = async (id) => {
    return await db.query('DELETE FROM users WHERE id = ?;', [id])
}

export default {get, list, create, update, remove, validateCreateUser, validateUpdateUser, validadeIdUser}