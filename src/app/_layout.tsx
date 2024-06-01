import { Slot } from 'expo-router'

export default function  Layout () {
    // slot pega as rotas disponíveis e repassa para frente
    return (
        <Slot/> 
    )
}