import React from 'react'
import { FooterStyle, Label } from '../elementos/footer'

const Footer = () => {
    return (
        <div>
            <FooterStyle>
                <Label>--- Empresa Tis ---  </Label>
                <hr/>
                <Label><b>Correo : <a href="mailto:elcorreoquequieres@correo.com"> EmpresaTIS@gmail.com</a></b> ---  <b>Telefonos Administradores : 69449432-76426418</b>  ----- <b>Direccion :</b>  Av. Oquendo Final Jordan, Laboratorios FCYT</Label>
                <Label>---Mythical Soft SRL<a href="mailto:elcorreoquequieres@correo.com"> mythicalsoftsrl@gmail.com</a>---</Label>
            </FooterStyle>
        </div>
    )
}

export default Footer
