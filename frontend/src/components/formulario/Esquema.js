import * as Yup from "yup";
const Esquema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  telefono: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mensaje: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  terms: Yup.bool().required(),
});
export default Esquema;
