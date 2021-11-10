import styled from 'styled-components'

const AddNoteAnimation = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation-name: appear;
  animation-duration: 1s;
`

export default AddNoteAnimation
