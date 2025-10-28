import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
const pqrsSchema =Yup.object().shape({
    fullname: Yup.string()
        .required('El nombre es obligatorio')
        .max(100, 'El nombre no puede exceder los 100 caracteres'),
    email: Yup.string()
        .required('El email es obligatorio')
        .email('El email no es válido'),
    phone: Yup.string()
        .required('El celular es obligatorio')
        .matches(/^[0-9]{8,15}$/, 'El celular debe contener entre 8 y 15 dígitos numéricos'),
    orderNumber: Yup.string()
        .max(50, 'El número de pedido no puede exceder los 50 caracteres'),
    description: Yup.string()
        .required('La descripción es obligatoria')
        .max(500, 'La descripción no puede exceder los 500 caracteres'),    
})
const RegistroPQRS = () => {

    return <div>
        <h1>Página de Registro de PQRS</h1>
        <Formik
            initialValues={{}}
            validationSchema={pqrsSchema}
            onSubmit={(values, setSubmitting)=>{
                console.log("FORM sent!", values)
                setSubmitting(false);
            }}
        >
         {({values, isSubmitting,errors, touched})=>{
                return <Form>
                    <Field name="fullname" placeholder="Nombre Completo" className="custom" />
                    {errors.fullname && touched.fullname && <div>{errors.fullname}</div>}
                    <br/>
                    <Field name="email" placeholder="Correo Electrónico" type="email" />
                    {errors.email && touched.email && <div>{errors.email}</div>}
                    <br/>
                    <Field name="phone" placeholder="Número de Celular" />
                    {errors.phone && touched.phone && <div>{errors.phone}</div>}
                    <br/>
                    <Field name="orderNumber" placeholder="Número de Pedido (opcional)" />
                    {errors.orderNumber && touched.orderNumber && <div>{errors.orderNumber}</div>}
                    <br/>
                    <Field as="textarea" name="description" placeholder="Descripción de la PQRS" />
                    {errors.description && touched.description && <div>{errors.description}</div>}
                    <br/>
                    <button type="submit" disabled={isSubmitting}>Enviar PQRS</button>
                </Form>
            }}

        </Formik>
        
    </div>
}

export default RegistroPQRS