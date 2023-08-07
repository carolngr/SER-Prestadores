import * as yup from "yup";

export const form_validation = yup.object().shape({
  profilePic: yup
    .mixed<FileList>()
    .test(
      "fileSize",
      "Only documents up to 2MB are permitted.",
      (files) =>
        !files ||
        files.length === 0 ||
        Array.from(files).every((file) => file.size <= 2_000_000)
    ),
  name: yup
  .string()
  .required("O nome completo é obrigatório"),
  phone: yup
  .string()
  .required("O número de telefone é obrigatório"),
  cpf: yup
  .string()
  .required("O cpf é obrigatório"),
  email: yup
    .string()
    .email("O email deve ser válido")
    .required("O email é obrigatório"),
  bio: yup
  .string()
  .required("A bio é obrigatória"),
});
