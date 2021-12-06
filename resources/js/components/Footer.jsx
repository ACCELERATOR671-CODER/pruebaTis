import React from 'react'
import { FooterStyle, Label } from '../elementos/footer'

const Footer = () => {
    return (
        <div>
            <FooterStyle>
                <Label>--- Empresa Tis ---  </Label>
                <hr/>
                <Label><b>Correo : <a href="mailto:elcorreoquequieres@correo.com"> corina.flores1@gmail.com</a></b> xxxx ---  <b>Telefono : xxxxxxxx</b>  ----- <b>Direccion :</b>  Av. Oquendo final Jordán</Label>
                <Label>---Mythical Soft SRL<a href="mailto:elcorreoquequieres@correo.com"> mythicalsoftsrl@gmail.com</a>---</Label>
            </FooterStyle>
        </div>
    )
}

export default Footer
