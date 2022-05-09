const authentication = (userData: any) => {
  try {
    if (!userData.rows.length) throw new Error();
    if (!userData.rows[0].username) throw new Error();
    return userData;
  } catch (err) {
    throw new Error('Credenciais inválidas');
  }
};

export default authentication;
