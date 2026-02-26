const createUser = (nameUser, passUser, verify) => {

  if(verify) {

    const user = {name: nameUser, pass: passUser, list: []}

    return user

  }

}

export default createUser;