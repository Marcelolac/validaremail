function validaremail($email) {
    if ((substr($email, 0, -10) == "@gmail.com") || (substr($email, 0, -10) == "@outlook.com") || (substr($email, 0, -10) == "@hotmail.com"))
    {
        return 'Email válido';
    } else {
        return 'inválido';
    }
}
