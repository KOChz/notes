import styled from 'styled-components'

export const DeleteNoteAnimation = styled.div`
  @keyframes appear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation-name: appear;
  animation-duration: 1s;
`

export default DeleteNoteAnimation
