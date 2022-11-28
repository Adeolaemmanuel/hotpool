// ** Custom Components
import AvatarGroup from '@components/avatar-group'

const data = [
  {
    title: 'Vinnie Mostowy',
    img: require('@src/assets/images/avatars/avatar-blank.png').default
  },
  {
    title: 'Elicia Rieske',
    img: require('@src/assets/images/avatars/avatar-blank.png').default
  },
  {
    title: 'Julee Rossignol',
    img: require('@src/assets/images/avatars/avatar-blank.png').default
  },
  {
    title: 'Darcey Nooner',
    img: require('@src/assets/images/avatars/avatar-blank.png').default
  },
  {
    title: 'Jenny Looper',
    img: require('@src/assets/images/avatars/avatar-blank.png').default
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
