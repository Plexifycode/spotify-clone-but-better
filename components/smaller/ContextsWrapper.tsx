
import { playStateProvider } from '@/lib/PlayStateContext';

const ContextsWrapper = ({ children }: {children: React.ReactNode}) => {
  

  
  return (
    <playStateProvider passedSong={}>
        
    </playStateProvider>
  )
}

export default ContextsWrapper
