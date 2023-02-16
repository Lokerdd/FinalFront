import * as Yup from 'yup';

const getSchema = () => {
  const shape = {
    header: Yup.string()
      .trim()
      .required('Required'),
    description: Yup.string()
      .trim()
      .required('Required'),
    tags: Yup.string(),
  };
  return Yup.object().shape(shape);
};

export default getSchema;
