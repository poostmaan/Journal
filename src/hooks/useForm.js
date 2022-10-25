import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    // Me ayudara a mantener un lugar con los errores que existen con la validacion
    const [formValidation, setFormValidation] = useState({});

    // Cada vez que cambie el formState se llamara la funcion para validar datos
    useEffect(() => {
      createValidators();
    }, [formState])

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[formValue] !== null) return false
        }

        return true;

    }, [ formValidations ]);
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    // una funcion de flecha para validar los objetos formValidation
    const createValidators = () => {

        const formCheckedValues = {}

        for (const formField of Object.keys( formValidations ) ) {
            const [ fn, errorMessage ] = formValidations[formField];
            // Crea una clave en el objeto  
            // * emailValid
            // * displayValid
            formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) 
                ? null 
                : errorMessage;
        }

        setFormValidation( formCheckedValues )

    }

    return {
        ...formState,
        ...formValidation, 
        formState,
        isFormValid,
        onInputChange,
        onResetForm,
    }
}

/**
 * * UY Marica, este hook nos ayudara a controlar los formularios
 * ! Es bueno colocarlo en la raiz para que todos mi modulos puedan hacer uso de el
 */