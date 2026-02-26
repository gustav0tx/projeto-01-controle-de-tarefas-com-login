const verifyPass = (pass, secPass) => {

  if(pass == secPass && pass.trim().length != 0) {

    return true;

  } else {

    return false;

  }

}

export default verifyPass;