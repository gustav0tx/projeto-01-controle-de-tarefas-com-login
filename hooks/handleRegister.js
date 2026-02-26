const handleRegister = (setUser, setUsing, setLogedShow, setLoged, createUser, verifyPass, name, pass) => {

    const verify = verifyPass(pass, secPass)

    setUser(createUser(name, pass, verify))

    setUsing(true)

    setLogedShow(false)

    setLoged(false)

}

export default handleRegister