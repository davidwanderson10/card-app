
const regEmail = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)


/**
 *  Retorna um objeto com os atributos obrigatórios que estão nulos
 */

export const requiredAttributes = async (requiredAttr, body) => {

    let required = await requiredAttr.reduce((acum, item) => {
        acum.required[`${item}_required`] = (
            body[item] === "" ||
            body[item] === null ||
            body[item] === undefined ||
            (Array.isArray(body[item]) && !body[item].length)
        ) ? "Campo obrigatório" : false

        if (
            body[item] === "" ||
            body[item] === null ||
            body[item] === undefined ||
            (Array.isArray(body[item]) && !body[item].length)
        ) {
            acum.count++
        }
        return acum
    }, { count: 0, required: {} })

    return required

}


/**
 * Valida o formato dos iputs
 */

export const formatAttributes = async (formatAttr, body) => {

    let format = await formatAttr.reduce((acum, item) => {
        if (item.type === "email") {
            acum.format[`${item.attr}_format`] = !regEmail.test(body[item.attr]) ? "Formato inválido" : false
            if ( !regEmail.test(body[item.attr]) ) {
                acum.count++
            }
        }
        return acum
    }, { count: 0, format: {} })

    return format

}