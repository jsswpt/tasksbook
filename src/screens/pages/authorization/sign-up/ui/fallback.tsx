import { Template } from './template'

import { SignUp } from '@/features/authorization/sign-up'

export const Fallback = () => <Template signUpForm={<SignUp isFallback />} />
