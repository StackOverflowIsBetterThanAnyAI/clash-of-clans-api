import { createContext, Dispatch, SetStateAction } from 'react'
import { PlayerProps } from '@/types/PlayerProps'

export const ContextPlayer = createContext<
    [PlayerProps, Dispatch<SetStateAction<PlayerProps>>] | undefined
>(undefined)
