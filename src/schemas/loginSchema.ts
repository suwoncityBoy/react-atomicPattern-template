import { z } from 'zod';

export const loginSchema = z.object({
  id: z.string().nonempty('아이디를 입력해주세요.'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다.'),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
