import React from 'react'
import { ButtonEntrar, Contenedor, DivHeader, SubHeader, TextImbrech } from './styles'

export function Init (){
    return(
        <Contenedor>
             <DivHeader>
                      <SubHeader>
                            <TextImbrech>
       IMBRECH
                            </TextImbrech>
                            <ButtonEntrar>
       Enter
                            </ButtonEntrar>
                     </SubHeader>
           </DivHeader>
        </Contenedor>
    )
}

export default Init