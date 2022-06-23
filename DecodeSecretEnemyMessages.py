def decode(code):
    serial = 'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH'
    dicc = {serial[i] : i for i in range(len(serial))}
    message = ''
    for i in range(len(code)):
        if code[i] not in serial:
            message += code[i]
            continue
        idx = dicc[code[i]] - i - 1
        while idx < 0:
            idx += 66
        message += serial[idx]
    return message
