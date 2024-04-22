const validateForm = (form) => {
  let errors = {};
  for (let key in form) {
    let isEmpty = '';
    if (!form[key]) {
      errors[key] = `El campo ${key} está vacio`;
      isEmpty = true;
    } else {
      isEmpty = false;
    }
    switch (key) {
      case 'title':
        if (form[key].length < 3 && !isEmpty) {
          errors[key] = 'El campo tiene menos de 3 carácteres';
        }
        if (form[key].length >= 30 && !isEmpty) {
          errors[key] = 'El campo tiene más de 30 carácteres';
        }
        break;
      case 'description':
        if (form[key].length < 10 && !isEmpty) {
          errors[key] = 'El campo tiene menos de 10 carácteres';
        }

        if (form[key].length >= 800 && !isEmpty) {
          errors[key] = 'El campo tiene más de 800 carácteres';
        }
        break;
      case 'pages':
        const input = form[key];
        const isNumber = parseInt(input);
        if (!isNumber && !isEmpty) {
          errors[key] = 'El valor debe ser un número';
          if (input <= 0) {
            errors[key] = 'Lás paginas no pueden ser 0 o negativas   ';
          }
          if (input > 6000) {
            errors[key] = 'Las páginas no pueden ser mayor a 6000';
          }
        }

        break;
      case 'publication_date':
        if (form[key].length > 4 && !isEmpty) {
          errors[key] = 'El campo solo tiene que tener 4 carácteres';
        }
        break;
      case 'image_url':
        if (form[key].length > 120 && !isEmpty) {
          errors[key] = 'El campo tiene más de 120 carácteres';
        }
        break;
      case 'extract':
        if (form[key].length > 200 && !isEmpty) {
          errors[key] = 'El campo tiene que tener como máximo 200 caracteres';
        }

        break;
    }
  }

  return errors;
};
export default validateForm;
