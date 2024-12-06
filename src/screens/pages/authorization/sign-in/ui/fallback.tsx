import { Template } from './template'

import { SignIn } from '@/features/authorization/sign-in'

export const Fallback = () => <Template signInForm={<SignIn isFallback />} />
