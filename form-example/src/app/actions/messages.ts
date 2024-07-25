import { revalidatePath } from "next/cache"

export const messages: string[] = ["first message"]

export const createMessage = async (formData: FormData) => {
    'use server'
    await new Promise((resolve) => setTimeout(resolve, 1000))

    messages.push(formData.get('new-message') as string)

    revalidatePath('/')
}

export const getMessages = async (): Promise<string[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return Promise.resolve(messages)
  }