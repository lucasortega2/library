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
        if (form[key].length > 60 && !isEmpty) {
          errors[key] = 'El campo tiene más de 60 carácteres';
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
        const input = parseInt(form[key]);
        if (isNaN(input)) {
          errors[key] = 'Las páginas deben ser un número mayor que 0';
        } else if (input > 6000) {
          errors[key] = 'Las páginas no pueden ser mayores a 6000';
        }
        break;
      case 'publication_date':
        if (form[key].length > 10 && !isEmpty) {
          errors[key] = 'El campo solo tiene que tener 10 carácteres';
        }
        break;
      case 'image_url':
        if (form[key].length > 250 && !isEmpty) {
          errors[key] = 'El campo tiene más de 250 carácteres';
        }
        break;
      case 'extract':
        if (form[key].length >= 250 && !isEmpty) {
          errors[key] = 'El campo tiene que tener como máximo 250 caracteres';
        }

        break;
    }
  }

  return errors;
};
export default validateForm;
