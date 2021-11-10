import styled from 'styled-components'

export const AddNoteAnimation = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  text-decoration: none;
  animation-name: appear;
  animation-duration: 0.5s;
`

export const DeleteNoteAnimation = styled(AddNoteAnimation)`
  @keyframes appear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
