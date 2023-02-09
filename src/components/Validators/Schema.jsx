import * as yup from "yup";

const passwordType = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

const nameType = /[a-z][a-zA-Z0-9]{9,}/;

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório.")
    .matches(nameType, "Deve conter mínimo 10 caracteres"),

  email: yup
    .string()
    .required("E-mail é obrigatório.")
    .email("E-mail inválido."),

  password: yup
    .string()
    .required("Senha é obrigatório.")
    .matches(
      passwordType,
      "Deve conter no mínimo 8 caracteres, letra minúsculas e maiúsculas, número, um caractere especial"
    ),

  passwordConfirm: yup
    .string()
    .required("Confirmar a senha é obrigatório.")
    .oneOf([yup.ref("password")], "Senhas não são iguais."),

  bio: yup.string().required("Bio é obrigatório."),

  contact: yup.string().url("Linkedin é obrigatório."),

  course_module: yup.string().required("Selecione 1 modulo por favor."),
});

export default formSchema;
