// ---------------------- CUSTOM REGULAR EXPRESSIONS ----------------------

/*************************************************
 * @description
 * EN => Validation for any string of email format but with the domain as "@omega.support.com".
 *
 * ES => Validación para cualquier cadena de formato de correo electrónico pero con el dominio "@omega.support.com".
 * @example
 * "my.email-addres@omega.support.com"
 */
export const Email_OmegaSupport =
  /^[a-z]+(?!.*[ \t\r\n])(?:.*[\.a-z0-9_-]+)*@(?:omega.support.com)$/;

/*************************************************
 * @description
 * EN => Validation for any string of password format  and check if it has at least an Upper, a lower case, and a digit.
 *
 * ES => Validación para cualquier cadena de formato de contraseña y verificar si tiene al menos una mayúscula, una minúscula y un dígito.
 * @example
 * "Th1S_is$My *p@AsSW0rd#"
 */
export const Password_UpperLowerDigit =
  /(?!.*[^\-_a-zA-Z0-9@#%,&!$*. ])^[^\t\r\n](?=.*\d)(?=.*[a-z])(?=.*[A-Z]){0,}.*[^\t\r\n]$/;
