import {create} from 'zustand'

interface loginStore {
    open: boolean;
    onClose: () => void;
}

const useLoginStore = create<loginStore>((set)=>({
    open: false,
    onClose: () => set((state)=> ({open: !state.open}))
}))


export default useLoginStore