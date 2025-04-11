import { z } from "zod";

export const orderScheme = z.object({
  tel: z.string().length(13, "Не правильный формат номера телефона").nonempty(),
  name: z.string().min(2, "Слишком маленькое имя").max(20).nonempty(),
  conf: z.boolean({
    message: "Вы должны согласиться с Политикой обработки персональных данных",
  }),
});
