import { Rule } from 'effector-forms'

export const rules = {
  email: (): Rule<string> => ({
    name: 'email',
    validator: (value) => /\S+@\S+\.\S+/.test(value),
  }),
  maxLength: (max: number): Rule<string> => ({
    name: 'maxLength',
    validator: (value) => value.length <= max,
  }),
  minLength: (min: number): Rule<string> => ({
    name: 'minLength',
    validator: (value) => value.length >= min,
  }),
  required: (): Rule<string> => ({
    name: 'required',
    validator: (value) => Boolean(value),
  }),
}
